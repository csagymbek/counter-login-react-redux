import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { loginReducer } from "./loginReducer";

export const reducers = combineReducers({ loginReducer, counterReducer });
