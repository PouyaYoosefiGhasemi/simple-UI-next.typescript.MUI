import { Typography, Paper } from "@mui/material";
const Header = (props: any) => {
  return (
    <Paper
      elevation={1}
      sx={{
        bgcolor: "#f5f5f5",
        p: 1,
        display: "flex",
        border: "1px",
        justifyContent: props.children ? "space-between" : "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        minHeight: "64px",
      }}
    >
      <Typography>{props.title}</Typography>
      {props.children}
    </Paper>
  );
};

export default Header;
