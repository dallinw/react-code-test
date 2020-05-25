import React from "react";
import useEndMessageStyles from "./EndMessage.styles";

const EndMessage: React.FunctionComponent = () => {
  const classes = useEndMessageStyles();
  return (
    <span className={classes.parent}>
      <span className={classes.text}>No more users to show!</span>
    </span>
  );
};

export default EndMessage;
