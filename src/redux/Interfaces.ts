/**
 * Interface for User objects
 */

interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

/**
 * State interface for User Reducer
 */
interface IUserState {
  type?: string;
  users: IUser[];
  page: number;
  fetching: boolean;
  componentVisible: boolean;
}

/**
 * State interface for combined reducers
 */
interface IState {
  user: IUserState;
}

/**
 * Action interface for generic action
 */
type IAction = {
  type: "STACK_USERS" | "IS_FETCHING" | "SET_COMPONENT_VISIBLE";
  users?: IUser[];
  page?: number;
};

export type { IUser, IUserState, IState, IAction };
