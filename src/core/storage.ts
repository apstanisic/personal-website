/**
 * This checks if it's Node env and do nothing
 * Storage only works in browser, and it won't work
 * when building SSR
 */
export const storage = {
  /** Get value from storage */
  get<T = any>(key: string): T | null {
    if (typeof window === "undefined") return null;

    return localStorage.getItem(key) as T | null;
  },
  /** Set value in storage */
  set(key: string, value: any): void {
    if (typeof window === "undefined") return;

    return localStorage.setItem(key, value);
  },
};
