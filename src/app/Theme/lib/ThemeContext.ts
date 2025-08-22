import { createContext } from "react";

export enum Theme {
  LIGHT = "app_dark_theme",
  DARK = "app_light_theme",
}

export interface ThemeContextProp {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProp>({});
export const LOKAL_STARAGE_THEME_KEY = "theme";
