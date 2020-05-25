import { IUser } from "./Interfaces";

const userActions = {
  stackUsers: (users: IUser[], page: number) => {
    return {
      type: "STACK_USERS",
      users: users,
      page: page,
    };
  },
  isFetching: () => {
    return {
      type: "IS_FETCHING",
    };
  },
  setComponentVisible: () => {
    return {
      type: "SET_COMPONENT_VISIBLE",
    };
  },
};

export default userActions;
