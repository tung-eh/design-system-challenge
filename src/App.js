import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from "@xstyled/styled-components";
import React from "react";

import Button from "./atoms/Button";

const theme = {
  ...defaultTheme,
  // Customize theme here
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <Button>Click me</Button>
    </ThemeProvider>
  );
}

export default App;
