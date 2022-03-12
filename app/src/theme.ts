import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material";
import "@mui/styles";

const fontFamily = '"Inter", sans-serif';

declare module "@mui/material/styles" {
  interface Palette {
    apple: Palette["primary"];
    bleachWhite: Palette["primary"];
    bloom: Palette["primary"];
    bolgheri: Palette["primary"];
    bone: Palette["primary"];
    caramel: Palette["primary"];
    cheese: Palette["primary"];
    chileanFire: Palette["primary"];
    chrome: Palette["primary"];
    darkBone: Palette["primary"];
    darkBronze: Palette["primary"];
    darkChrome: Palette["primary"];
    darkDusk: Palette["primary"];
    darkDuskFaded: Palette["primary"];
    darkViolet: Palette["primary"];
    fadedDarkGrey: Palette["primary"];
    fadedGrey: Palette["primary"];
    fadedHeliotrope: Palette["primary"];
    greenHaze: Palette["primary"];
    heliotrope: Palette["primary"];
    infraRed: Palette["primary"];
    iron: Palette["primary"];
    ironLight: Palette["primary"];
    ivory: Palette["primary"];
    lavender: Palette["primary"];
    lightBlue: Palette["primary"];
    lightGrey: Palette["primary"];
    lightPink: Palette["primary"];
    lightRed: Palette["primary"];
    lime: Palette["primary"];
    lush: Palette["primary"];
    marine: Palette["primary"];
    minsk: Palette["primary"];
    muir: Palette["primary"];
    naviBlue: Palette["primary"];
    neutral: Palette["primary"];
    paleBlue: Palette["primary"];
    persianBlue: Palette["primary"];
    pink: Palette["primary"];
    pinkCold: Palette["primary"];
    pitch: Palette["primary"];
    ray: Palette["primary"];
    red: Palette["primary"];
    rouge: Palette["primary"];
    rougeFaded: Palette["primary"];
    royalBlue: Palette["primary"];
    sand: Palette["primary"];
    shadow: Palette["primary"];
    sphere: Palette["primary"];
    sphereCold: Palette["primary"];
    sphereFaded: Palette["primary"];
    steel: Palette["primary"];
    storm: Palette["primary"];
    sun: Palette["primary"];
    tara: Palette["primary"];
    tea: Palette["primary"];
    teal: Palette["primary"];
    violetEnabled: Palette["primary"];
    white: Palette["primary"];
    whiteDisabled: Palette["primary"];
    whiteFaded: Palette["primary"];
    woods: Palette["primary"];
    graph1: Palette["primary"];
    graph2: Palette["primary"];
    graph3: Palette["primary"];
    graph4: Palette["primary"];
    graph5: Palette["primary"];
    graph6: Palette["primary"];
    graph7: Palette["primary"];
    graph8: Palette["primary"];
    graph9: Palette["primary"];
  }
  interface PaletteOptions {
    apple: PaletteOptions["primary"];
    bleachWhite: PaletteOptions["primary"];
    bloom: PaletteOptions["primary"];
    bolgheri: PaletteOptions["primary"];
    bone: PaletteOptions["primary"];
    caramel: PaletteOptions["primary"];
    cheese: PaletteOptions["primary"];
    chileanFire: PaletteOptions["primary"];
    chrome: PaletteOptions["primary"];
    darkBone: PaletteOptions["primary"];
    darkBronze: PaletteOptions["primary"];
    darkChrome: PaletteOptions["primary"];
    darkDusk: PaletteOptions["primary"];
    darkDuskFaded: PaletteOptions["primary"];
    darkViolet: PaletteOptions["primary"];
    fadedDarkGrey: PaletteOptions["primary"];
    fadedGrey: PaletteOptions["primary"];
    fadedHeliotrope: PaletteOptions["primary"];
    greenHaze: PaletteOptions["primary"];
    heliotrope: PaletteOptions["primary"];
    infraRed: PaletteOptions["primary"];
    iron: PaletteOptions["primary"];
    ironLight: PaletteOptions["primary"];
    ivory: PaletteOptions["primary"];
    lavender: PaletteOptions["primary"];
    lightBlue: PaletteOptions["primary"];
    lightGrey: PaletteOptions["primary"];
    lightPink: PaletteOptions["primary"];
    lightRed: PaletteOptions["primary"];
    lime: PaletteOptions["primary"];
    lush: PaletteOptions["primary"];
    marine: PaletteOptions["primary"];
    minsk: PaletteOptions["primary"];
    muir: PaletteOptions["primary"];
    naviBlue: PaletteOptions["primary"];
    neutral: PaletteOptions["primary"];
    paleBlue: PaletteOptions["primary"];
    persianBlue: PaletteOptions["primary"];
    pink: PaletteOptions["primary"];
    pinkCold: PaletteOptions["primary"];
    pitch: PaletteOptions["primary"];
    ray: PaletteOptions["primary"];
    red: PaletteOptions["primary"];
    rouge: PaletteOptions["primary"];
    rougeFaded: PaletteOptions["primary"];
    royalBlue: PaletteOptions["primary"];
    sand: PaletteOptions["primary"];
    shadow: PaletteOptions["primary"];
    sphere: PaletteOptions["primary"];
    sphereCold: PaletteOptions["primary"];
    sphereFaded: PaletteOptions["primary"];
    steel: PaletteOptions["primary"];
    storm: PaletteOptions["primary"];
    sun: PaletteOptions["primary"];
    tara: PaletteOptions["primary"];
    tea: PaletteOptions["primary"];
    teal: PaletteOptions["primary"];
    violetEnabled: PaletteOptions["primary"];
    white: PaletteOptions["primary"];
    whiteDisabled: PaletteOptions["primary"];
    whiteFaded: PaletteOptions["primary"];
    woods: PaletteOptions["primary"];
    graph1: PaletteOptions["primary"];
    graph2: PaletteOptions["primary"];
    graph3: PaletteOptions["primary"];
    graph4: PaletteOptions["primary"];
    graph5: PaletteOptions["primary"];
    graph6: PaletteOptions["primary"];
    graph7: PaletteOptions["primary"];
    graph8: PaletteOptions["primary"];
    graph9: PaletteOptions["primary"];
  }
}

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
  palette: {
    // background: {
    //   default: "cornsilk",
    // },
    darkChrome: {
      main: "#686864",
    },
    neutral: {
      main: "#898988",
    },
    white: {
      main: "#ffffff",
    },
    whiteFaded: {
      main: "rgba(255, 255, 255, 0.6)",
    },
    whiteDisabled: {
      main: "rgba(255, 255, 255, 0.25)",
    },
    infraRed: {
      main: "#fb2c2c",
    },
    red: {
      main: "#c70009",
    },
    lightRed: {
      main: "#f7d9da",
    },
    bolgheri: {
      main: "#400d06",
    },
    muir: {
      main: "#682b00",
    },
    sun: {
      main: "#fdb815",
    },
    lush: {
      main: "#ffe0bf",
    },
    ray: {
      main: "#fff2a3",
    },
    apple: {
      main: "#3bcc57",
    },
    greenHaze: {
      main: "#00ab21",
    },
    tara: {
      main: "#e2f7e6",
    },
    woods: {
      main: "#063f28",
    },
    lime: {
      main: "#9bf7ac",
    },
    sphere: {
      main: "#5774ff",
    },
    sphereCold: {
      main: "#204D7F",
    },
    sphereFaded: {
      main: "rgba(87, 116, 255, 0.1)",
    },
    shadow: {
      main: "#2f1654",
    },
    darkDusk: {
      main: "#071a24",
    },
    darkDuskFaded: {
      main: "rgba(7, 26, 36, 0.5)",
    },
    rouge: {
      main: "#ef57ff",
    },
    rougeFaded: {
      main: "rgba(239, 87, 255, 0.2)",
    },
    violetEnabled: {
      main: "#A788ff",
    },
    darkViolet: {
      main: "#7a31ce",
    },
    bloom: {
      main: "#d2baff",
      dark: "#866EB3",
    },
    marine: {
      main: "#ccd5ff",
    },
    steel: {
      main: "#babab8",
    },
    darkBronze: {
      main: "#a39789",
    },
    chrome: {
      main: "#e3e9e5",
    },
    bone: {
      main: "#f0f1f5",
    },
    darkBone: {
      main: "rgba(240, 241, 245, 0.15)",
    },
    pitch: {
      main: "#00080c",
    },
    ivory: {
      main: "#E1E2E6",
    },
    iron: {
      main: "#daddde",
    },
    ironLight: {
      main: "#F6F6F6",
    },
    teal: {
      main: "#3691A9",
    },
    royalBlue: {
      main: "#2a49e0",
    },
    lightBlue: {
      main: "#4261f6",
    },
    naviBlue: {
      main: "rgba(87,116,255, 0.3)",
    },
    persianBlue: {
      main: "#1635ca",
    },
    heliotrope: {
      main: "#9C64FF",
    },
    fadedHeliotrope: {
      main: "rgba(156, 100, 255, 0.25)",
    },
    pink: {
      main: "#7B3DE9",
    },
    pinkCold: {
      main: "#180653",
    },
    lightPink: {
      main: "#9255FF",
    },
    minsk: {
      main: "#50307E",
    },
    chileanFire: {
      main: "#f97700",
    },
    bleachWhite: {
      main: "#feebd9",
    },
    caramel: {
      main: "#ffd5ad",
    },
    cheese: {
      main: "#ffba79",
    },
    lightGrey: {
      main: "#C4C4C4",
    },
    fadedGrey: {
      main: "rgba(7, 26, 36, 0.08)",
    },
    fadedDarkGrey: {
      main: "rgba(7, 26, 36, 0.25)",
    },
    tea: {
      main: "#eddbd2",
    },
    sand: {
      main: "#fff4cc",
    },
    paleBlue: {
      main: "#d6f0ff",
    },
    storm: {
      main: "#006dab",
    },
    lavender: {
      main: "#f4d4ff",
    },
    graph1: { main: "#88d5ca" },
    graph2: { main: "#3691a9" },
    graph3: { main: "#204d7f" },
    graph4: { main: "#180653" },
    graph5: { main: "#fce9a4" },
    graph6: { main: "#fc9f72" },
    graph7: { main: "#ef6160" },
    graph8: { main: "#e27965" },
    graph9: { main: "#28988b" },
  },

  typography: {
    fontFamily: ['"Inter"', "sans-serif"].join(","),
    h1: {
      fontWeight: 800,
      fontSize: "34px",
      lineHeight: "42px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          html: {
            fontFamily,
          },
          ul: {
            margin: 0,
            padding: 0,
            listStyleType: "none",
          },
        },
      },
    },
  },
});

export default theme;
