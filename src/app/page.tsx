import { ThemeProvider } from "flowbite-react";
import { customTheme } from "./theme";
import { ThemeInit } from "../../.flowbite-react/init";
import {SpotApp} from "@/app/pages/SpotApp";

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ThemeInit />
      <SpotApp />
    </ThemeProvider>
  );
}