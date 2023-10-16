export const getLocalStorageValue = (s: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem(s);
  }
  return undefined;
};

export const setLocalStorageValue = (s: string, v: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem(s, v);
  }
};


export const removeLocalStorageValue = (s: string) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.removeItem(s);
  }
};