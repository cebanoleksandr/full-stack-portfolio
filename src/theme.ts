import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#05060a",
      paper: "#0b0d16",
    },
    primary: {
      main: "#6d8bff",
    },
    secondary: {
      main: "#ff4fd8",
    },
    text: {
      primary: "#f1f2f8",
      secondary: "#9298b3",
    },
    divider: "rgba(255,255,255,0.08)",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
});

export default theme;
