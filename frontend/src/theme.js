import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  fonts: {
    heading: "Noto Sans JP",
    body: "Noto Sans JP",
  },
  config: config,
});

export default theme;
