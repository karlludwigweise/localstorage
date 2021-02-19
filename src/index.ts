export function set(key: string, value: string) {
  return localStorage.setItem(key, value);
}

export function setObject(key: string, object: any) {
  return localStorage.setItem(key, JSON.stringify(object));
}

export function get(key: string) {
  const value = localStorage.getItem(key);
  return value === "undefined" ? undefined : value;
}

export function getObject(key: string) {
  const value = localStorage.getItem(key);
  try {
    return value ? JSON.parse(value) : undefined;
  } catch (error) {
    return {};
  }
}

export function remove(key: string) {
  return localStorage.removeItem(key);
}

export function clear() {
  return localStorage.clear();
}

export function useLocalStorage() {
  return {
    set,
    setObject,
    get,
    getObject,
    remove,
    clear,
  };
}

const storage = {
  set,
  setObject,
  get,
  getObject,
  remove,
  clear,
};

export const DEFAULT_STORAGE_NAMES = {
  TOKEN: "token",
  SETTINGS: "settings",
};

export default storage;
