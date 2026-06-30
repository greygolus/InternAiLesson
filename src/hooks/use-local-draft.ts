"use client";

import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from "react";

function readStoredValue<T>(key: string, fallback: T) {
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function useLocalDraft<T>(key: string, initialValue: T) {
  const eventName = `local-draft:${key}`;

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const listener = () => onStoreChange();
      window.addEventListener("storage", listener);
      window.addEventListener(eventName, listener);
      return () => {
        window.removeEventListener("storage", listener);
        window.removeEventListener(eventName, listener);
      };
    },
    [eventName],
  );

  const getSnapshot = useCallback(() => window.localStorage.getItem(key), [key]);
  const getServerSnapshot = useCallback(() => null, []);
  const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const value = useMemo(() => {
    if (!snapshot) return initialValue;
    try {
      return JSON.parse(snapshot) as T;
    } catch {
      return initialValue;
    }
  }, [initialValue, snapshot]);

  const setValue: Dispatch<SetStateAction<T>> = useCallback(
    (nextValue) => {
      const current = readStoredValue(key, initialValue);
      const resolved =
        typeof nextValue === "function"
          ? (nextValue as (previous: T) => T)(current)
          : nextValue;
      window.localStorage.setItem(key, JSON.stringify(resolved));
      window.dispatchEvent(new Event(eventName));
    },
    [eventName, initialValue, key],
  );

  const reset = useCallback(() => {
    window.localStorage.removeItem(key);
    window.dispatchEvent(new Event(eventName));
  }, [eventName, key]);

  return { value, setValue, ready: true, reset };
}
