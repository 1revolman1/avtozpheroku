import {
  GET_GOODS_REQUEST,
  GET_GOODS_SUCCESS,
  GET_GOODS_AMMOUNT,
} from "../actions/BlockComponentActions";
const initialState = {
  products: [],
  ammount: 0,
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
    case GET_GOODS_AMMOUNT:
      return { ...state, ammount: action.payload };
    default:
      return state;
  }
}
