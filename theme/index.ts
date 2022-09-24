import { createTheme } from "@mui/material/styles"

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#41764A",
      light: "#D8E9DA",
    },
    secondary: {
      main: "#101828",
      light: "#1D2939",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F9FAFB",
    },
    text: {
      primary: "#101828",
      secondary: "#667085",
    },
  },
})

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#41764A",
      light: "#D8E9DA",
    },
    secondary: {
      main: "#FFFFFF",
      light: "#EAECF0",
    },
    background: {
      default: "#101828",
      paper: "#1D2939",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#EAECF0",
    },
  },
})
