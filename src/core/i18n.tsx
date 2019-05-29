import { useState } from 'preact/hooks';
import { set, get } from 'idb-keyval';
import { MDText } from 'i18n-react';
import en from '../assets/lang/en.json';
import sr from '../assets/lang/sr.json';

export type Language = 'sr' | 'en';
const languages = { en, sr };
export const T = new MDText(en);

export function useLangState() {
  const [language, setLanguage] = useState<Language>('en');

  get('lang').then(lang => {
    if (lang === undefined) lang = 'en';
    // T.setTexts(languages[lang as Language]);
    changeLanguage(lang as Language);
  });

  async function toggleLanguage() {
    changeLanguage(language === 'en' ? 'sr' : 'en');
  }

  async function changeLanguage(lang: Language) {
    await set('lang', lang);
    T.setTexts(languages[lang]);
    setLanguage(lang);
  }

  return { language, toggleLanguage };
}
