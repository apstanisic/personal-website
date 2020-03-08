import { get, set } from "idb-keyval";

// Testing because of ssr
/**
 * Wrapper class for idb-keyval.
 * When doing SSR idb is not available.
 * This checks if it's Node env and do nothing
 */
export const storage = {
  async get<T = any>(key: string) {
    if (typeof window !== "undefined") {
      return get<T>(key);
    }
  },
  set(key: string, value: any) {
    if (typeof window !== "undefined") {
      return set(key, value);
    }
  },
};
