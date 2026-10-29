import { API_ENDPOINT_URL, TMDB_V3_API_KEY } from "src/constant";
import { createApi, fetchBaseQuery, BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { mockDataHandler } from "src/mock/mockData";

const rawBaseQuery = fetchBaseQuery({ baseUrl: API_ENDPOINT_URL });

const customBaseQuery: BaseQueryFn = async (args, api, extraOptions) => {
  if (!TMDB_V3_API_KEY) {
    return { data: mockDataHandler(args) };
  }
  try {
    const result = await rawBaseQuery(args, api, extraOptions);
    if (result.error) {
      console.warn("TMDB API request failed or blocked, falling back to mock data:", result.error);
      return { data: mockDataHandler(args) };
    }
    return result;
  } catch (err) {
    console.warn("TMDB API network exception, falling back to mock data:", err);
    return { data: mockDataHandler(args) };
  }
};

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: customBaseQuery,
  endpoints: (build) => ({}),
});

