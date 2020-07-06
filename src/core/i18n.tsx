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
 * Translator that contains data and methods to render text
 */
const Translator = new MDText(en);

/**
 * Helper function to translate values
 * @param key to translated data
 */
export function t(key: string): string {
  return Translator.translate(key)?.toString() ?? "";
}

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
    storage
      .get<Language>("lang")
      .then((dbLang) => {
        if (dbLang !== undefined && dbLang !== language) {
          setLanguage(dbLang);
          Translator.setTexts(languageObjects[dbLang]);
        }
      })
      .catch(console.error);
    // Fetch from db only on startup
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Toggle app language */
  async function toggleLanguage(): Promise<void> {
    const newLang = language === "en" ? "sr" : "en";
    Translator.setTexts(languageObjects[newLang]);
    await storage.set("lang", newLang);
    setLanguage(newLang);
  }

  return (
    <LangContext.Provider value={{ language, toggleLanguage }}>
      {props.children}
    </LangContext.Provider>
  );
}
