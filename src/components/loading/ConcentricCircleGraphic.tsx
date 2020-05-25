import React from "react";
import useCircleStyles from "./ConcentricCircleGraphic.styles";

const LoadingScreen: React.FunctionComponent = () => {
  const classes = useCircleStyles();

  return (
    <div className={classes.parent}>
      <div
        className={`${classes.baseCircle} ${classes.animatedLoadingCircle}`}
      />
      <div
        className={`${classes.baseCircle} ${classes.animatedLoadingCircle} ${classes.delayedLoadingCircle}`}
      />
      <div className={classes.baseCircle} />
    </div>
  );
};

export default LoadingScreen;
