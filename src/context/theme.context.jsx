import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../utils/theme.utils";

export function ThemeProviderFunc({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
