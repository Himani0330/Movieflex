import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { MAIN_PATH } from "src/constant";

export default function Logo({ sx }: BoxProps) {
  return (
    <RouterLink to={`/${MAIN_PATH.browse}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: "2px",
          cursor: "pointer",
          userSelect: "none",
          py: 0.5,
          transition: "transform 0.2s ease, opacity 0.2s ease",
          "&:hover": {
            transform: "scale(1.03)",
            opacity: 0.95,
          },
          ...sx,
        }}
      >
        <Typography
          component="span"
          sx={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: { xs: "24px", sm: "28px", md: "32px" },
            fontWeight: 900,
            letterSpacing: "2.5px",
            color: "#E50914",
            textTransform: "uppercase",
            lineHeight: 1,
            textShadow: "0 0 12px rgba(229, 9, 20, 0.4)",
            display: "inline-block",
          }}
        >
          MOVIE<span style={{ color: "#E50914" }}>FLEX</span>
        </Typography>
      </Box>
    </RouterLink>
  );
}

