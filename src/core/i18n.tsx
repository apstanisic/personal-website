import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { storage } from "./storage";
import { MDText } from "i18n-react";
import en from "../assets/lang/en.json";
import sr from "../assets/lang/sr.json";
import { createContext } from "preact";

/** Available languages */
type Language = "sr" | "en";
// Objects that contain all language strings
const languageObjects = { en, sr };

/**
 * Renders text
 */
export const T = new MDText(en);

interface LangState {
  // Current Language
  language: Language;
  // Toggle between Serbian and English
  toggleLanguage: () => Promise<void>;
}

export const LangContext = createContext<LangState>(undefined as any);

/** Use language state */
export function Lang(props: { children: any }) {
  const [language, setLanguage] = useState<Language>("en");
  // Sets language from database if it's different from default
  useEffect(() => {
    storage.get<Language>("lang").then((lang) => {
      if (lang !== undefined && lang !== language) {
        setLanguage(lang);
        T.setTexts(languageObjects[language]);
      }
    });
  }, []);

  /** Toggle app language */
  async function toggleLanguage(): Promise<void> {
    const newLang = language === "en" ? "sr" : "en";
    T.setTexts(languageObjects[newLang]);
    await storage.set("lang", newLang);
    setLanguage(newLang);
  }

  return (
    <LangContext.Provider value={{ language, toggleLanguage }}>
      {props.children}
    </LangContext.Provider>
  );
}
