import { useLayoutEffect, useState } from "react";

export default function useWindowPosition() {
  const [scrollPosition, setPosition] = useState(0);
  useLayoutEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    addEventListener("scroll", updatePosition);
    updatePosition();
    return () => removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
}
