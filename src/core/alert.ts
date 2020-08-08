import create from "zustand";

/**
 * Alert state data
 */
interface AlertStateData {
  show: boolean;
  text: string;
  type: "normal" | "success" | "error";
}

/**
 * Alert state
 */
interface AlertState {
  data: AlertStateData;
  show: (data: Partial<AlertStateData>) => any;
  hide: () => void;
}

/**
 * Alert state hook
 */
export const [useAlert] = create<AlertState>((set, get) => ({
  /** Data for showing alert */
  data: { show: false, text: "", type: "normal" },
  /** Hide alert   */
  hide: () => set({ data: { ...get().data, show: false } }),
  /** Show alert with provided data */
  show: (data: Partial<AlertStateData>) => set({ data: { ...get().data, ...data, show: true } }),
}));
