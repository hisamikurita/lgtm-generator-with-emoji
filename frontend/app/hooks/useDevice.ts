import { useState, useLayoutEffect } from "react";

export const useDevice = () => {
  const [isTouch, setIsTouch] = useState(false);

  useLayoutEffect(() => {
    const handler = () => setIsTouch(true);

    window.addEventListener("touchstart", handler);

    return () => window.removeEventListener("touchstart", handler);
  });

  return { isTouch };
};