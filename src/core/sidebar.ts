import create from "zustand";

/**
 * Sidebar state
 */
interface SidebarState {
  value: boolean;
  set: (show: boolean) => void;
  toggle: () => void;
}

/**
 * Sidebar state hook
 */
export const [useSidebar] = create<SidebarState>((set, get) => ({
  /** Should sidebar be visible */
  value: false,
  /** Change sidebar visibility */
  set: (show: boolean) => set({ value: show }),
  /** Toggle sidebar visibility */
  toggle: () => set({ value: !get().value }),
}));
