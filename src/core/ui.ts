import { useState, StateUpdater, useEffect } from "preact/hooks";

interface AlertState {
  show: boolean;
  text: string;
  type: "normal" | "success" | "error";
}

interface UiState {
  toggleSidebar: () => void;
  setShowSidebar: StateUpdater<boolean>;
  showSidebar: boolean;
  alert: AlertState;
  changeAlert: (change: Partial<AlertState>) => any;
}

let timeout: any = null;

/** Ui state */
export function useUiState(): UiState {
  const [showSidebar, setShowSidebar] = useState(false);
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    text: "Test statefdsaf dsaf dsaf dsa fds ds",
    type: "normal",
  });
  /** Change alert */
  function changeAlert(change: Partial<AlertState>) {
    setAlert({ ...alert, ...change });
  }

  useEffect(() => {
    if (alert.show) {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        changeAlert({ show: false });
        timeout = null;
      }, 8000);
    }
  }, [alert]);

  /** Toggle sidebar */
  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return { toggleSidebar, setShowSidebar, showSidebar, alert, changeAlert };
}
