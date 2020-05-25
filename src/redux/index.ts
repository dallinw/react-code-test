import userReducer from "./userReducer";
import { createStore, combineReducers } from "redux";
/*
 * There's only going to be one reducer, but no harm in future-proofing
 */
const reducer = combineReducers({
  users: userReducer,
});

const store = createStore(reducer);

export default store;
export type RootState = ReturnType<typeof reducer>;
