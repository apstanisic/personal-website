import { createContext, h } from "preact";
import { useContext, useState } from "preact/hooks";
// import { MDText } from "i18n-react";
import en from "../assets/lang/en.json";
import sr from "../assets/lang/sr.json";
import { storage } from "./storage";

/** Available languages */
type Language = "sr" | "en";
// Objects that contain all language strings
const languageObjects = { en, sr };

interface LangState {
  // Current Language
  language: Language;
  // Translator for given key
  t: (key: string) => string;
  // Toggle language between Serbian and English
  toggleLanguage: () => void;
}

export const LangContext = createContext<LangState>(undefined as any);

/** Use language state */
export function Lang(props: { children: any }) {
  const dbLang = storage.get("lang");
  const [language, setLanguage] = useState<Language>(dbLang ?? "en");
  const [langData, setLangData] = useState<Record<string, any>>(languageObjects[language]);

  /** Toggle app language */
  function toggleLanguage(): void {
    const newLang = language === "en" ? "sr" : "en";
    setLanguage(newLang);
    setLangData(newLang === "en" ? en : sr);
    storage.set("lang", newLang);
  }

  /**
   * Simple helper function for geting value from nested object
   * Source:
   * https://stackoverflow.com/questions/6393943/convert-javascript-string-in-dot-notation-into-an-object-reference
   * @param key to requested value
   */
  function t(key: string): string {
    return (key.split(".").reduce((o, i) => o?.[i], langData) as unknown) as string;
  }

  return (
    <LangContext.Provider value={{ language, toggleLanguage, t }}>
      {props.children}
    </LangContext.Provider>
  );
}

/**
 * Helper hook for easier transaltion use
 */
export function useT() {
  const { t } = useContext(LangContext);
  return t;
}
