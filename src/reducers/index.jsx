import { combineReducers } from "redux";
import { pageReducer } from "./BlockComponent";
import { viewReducer } from "./ViewReducer";
import { menueReducer } from "./MenuReducer";
import { cartReducer } from "./CartReducer";
export const rootReducer = combineReducers({
  goods: pageReducer,
  view: viewReducer,
  menu: menueReducer,
  cart: cartReducer,
});
