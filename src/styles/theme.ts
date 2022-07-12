import { extendTheme } from "@chakra-ui/react";
import {
  brand,
  brand100,
  brand200,
  brand300,
  brand400,
  brand50,
  brand500,
  brand600,
  brand700,
  brand800,
  brandDarker,
} from "./color";
import { mode } from "@chakra-ui/theme-tools";
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("white", "#0a0b0d")(props),
    },
  }),
};

const colors = {
  brand: {
    100: brand,
    200: brandDarker,
  },
  main: {
    50: brand50,
    100: brand100,
    200: brand200,
    300: brand300,
    400: brand400,
    500: brand500,
    600: brand600,
    700: brand700,
    800: brand800,
  },
  mainNonDynamic: {
    50: brand50,
    100: brand100,
    200: brand200,
    300: brand400,
    400: brand400,
    500: brand400,
    600: brand600,
    700: brand700,
    800: brand800,
  },
  darkBackground: "#0a0b0d",
};

const components = {
  Button: {
    baseStyle: {
      border: "none",
      _focus: {
        boxShadow: "none",
      },
      borderRadius: 10,
    },
    sizes: {
      sm: {
        fontSize: "14px",
        fontWeight: 500,
      },
      md: {
        fontSize: "14px",
        fontWeight: 500,
      },
      lg: {
        fontSize: "1rem",
        fontWeight: 500,
      },
      xl: {
        fontSize: "1rem",
        fontWeight: 600,
        height: "62px",
      },
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 600,
    },
  },
  Link: {
    baseStyle: {
      color: "main.500"
    }
  },
  Input: {
    baseStyle: {
      field: {},
    },
    variants: {
      scheduler: {
        field: {
          backgroundColor: "#0000000a",
          fontWeight: 500,
          _placeholder: {
            color: "#00000030",
          },
        },
      },
    },
  },
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
};

const font = {
  body: `Poppins, Helvetica, sans-serif`,
  heading: `Poppins, Helvetica, sans-serif`,
};

const overrides = {
  config,
  colors,
  components,
  font,
  styles,
  breakpoints,
};

const theme = extendTheme(overrides);
export default theme;
