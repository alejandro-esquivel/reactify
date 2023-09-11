
import { useState, useEffect } from "react";

function useLocalStorage(key, fallbackState) {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) ?? fallbackState);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key])

  return [value, setValue]
}

export default useLocalStorage;