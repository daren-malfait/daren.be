import { useEffect, useRef, useState, RefObject } from 'react';

export function useClickOutside(
  callback?: EventListener,
): RefObject<HTMLDivElement> | null {
  const ref = useRef<HTMLDivElement>(null);
  const [isTouchEvent, setTouchEvent] = useState(false);
  const eventType = isTouchEvent ? `touchend` : `click`;

  function handleEvent(e: Event) {
    if ((e.type === `click` && isTouchEvent) || !callback) {
      return;
    }

    if (ref.current && e.target !== null) {
      if (!ref.current.contains(e.target as Node)) {
        callback(e);
      }
    }
  }

  useEffect(() => {
    document.addEventListener(eventType, handleEvent, true);

    return () => {
      document.removeEventListener(eventType, handleEvent, true);
    };
  });

  useEffect(() => {
    setTouchEvent(`ontouchstart` in document.documentElement);
  }, []);

  if (!callback) {
    return null;
  }

  return ref;
}
