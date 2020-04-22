import { combineReducers } from "redux";
import { pageReducer } from "./BlockComponent";
import { viewReducer } from "./ViewReducer";
export const rootReducer = combineReducers({
  goods: pageReducer,
  view: viewReducer,
});
