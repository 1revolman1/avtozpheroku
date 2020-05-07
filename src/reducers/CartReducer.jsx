import {
  SET_CART_INFAVOURITE,
  SET_CART_BUY,
  DELETE_CART_INFAVOURITE,
} from "../actions/CartAction";
const initialState = {
  favourite: [],
  whantToBuy: [],
};
export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART_INFAVOURITE:
      return { ...state, favourite: [...state.favourite, action.payload] };
    case DELETE_CART_INFAVOURITE:
      return {
        ...state,
        favourite: state.favourite.filter(function (item) {
          return !item.code[0].includes(action.payload.code[0]);
        }),
      };
    case SET_CART_BUY:
      return {
        ...state,
        whantToBuy: [
          ...state.whantToBuy.filter(function (item) {
            return !item["product"].code[0].includes(action.payload[0].code[0]);
          }),
          { product: action.payload[0], ammount: action.payload[1] },
        ],
      };
    // case DELETE_CART_INBUY:
    //   return {
    //     ...state,
    //     whantToBuy: state.whantToBuy.filter(function (item) {
    //       return !item.code[0].includes(action.payload.code[0]);
    //     }),
    //   };
    default:
      return state;
  }
}
