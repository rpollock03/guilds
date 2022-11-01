import { ThemeOptions } from "@mui/material/styles"

const typography: ThemeOptions["typography"] = {
  fontFamily: "Plus Jakarta Sans, sans-serif",
  heroHeading: {
    letterSpacing: "-0.02em",
    fontWeight: 500,
    fontSize: "3rem",
    display: "block",
  },
  heroSubheading: {
    fontWeight: 400,
    display: "block",
  },
  reviewAverage: {
    color: "#3a6942",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "24px",
    marginLeft: "4px",
  },
}

export const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
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
  typography,
}

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
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
  typography,
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heroHeading: React.CSSProperties
    heroSubheading: React.CSSProperties
    reviewAverage: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    heroHeading: React.CSSProperties
    heroSubheading: React.CSSProperties
    reviewAverage: React.CSSProperties
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heroHeading: true
    heroSubheading: true
    reviewAverage: true
  }
}
