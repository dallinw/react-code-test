import React from "react";
import useHeaderBarStyles from "./HeaderBar.styles";

const HeaderBar: React.FunctionComponent = () => {
  const classes = useHeaderBarStyles();
  return <div className={classes.header}>Users</div>;
};

export default HeaderBar;
