import { useState } from "preact/hooks";
import * as idb from "idb-keyval";
import { MDText } from "i18n-react";
import en from "../assets/lang/en.json";
import sr from "../assets/lang/sr.json";

/** Available languages */
type Language = "sr" | "en";
// Objects that contain all language strings
const languageObjects = { en, sr };

// Renders text
export const T = new MDText(en);

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
    await idb.set("lang", lang);
    T.setTexts(languageObjects[lang]);
    setLanguage(lang);
  }

  /** Toggle app language */
  async function toggleLanguage(): Promise<void> {
    changeLanguage(language === "en" ? "sr" : "en");
  }

  // Sets language from database
  idb.get("lang").then(lang => {
    changeLanguage(lang === undefined ? "en" : (lang as Language));
  });

  return { language, toggleLanguage };
}
