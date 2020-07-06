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
  changeAlert: (change: Partial<AlertState>) => any;
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
  const changeAlert = useCallback(
    (change: Partial<AlertState>) => setAlert({ ...alert, ...change }),
    [alert],
  );

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
  }, [alert, changeAlert]);

  return (
    <UiContext.Provider value={{ toggleSidebar, setShowSidebar, showSidebar, alert, changeAlert }}>
      {props.children}
    </UiContext.Provider>
  );
}
