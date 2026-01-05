import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext: any = createContext(null);

export function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
