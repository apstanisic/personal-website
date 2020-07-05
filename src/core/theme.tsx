import { h } from "preact";
import { storage } from "./storage";
import { useState } from "preact/hooks";
import { createContext } from "preact";
import { useEffect } from "react";

/** Available themes */
type Theme = "dark" | "light";

interface ThemeState {
  theme: Theme;
  toggleTheme: () => Promise<void>;
}

export const ThemeContext = createContext<ThemeState>(undefined as any);

/** Theme state */
export function Theme(props: { children: any }) {
  const savedTheme = localStorage.getItem("theme") as Theme | null;
  const [theme, setTheme] = useState<Theme>(savedTheme ?? "light");

  /** Toggle theme */
  async function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>
  );
}
