import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext: any = createContext(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  const value = { theme, toggleTheme };

  return (
  <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
);

}

export function useTheme() {
  return useContext(ThemeContext) as any;
}
