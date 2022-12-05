import { useEffect, useState } from "react";
import Debounce from "lodash/debounce";

export default function useMobile(maxWidth = 1024) {
  const [mobileState, setMobileState] = useState(false);

  const windowResized = Debounce(() => {
    setMobileState(window.innerWidth < maxWidth);
  }, 250);

  useEffect(() => {
    window.addEventListener("resize", windowResized);
    windowResized();

    return () => {
      window.removeEventListener("resize", windowResized);
    };
  }, [windowResized]);

  return mobileState
}
