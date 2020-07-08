import { createContext, h } from "preact";
import { useState } from "preact/hooks";
import { storage } from "./storage";

/** Available themes */
type Theme = "dark" | "light";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeState>(undefined as any);

/** Theme state */
export function Theme(props: { children: any }) {
  const dbTheme = storage.get("theme");
  const [theme, setTheme] = useState<Theme>(dbTheme ?? "light");

  /** Toggle theme */
  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    storage.set("theme", newTheme);
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>
  );
}
