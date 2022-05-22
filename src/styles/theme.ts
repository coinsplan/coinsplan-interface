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
      bg: mode("white", "#020414")(props),
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
};

const components = {
  Button: {
    baseStyle: {
      border: "none",
      _focus: {
        boxShadow: "none",
      },
      borderRadius: 6,
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
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 600,
    },
  },
};

const font = {
  body: `Inter, Helvetica, sans-serif`,
  heading: `Inter, Helvetica, sans-serif`,
};

const overrides = {
  config,
  colors,
  components,
  font,
  styles,
};

const theme = extendTheme(overrides);
export default theme;
