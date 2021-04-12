import { useCallback, useState } from "react";

export const useCenteredTree = () => {
  const [translate, setTranslate] = useState({ x: -100, y: -100 });
  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 2 });
    }
  }, []);
  return [translate, containerRef];
};
