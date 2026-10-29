import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 5,
        bgcolor: "inherit",
        px: "60px",
      }}
    >
      <Divider
        component="div"
        sx={{
          width: "100%",
          mb: 3,
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
      />
      <Typography color="grey.600" variant="body2" component="span">
        © {new Date().getFullYear()} MovieFlex. All rights reserved.
      </Typography>
    </Box>
  );
}
