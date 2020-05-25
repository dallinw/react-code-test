import { makeStyles } from "@material-ui/styles";
import AnimationConstants from "./AnimationConstants";
import Theme from "../../themes";

export const useLoadingScreenStyles = makeStyles(() => ({
  loadingScreenBackdrop: {
    width: "100%",
    height: "100%",
    display: "flex",
    backgroundColor: Theme.colors.loadingBackground,
    zIndex: 999,
  },
  hide: {
    opacity: 0.0,
    transition: `opacity ${AnimationConstants.fadeOutMS}ms`,
  },
  show: {
    opacity: 1.0,
    transition: `opacity ${AnimationConstants.fadeOutMS}ms`,
  },
}));

export default useLoadingScreenStyles;
