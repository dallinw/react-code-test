import { useEffect, Dispatch } from "react";
import _ from "lodash";

/**
 * Emit an alert when the threshold is reached while scrolling
 * @param alertThreshold - the distance in pixels from the bottom at which to alert
 * @param scrollRef - the ref of the element being scrolled
 * @param alertFunction - the function to set the flag
 */
export default function useScrollAlerter(
  alertThreshold: number,
  scrollRef: HTMLUListElement | null,
  alertFunction: Dispatch<boolean>
): void {
  useEffect(() => {
    alertFunction(true);
  }, [alertFunction]);

  useEffect(() => {
    const checkScroll = () => {
      if (
        scrollRef &&
        scrollRef.scrollHeight - scrollRef.scrollTop <
          scrollRef.clientHeight + alertThreshold
      ) {
        alertFunction(true);
      }
    };
    const handler = _.debounce(checkScroll, 20);
    if (scrollRef) {
      scrollRef.addEventListener("scroll", handler);
    }
    return function cancelSubscriptions() {
      scrollRef?.removeEventListener("scroll", handler);
    };
  }, [scrollRef, alertThreshold, alertFunction]);
}
