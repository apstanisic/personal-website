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
  data: { show: false, text: "", type: "normal" },
  hide: () => set({ data: { ...get().data, show: false } }),
  show: (data: Partial<AlertStateData>) => set({ data: { ...get().data, ...data, show: true } }),
}));
