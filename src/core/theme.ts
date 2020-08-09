import create from "zustand";
import { storage } from "./storage";

/**
 * Available themes
 */
type Theme = "dark" | "light";

/**
 * Initial theme stored in db (default to light)
 */
const dbTheme = storage.get("theme") ?? "light";

/**
 * Theme state
 */
interface ThemeState {
  value: Theme;
  toggle: () => void;
}

/**
 * Theme hook
 */
export const [useTheme] = create<ThemeState>((set, get) => ({
  /** Current theme */
  value: dbTheme,
  /** Toggle between light and dark theme */
  toggle: () => {
    const newTheme = get().value === "dark" ? "light" : "dark";
    storage.set("theme", newTheme);
    set({ value: newTheme });
  },
}));
