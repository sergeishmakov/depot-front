import { combineReducers } from "redux";
import users from "./users";
import cart from "./cart";

const rootReducer = combineReducers({ users, cart });

export default rootReducer;
