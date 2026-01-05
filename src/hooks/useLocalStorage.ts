import { useState, useEffect } from "react";

export default function useLocalStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);

    if (saved === null) {
      return defaultValue;
    }

    try {
      return JSON.parse(saved);
    } catch {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

