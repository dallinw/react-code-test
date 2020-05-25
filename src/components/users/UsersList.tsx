import React, { useState, useRef, useEffect } from "react";
import useUsersListStyles from "./UsersList.styles";
import User from "./User";
import EndMessage from "./EndMessage";
import { useScrollAlerter } from "../../hooks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux";
import { IUser } from "../../redux/Interfaces";
import userActions from "../../redux/userActions";
import ViewConstants from "./ViewConstants";

const BOTTOM_ALERT_THRESHOLD = 100;

const UsersList: React.FunctionComponent = () => {
  /*******************************
   * State
   *******************************/
  const [shouldGetMoreUsers, setShouldGetMoreUsers] = useState(false);
  const [endMessage, setShowEndMessage] = useState(false);

  const users = useSelector((state: RootState) => state.users.users);
  const page = useSelector((state: RootState) => state.users.page);
  const isFetching = useSelector((state: RootState) => state.users.fetching);

  /*******************************
   * Hooks and Side Effects
   *******************************/
  const scrollRef = useRef<HTMLUListElement>(null);
  const classes = useUsersListStyles();
  const dispatch = useDispatch();

  useScrollAlerter(
    BOTTOM_ALERT_THRESHOLD,
    scrollRef.current,
    setShouldGetMoreUsers
  );

  /**
   * If the list height is smaller than the screen height (not scrollable), load more users
   */
  useEffect(() => {
    if (
      !isFetching &&
      scrollRef.current &&
      scrollRef.current.clientHeight <
        window.innerHeight - ViewConstants.HEADER_SIZE_NUMERIC
    ) {
      setShouldGetMoreUsers(true);
    }
  }, [scrollRef, isFetching]);

  /**
   * If shouldGetMoreUsers is flagged, and it isn't already fetching, get new users
   * If there are no more users, show the end message at the bottom of the list
   */
  useEffect(() => {
    const tryLoadUsers = () => {
      if (!isFetching && shouldGetMoreUsers) {
        dispatch(userActions.isFetching());
        (async () => {
          const newUsers = await getUsersPage(page);
          if (newUsers && newUsers.length > 0) {
            dispatch(userActions.stackUsers(newUsers, page));
          } else {
            setShowEndMessage(true);
          }
        })();
        setShouldGetMoreUsers(false);
      }
    };
    tryLoadUsers();
  }, [shouldGetMoreUsers, dispatch, page, isFetching]);

  /*******************************
   * Render
   *******************************/
  return (
    <>
      <ul className={classes.list} ref={scrollRef} data-testid="#usersList">
        {users &&
          users.map((user, index) => {
            return <User key={index} {...user} />;
          })}
        {endMessage && <EndMessage />}
      </ul>
    </>
  );
};

/*******************************
 * Helpers
 *******************************/

/**
 * Load the users for a given page in reqres
 * @param page : number
 */
async function getUsersPage(page: number): Promise<IUser[]> {
  const response = await fetch(`https://reqres.in/api/users?page=${page}`);
  const body = await response.json();
  return body.data;
}

export default UsersList;
