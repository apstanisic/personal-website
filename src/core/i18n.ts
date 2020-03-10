import { useState } from "preact/hooks";
import { storage } from "./storage";
import { MDText } from "i18n-react";
import en from "../assets/lang/en.json";
import sr from "../assets/lang/sr.json";

/** Available languages */
type Language = "sr" | "en";
// Objects that contain all language strings
const languageObjects = { en, sr };

// Renders text
/**
 * Renders text
 * @Todo There is currently some Preact/Typescript error. Remove as any from T,
 * and add declaration.d.ts file from preact template
 */
export const T = new MDText(en) as any;

interface UseLangStateReturn {
  // Current Language
  language: Language;
  // Toggle between Serbian and English
  toggleLanguage: () => Promise<void>;
}

/** Use language state */
export function useLangState(): UseLangStateReturn {
  const [language, setLanguage] = useState<Language>("en");

  /** Change app language */
  async function changeLanguage(lang: Language): Promise<void> {
    await storage.set("lang", lang);
    T.setTexts(languageObjects[lang]);
    setLanguage(lang);
  }

  /** Toggle app language */
  async function toggleLanguage(): Promise<void> {
    changeLanguage(language === "en" ? "sr" : "en");
  }

  // Sets language from database
  storage.get("lang").then(lang => {
    changeLanguage(lang === undefined ? "en" : (lang as Language));
  });

  return { language, toggleLanguage };
}
