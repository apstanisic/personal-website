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
  value: false,
  set: (show: boolean) => set({ value: show }),
  toggle: () => set({ value: !get().value }),
}));
