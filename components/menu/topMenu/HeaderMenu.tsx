import { Button, Typography, Box } from "@mui/material";

const HeaderMenu = () => {
  return (
    <Box
      sx={{
        p: "1",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography sx={{ minWidth: 100, textDecoration: "underline" }}>
        FEATURES
      </Typography>
      <Typography sx={{ minWidth: 100, textDecoration: "underline" }}>
        ENTERPRISE
      </Typography>
      <Typography sx={{ minWidth: 100, textDecoration: "underline" }}>
        SUPPORT
      </Typography>
      <Button variant="outlined">LOGIN</Button>
    </Box>
  );
};

export default HeaderMenu;
