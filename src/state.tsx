import { createContainer } from 'unstated-next';
import { h } from 'preact';
import { useState } from 'preact/hooks';

type Theme = 'dark' | 'light';
type Language = 'sr' | 'en';

function useUiState() {
  const [showSidebar, setShowSidebar] = useState(false);
  return { showSidebar, setShowSidebar };
}

function useThemeState() {
  const [theme, setTheme] = useState<Theme>('light');
  return { theme, setTheme };
}

function useLangState() {
  const [language, setLanguage] = useState<Language>('en');
  return { language, setLanguage };
}

export const UiState = createContainer(useUiState);
export const ThemeState = createContainer(useThemeState);
export const LangState = createContainer(useLangState);

// All Providers for state
export function Providers({ children }: any) {
  return (
    <UiState.Provider>
      <LangState.Provider>
        <ThemeState.Provider>{children}</ThemeState.Provider>
      </LangState.Provider>
    </UiState.Provider>
  );
}
