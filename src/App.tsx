import React, { useState, useEffect } from "react";
import useAppStyles from "./App.styles";
import LoadingScreen from "./components/loading";
import { UsersList, HeaderBar } from "./components/users";
import { useSelector } from "react-redux";
import { RootState } from "./redux";

const App: React.FunctionComponent = () => {
  /*******************************
   * State
   *******************************/
  const [show, setShow] = useState(false);
  const showComponent = useSelector(
    (state: RootState) => state.users.componentVisible
  );
  /*******************************
   * Hooks and Side Effects
   *******************************/
  const classes = useAppStyles();

  /**
   * Flip the show property on load for a fade-in effect
   */
  useEffect(() => {
    setShow(true);
  }, []);

  /*******************************
   * Render
   *******************************/
  return (
    <div className={`${classes.body} ${show ? classes.show : classes.hide}`}>
      <LoadingScreen />
      <div
        className={`${classes.body} ${
          showComponent ? classes.show : classes.hide
        }`}
      >
        <HeaderBar />
        <UsersList />
      </div>
    </div>
  );
};

export default App;
