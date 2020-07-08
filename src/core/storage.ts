// Testing because of ssr
/**
 * This checks if it's Node env and do nothing
 */
export const storage = {
  get<T = any>(key: string) {
    if (typeof window === "undefined") {
      return null;
    }
    return localStorage.getItem(key) as T | null;
  },
  set(key: string, value: any) {
    if (typeof window === "undefined") {
      return null;
    }
    return localStorage.setItem(key, value);
  },
};
