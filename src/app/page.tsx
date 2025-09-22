import { ThemeProvider } from "flowbite-react";
import { SpotApp } from "@/app/pages/SpotApp";
import { ThemeInit } from "../../.flowbite-react/init";
import { customTheme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ThemeInit />
      <SpotApp />
    </ThemeProvider>
  );
}
