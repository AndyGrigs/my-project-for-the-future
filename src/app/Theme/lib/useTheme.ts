import { useContext } from "react";
import { ThemeContext, Theme, ThemeContextProp } from "./ThemeContext";

export const useTheme = (): [Theme, () => void] => {
  const { theme, setTheme } = useContext<ThemeContextProp>(ThemeContext);
  const toggleTheme = () => {
    setTheme && setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return [theme, toggleTheme];
};
