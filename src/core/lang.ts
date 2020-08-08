import create from "zustand";
import en from "../assets/lang/en.json";
import sr from "../assets/lang/sr.json";
import { storage } from "./storage";

/** Available languages */
type Language = "sr" | "en";

// Objects that contain all language strings
const languageObjects = { en, sr };

/**
 * Db language
 */
const dbLang: Language = storage.get("lang") ?? "en";

interface LangState {
  value: Language;
  toggle: () => void;
}

/**
 * Hook for using lang state
 */
export const [useLang] = create<LangState>((set, get) => ({
  /** Selected language */
  value: dbLang,
  /** Toggle between Serbian and English */
  toggle: () => {
    const newLang = get().value === "en" ? "sr" : "en";
    storage.set("lang", newLang);
    set({ value: newLang });
  },
}));

/**
 * Hook for getting translation
 */
export function useT() {
  const lang = useLang();
  const langData = languageObjects[lang.value];

  /**
   * Simple helper function for geting value from nested object
   * Source:
   * https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference
   * @param key to requested value
   */
  return (key: string) =>
    (key.split(".").reduce((o: Record<string, any>, i) => o?.[i], langData) as unknown) as string;
}
