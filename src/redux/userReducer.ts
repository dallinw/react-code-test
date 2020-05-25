import { IUserState, IAction } from "./Interfaces";

const initialReducerState: IUserState = {
  users: [],
  // page 0 and page 1 contain duplicate users; i've chosen to start at page 0 anyway
  page: 0,
  fetching: false,
  componentVisible: false,
};

const userReducer = (
  state = initialReducerState,
  action: IAction
): IUserState => {
  switch (action.type) {
    case "STACK_USERS":
      return action.users
        ? {
            ...state,
            users: state.users.concat(action.users),
            page: state.page + 1,
            fetching: false,
          }
        : state;
    case "IS_FETCHING":
      return {
        ...state,
        fetching: true,
      };
    case "SET_COMPONENT_VISIBLE":
      return {
        ...state,
        componentVisible: true,
      };
    default:
      return state;
  }
};

export default userReducer;
