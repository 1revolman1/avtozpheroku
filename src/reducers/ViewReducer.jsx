import { VIEW_AS_LINE, VIEW_AS_BLOCK } from "../actions/ViewCardAction";
const initialState = {
  view: "block", // изначально статус загрузки - ложь
  // так как он станет true, когда запрос начнет выполнение
};
export function viewReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_AS_LINE:
      return { ...state, view: "line" };
    case VIEW_AS_BLOCK:
      return {
        ...state,
        view: "block",
      };
    default:
      return state;
  }
}
