import { createContext, h } from "preact";
import { useState, StateUpdater, useEffect, useCallback } from "preact/hooks";

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
  showAlert: (change: Partial<AlertState>) => any;
}

let timeout: any = null;

export const UiContext = createContext<UiState>(undefined as any);

export function Ui(props: { children: any }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    text: "",
    type: "normal",
  });

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const showAlert = useCallback(
    (change: Partial<AlertState>) => setAlert({ ...alert, ...change }),
    [alert],
  );

  /**
   * Simple alert clearing after X seconds,
   */
  useEffect(() => {
    if (alert.show) {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        showAlert({ show: false });
        timeout = null;
      }, 8000);
    }
  }, [alert, showAlert]);

  return (
    <UiContext.Provider value={{ toggleSidebar, setShowSidebar, showSidebar, alert, showAlert }}>
      {props.children}
    </UiContext.Provider>
  );
}
