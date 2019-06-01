import { createContainer } from 'unstated-next';
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { useLangState } from './i18n';
import { useThemeState } from './theme';

function useUiState() {
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return { showSidebar, setShowSidebar, toggleSidebar };
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
