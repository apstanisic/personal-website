import * as idb from "idb-keyval";
import { useState } from "preact/hooks";

/** Available themes */
type Theme = "dark" | "light";

interface ThemeState {
  /** Current theme */
  theme: Theme;
  /** Toggle theme */
  toggleTheme: () => Promise<void>;
}

/** Theme state */
export function useThemeState(): ThemeState {
  const [theme, setTheme] = useState<Theme>("light");

  /** Toggle theme */
  async function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    await idb.set("theme", newTheme);
    setTheme(newTheme);
  }

  // Set theme from database or use light theme
  idb.get<Theme>("theme").then(idbTheme => {
    setTheme(idbTheme === undefined ? "light" : idbTheme);
  });

  return { theme, toggleTheme };
}
