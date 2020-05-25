import React, { useState, useEffect, Dispatch } from "react";
import { useDelayedUnmount } from "../../hooks";
import useLoadingScreenStyles from "./LoadingScreen.styles";
import ConcentricCircleGraphic from "./ConcentricCircleGraphic";
import AnimationConstants from "./AnimationConstants";
import { useDispatch } from "react-redux";
import userActions from "../../redux/userActions";

const LoadingScreen: React.FunctionComponent = () => {
  const [isMounted, setIsMounted] = useState(true);

  /*******************************
   * Hooks and Side Effects
   *******************************/
  const classes = useLoadingScreenStyles();
  const shouldRenderChild = useDelayedUnmount(
    isMounted,
    AnimationConstants.fadeOutMS
  );
  useHideLoadingScreen(setIsMounted);
  const dispatch = useDispatch();

  /**
   * Toggle the users list to visible after the load component begins to transition out
   */
  useEffect(() => {
    if (!isMounted) {
      dispatch(userActions.setComponentVisible());
    }
  }, [isMounted, dispatch]);

  /*******************************
   * Render
   *******************************/
  return (
    <>
      {shouldRenderChild && (
        <div
          data-testid="#loading"
          className={`${classes.loadingScreenBackdrop} ${
            isMounted ? classes.show : classes.hide
          }`}
        >
          <ConcentricCircleGraphic />
        </div>
      )}
    </>
  );
};

/*******************************
 * Helpers
 *******************************/
/**
 * Hide loading screen after 3 seconds
 */
const useHideLoadingScreen = (setIsMounted: Dispatch<boolean>) => {
  useEffect(() => {
    setTimeout(() => setIsMounted(false), AnimationConstants.loadingMS);
  }, [setIsMounted]);
};

export default LoadingScreen;
