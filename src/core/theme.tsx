import { h } from "preact";
import { storage } from "./storage";
import { useState } from "preact/hooks";
import { createContext } from "preact";

/** Available themes */
type Theme = "dark" | "light";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => Promise<void>;
}

export const ThemeContext = createContext<ThemeState>(undefined as any);

/** Theme state */
export function Theme(props: { children: any }) {
  const [theme, setTheme] = useState<Theme>("light");

  /** Toggle theme */
  async function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    await storage.set("theme", newTheme);
    setTheme(newTheme);
  }

  // Set theme from database or use light theme
  storage.get<Theme>("theme").then(idbTheme => {
    setTheme(idbTheme === undefined ? "light" : idbTheme);
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>
  );
}
