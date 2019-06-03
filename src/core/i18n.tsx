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

  async function changeLanguage(lang: Language) {
    await set('lang', lang);
    T.setTexts(languages[lang]);
    setLanguage(lang);
  }
  get('lang').then(lang => {
    changeLanguage(lang === undefined ? 'en' : (lang as Language));
  });

  async function toggleLanguage() {
    changeLanguage(language === 'en' ? 'sr' : 'en');
  }

  return { language, toggleLanguage };
}
