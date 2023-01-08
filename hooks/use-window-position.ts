import { useEffect, useState } from "react";

export default function useWindowPosition() {
  const [scrollPosition, setPosition] = useState(0);
  useEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    addEventListener("scroll", updatePosition);
    updatePosition();
    return () => removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
}
