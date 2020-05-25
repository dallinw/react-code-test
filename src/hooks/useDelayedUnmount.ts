import { useState, useEffect } from "react";

/**
 * Wait until after animation has completed, then unmount the component.
 * Inspired by: https://medium.com/@tomaszferens/delay-unmounting-of-the-component-in-react-8d6f6e73cdc
 * @param isMounted - boolean, used to toggle animation
 * @param delayTime - time to wait before returning shouldRender = false to remove element from DOM
 */
export default function useDelayedUnmount(
  isMounted: boolean,
  delayTime: number
): boolean {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    if (isMounted && !shouldRender) {
      setShouldRender(true);
    } else if (!isMounted && shouldRender) {
      timeoutId = window.setTimeout(() => setShouldRender(false), delayTime);
    }
    return () => window.clearTimeout(timeoutId);
  }, [isMounted, delayTime, shouldRender]);
  return shouldRender;
}
