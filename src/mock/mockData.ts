import { PaginatedMovieResult } from "src/types/Common";
import { Movie, MovieDetail } from "src/types/Movie";
import { Genre } from "src/types/Genre";

export const MOCK_GENRES: Genre[] = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 18, name: "Drama" },
  { id: 14, name: "Fantasy" },
  { id: 878, name: "Sci-Fi" },
  { id: 53, name: "Thriller" },
];

export const MOCK_CONFIGURATION = {
  images: {
    base_url: "https://image.tmdb.org/t/p/",
    secure_base_url: "https://image.tmdb.org/t/p/",
    backdrop_sizes: ["w300", "w780", "w1280", "original"],
    logo_sizes: ["w45", "w92", "w154", "w185", "w300", "w500", "original"],
    poster_sizes: ["w92", "w154", "w185", "w342", "w500", "w780", "original"],
    profile_sizes: ["w45", "w185", "h632", "original"],
    still_sizes: ["w92", "w185", "w300", "original"],
  },
  change_keys: [],
};

export const MOCK_MOVIES: Movie[] = [
  {
    id: 66732,
    title: "Stranger Things",
    original_title: "Stranger Things",
    overview:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    backdrop_path: "/56v2axmYegLcr311V4Fd5Ypmphm.jpg",
    poster_path: "/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    genre_ids: [18, 878, 14],
    release_date: "2016-07-15",
    vote_average: 8.6,
    vote_count: 15400,
    popularity: 340.5,
    adult: false,
    original_language: "en",
    video: false,
  },
  {
    id: 119051,
    title: "Wednesday",
    original_title: "Wednesday",
    overview:
      "Wednesday Addams misadventures as a student at Nevermore Academy: a very unique boarding school in deepest New England.",
    backdrop_path: "/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg",
    poster_path: "/9PFonB99teqAyvgZAc4UG5hqwbv.jpg",
    genre_ids: [14, 35, 80],
    release_date: "2022-11-23",
    vote_average: 8.5,
    vote_count: 7800,
    popularity: 290.4,
    adult: false,
    original_language: "en",
    video: false,
  },
  {
    id: 1396,
    title: "Breaking Bad",
    original_title: "Breaking Bad",
    overview:
      "Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost.",
    backdrop_path: "/tsRy63Mu5cu8etL1X7ZLyf7UP19.jpg",
    poster_path: "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    genre_ids: [18, 80],
    release_date: "2008-01-20",
    vote_average: 8.9,
    vote_count: 12500,
    popularity: 210.8,
    adult: false,
    original_language: "en",
    video: false,
  },
  {
    id: 27205,
    title: "Inception",
    original_title: "Inception",
    overview:
      "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception'.",
    backdrop_path: "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    poster_path: "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    genre_ids: [28, 878, 12],
    release_date: "2010-07-15",
    vote_average: 8.4,
    vote_count: 34000,
    popularity: 180.2,
    adult: false,
    original_language: "en",
    video: false,
  },
  {
    id: 872585,
    title: "Oppenheimer",
    original_title: "Oppenheimer",
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
    poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    genre_ids: [18, 36],
    release_date: "2023-07-19",
    vote_average: 8.1,
    vote_count: 8200,
    popularity: 240.1,
    adult: false,
    original_language: "en",
    video: false,
  },
  {
    id: 157336,
    title: "Interstellar",
    original_title: "Interstellar",
    overview:
      "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    backdrop_path: "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    poster_path: "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    genre_ids: [12, 18, 878],
    release_date: "2014-11-05",
    vote_average: 8.4,
    vote_count: 32000,
    popularity: 195.4,
    adult: false,
    original_language: "en",
    video: false,
  },
  {
    id: 155,
    title: "The Dark Knight",
    original_title: "The Dark Knight",
    overview:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.",
    backdrop_path: "/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    poster_path: "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    genre_ids: [18, 28, 80, 53],
    release_date: "2008-07-16",
    vote_average: 8.5,
    vote_count: 30000,
    popularity: 160.7,
    adult: false,
    original_language: "en",
    video: false,
  },
  {
    id: 569094,
    title: "Spider-Man: Across the Spider-Verse",
    original_title: "Spider-Man: Across the Spider-Verse",
    overview:
      "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse's very existence.",
    backdrop_path: "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    genre_ids: [16, 28, 12, 878],
    release_date: "2023-05-31",
    vote_average: 8.4,
    vote_count: 5900,
    popularity: 280.9,
    adult: false,
    original_language: "en",
    video: false,
  },
  {
    id: 93405,
    title: "Squid Game",
    original_title: "오징어 게임",
    overview:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    backdrop_path: "/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg",
    poster_path: "/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    genre_ids: [28, 18, 53],
    release_date: "2021-09-17",
    vote_average: 7.8,
    vote_count: 13000,
    popularity: 230.4,
    adult: false,
    original_language: "ko",
    video: false,
  },
  {
    id: 71446,
    title: "Money Heist",
    original_title: "La casa de papel",
    overview:
      "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose.",
    backdrop_path: "/gFZriCkpJYsApP0ugYeJhCKqY91.jpg",
    poster_path: "/reEMJA1uzscCbk5rUh1bGWiAbCw.jpg",
    genre_ids: [80, 18],
    release_date: "2017-05-02",
    vote_average: 8.3,
    vote_count: 17500,
    popularity: 190.2,
    adult: false,
    original_language: "es",
    video: false,
  },
  {
    id: 76479,
    title: "The Boys",
    original_title: "The Boys",
    overview:
      "A fun and irreverent take on what happens when superheroes—who are as popular as celebrities, as influential as politicians, and as revered as gods—abuse their superpowers rather than use them for good.",
    backdrop_path: "/nK0s5J284eXW2X8i4gT4w8eF6sX.jpg",
    poster_path: "/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
    genre_ids: [28, 878],
    release_date: "2019-07-26",
    vote_average: 8.4,
    vote_count: 9100,
    popularity: 310.6,
    adult: false,
    original_language: "en",
    video: false,
  },
  {
    id: 71914,
    title: "The Wheel of Time",
    original_title: "The Wheel of Time",
    overview:
      "Follow Moiraine, a member of the shadowy and influential all-female organization called the 'Aes Sedai' as she embarks on a dangerous, world-spanning journey with five young men and women.",
    backdrop_path: "/a6OT05JgTsn80udF49KkWVn2q05.jpg",
    poster_path: "/ihBi2zM1Oa3E2a6b2q8zN7y4Q9p.jpg",
    genre_ids: [18, 14],
    release_date: "2021-11-18",
    vote_average: 7.7,
    vote_count: 2100,
    popularity: 140.3,
    adult: false,
    original_language: "en",
    video: false,
  },
];

