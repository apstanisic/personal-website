import { useState, StateUpdater } from "preact/hooks";

interface UiState {
  toggleSidebar: () => void;
  setShowSidebar: StateUpdater<boolean>;
  showSidebar: boolean;
}

/** Ui state */
export function useUiState(): UiState {
  const [showSidebar, setShowSidebar] = useState(false);

  /** Toggle sidebar */
  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return { toggleSidebar, setShowSidebar, showSidebar };
}
