import {
  GET_GOODS_REQUEST,
  GET_GOODS_SUCCESS,
} from "../actions/BlockComponentActions";
const initialState = {
  products: [],
  isFetching: false, // изначально статус загрузки - ложь
  // так как он станет true, когда запрос начнет выполнение
};
export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GOODS_REQUEST:
      return { ...state, isFetching: true };
    case GET_GOODS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
}