export const MOCK_TRAILERS: Record<number, string> = {
  66732: "b9EkMc79ZSU",
  119051: "Di310BC8URj",
  1396: "HhesaQXLuRY",
  27205: "YoHD9XEInc0",
  872585: "uYPbbksJxIg",
  157336: "zSWdZVtXT7E",
  155: "EXeTwQWrcwY",
  569094: "cqGjhVJWtEg",
  93405: "oqxAJKy0ii4",
  71446: "_InqQJRqGW4",
  76479: "06rueu_fh30",
  71914: "mFvVq1Jb4_E",
};

export function getMockMovieDetail(id: number): MovieDetail {
  const baseMovie =
    MOCK_MOVIES.find((m) => m.id === id) || MOCK_MOVIES[0];
  const trailerKey = MOCK_TRAILERS[id] || "b9EkMc79ZSU";

  return {
    ...baseMovie,
    belongs_to_collection: null,
    budget: 150000000,
    genres: MOCK_GENRES.filter((g) => baseMovie.genre_ids?.includes(g.id)),
    homepage: "https://movieflex.com",
    imdb_id: "tt" + baseMovie.id,
    production_companies: [
      {
        id: 1,
        logo_path: "",
        name: "MovieFlex Originals",
        origin_country: "US",
        description: "",
        headquarters: "Los Gatos, CA",
        homepage: "https://movieflex.com",
        parent_company: null,
      },
    ],
    production_countries: [{ iso_3166_1: "US", english_name: "United States" }],
    revenue: 500000000,
    runtime: 135,
    spoken_languages: [
      { iso_639_1: "en", english_name: "English", name: "English" },
    ],
    status: "Released",
    tagline: "Watch now on MovieFlex",
    videos: {
      results: [
        {
          id: "mock_vid_" + id,
          iso_639_1: "en",
          iso_3166_1: "US",
          key: trailerKey,
          name: `${baseMovie.title} Trailer`,
          official: true,
          published_at: "2023-01-01",
          site: "YouTube",
          size: 1080,
          type: "Trailer",
        },
      ],
    },
  };
}

export function mockDataHandler(queryArgs: any) {
  const url: string = typeof queryArgs === "string" ? queryArgs : queryArgs?.url || "";
  const params = typeof queryArgs === "object" ? queryArgs?.params : {};

  if (url === "/configuration") {
    return MOCK_CONFIGURATION;
  }

  if (url.includes("/genre/")) {
    return { genres: MOCK_GENRES };
  }

  // Appended videos / detail
  const detailMatch = url.match(/^\/(?:movie|tv)\/(\d+)$/);
  if (detailMatch) {
    const id = parseInt(detailMatch[1], 10);
    return getMockMovieDetail(id);
  }

  // Similar videos
  const similarMatch = url.match(/^\/(?:movie|tv)\/(\d+)\/similar$/);
  if (similarMatch) {
    const id = parseInt(similarMatch[1], 10);
    const similar = MOCK_MOVIES.filter((m) => m.id !== id);
    return {
      page: 1,
      results: similar,
      total_pages: 1,
      total_results: similar.length,
    } as PaginatedMovieResult;
  }

  // Discover by genre
  if (url.includes("/discover/")) {
    const genreId = params?.with_genres;
    const filtered = genreId
      ? MOCK_MOVIES.filter((m) => m.genre_ids?.includes(Number(genreId)))
      : MOCK_MOVIES;
    const results = filtered.length > 0 ? filtered : MOCK_MOVIES;
    return {
      page: 1,
      results,
      total_pages: 1,
      total_results: results.length,
    } as PaginatedMovieResult;
  }

  // Custom genre lists (popular, top_rated, now_playing, upcoming)
  if (
    url.includes("/popular") ||
    url.includes("/top_rated") ||
    url.includes("/now_playing") ||
    url.includes("/upcoming")
  ) {
    let results = [...MOCK_MOVIES];
    if (url.includes("/top_rated")) {
      results = [...MOCK_MOVIES].reverse();
    } else if (url.includes("/now_playing")) {
      results = [...MOCK_MOVIES.slice(2), ...MOCK_MOVIES.slice(0, 2)];
    } else if (url.includes("/upcoming")) {
      results = [...MOCK_MOVIES.slice(4), ...MOCK_MOVIES.slice(0, 4)];
    }
    return {
      page: 1,
      results,
      total_pages: 1,
      total_results: results.length,
    } as PaginatedMovieResult;
  }

  return {
    page: 1,
    results: MOCK_MOVIES,
    total_pages: 1,
    total_results: MOCK_MOVIES.length,
  } as PaginatedMovieResult;
}
