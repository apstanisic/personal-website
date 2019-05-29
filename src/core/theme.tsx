import { set, get } from 'idb-keyval';
import { useState } from 'preact/hooks';

type Theme = 'dark' | 'light';

export function useThemeState() {
  const [theme, setTheme] = useState<Theme>('light');

  get('theme').then(theme => {
    if (theme === undefined) return;
    setTheme(theme as Theme);
  });

  async function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    await set('theme', newTheme);
    setTheme(newTheme);
  }

  return { theme, setTheme, toggleTheme };
}
