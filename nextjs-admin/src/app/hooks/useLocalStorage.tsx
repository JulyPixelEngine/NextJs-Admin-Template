"use client"

import { useEffect, useState } from "react"

type SetValue<T> = T | ((val:T) => T)

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: SetValue<T>) => void] {
    const [storedValue, setStoredValue] = useState(() => {
        return initialValue
    })
  return [storedValue, setStoredValue];
}

export default useLocalStorage;