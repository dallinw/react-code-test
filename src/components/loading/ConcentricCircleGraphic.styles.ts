import { makeStyles } from "@material-ui/styles";
import Theme from "../../themes/Theme";
import AnimationConstants from "./AnimationConstants";

const MAX_CIRCLE_SIZE = "120px"; // i changed this value from the wireframe to better match the .mp4
const MIN_CIRCLE_SIZE = "64px";
const BASE_CIRCLE_SIZE = "16px";

/**
 * Shared style traits among all three circles
 */
const circle = {
  borderRadius: "50%",
  margin: "0 auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export const useCircleStyles = makeStyles(() => ({
  "@keyframes grow": {
    "0%": {
      width: MIN_CIRCLE_SIZE,
      height: MIN_CIRCLE_SIZE,
      opacity: "0.0",
    },
    "20%": {
      opacity: "1.0",
    },
    "100%": {
      width: MAX_CIRCLE_SIZE,
      height: MAX_CIRCLE_SIZE,
      opacity: "0.0",
    },
  },
  parent: {
    position: "relative",
    margin: "auto",
    width: MAX_CIRCLE_SIZE,
    height: MAX_CIRCLE_SIZE,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  baseCircle: {
    ...circle,
    position: "absolute",
    backgroundColor: Theme.colors.green,
    width: BASE_CIRCLE_SIZE,
    height: BASE_CIRCLE_SIZE,
  },
  animatedLoadingCircle: {
    ...circle,
    position: "absolute",
    backgroundColor: Theme.colors.green20,
    width: MIN_CIRCLE_SIZE,
    height: MIN_CIRCLE_SIZE,
    animation: `$grow ${AnimationConstants.period}ms infinite`,
    animationTimingFunction: "cubic-bezier(.46, .73, 1, .6)",
    opacity: "1.0",
  },
  delayedLoadingCircle: {
    opacity: "0.0",
    animationDelay: `${AnimationConstants.offset}ms`,
  },
}));

export default useCircleStyles;
