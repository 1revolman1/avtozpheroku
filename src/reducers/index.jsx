import { combineReducers } from "redux";
import { blockComponentReducer } from "./BlockComponent";
export const rootReducer = combineReducers({
  goods: blockComponentReducer,
});
