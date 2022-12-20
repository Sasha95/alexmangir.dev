import { useCallback, useEffect, useState } from "react";

export const useMediaQuery = (width: number) => {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = useCallback(
    () => (hasWindow ? window.innerWidth < width : null),
    [hasWindow, width]
  );

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
  }, [getWindowDimensions]);

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [handleResize, hasWindow]);

  return windowDimensions;
};
