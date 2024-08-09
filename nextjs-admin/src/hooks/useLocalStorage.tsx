"use client"

import { useEffect, useState } from "react"

type SetValue<T> = T | ((val:T) => T)

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: SetValue<T>) => void] {
    const [storedValue, setStoredValue] = useState(() => {
        
        console.log("useState initvalue", initialValue);
        return initialValue
    })
    useEffect(() => {
        try{
            console.log('useEffect')
        }catch(error) {
            console.log('useEffect Error ',error)
        }
    }, [key, storedValue])
    return [storedValue, setStoredValue];
}

export default useLocalStorage;