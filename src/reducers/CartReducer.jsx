import {
  SET_CART_INFAVOURITE,
  SET_CART_BUY,
  DELETE_CART_INFAVOURITE,
  DELETE_CART_INBUY,
  CHANGE_INCART_AMMOUNT,
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
          return !item.code[1].includes(action.payload.code[1]);
        }),
        // state.favourite.filter(function (item) {
        //   return !item.code[1].includes(action.payload.code[1]);
        // }),
      };
    case SET_CART_BUY:
      return {
        ...state,
        whantToBuy: [
          ...state.whantToBuy.filter(function (item) {
            return !item["product"].code[1].includes(action.payload[0].code[1]);
          }),
          { product: action.payload[0], ammount: action.payload[1] },
        ],
      };
    case CHANGE_INCART_AMMOUNT:
      return {
        ...state,
        whantToBuy: state.whantToBuy.map(function (item, index, array) {
          if (item["product"].code[1].includes(action.payload[0].code[1])) {
            return {
              product: action.payload[0],
              ammount: action.payload[1],
            };
          } else {
            return item;
          }
        }),
      };
    case DELETE_CART_INBUY:
      return {
        ...state,
        whantToBuy: state.whantToBuy.filter(function (item) {
          return !item["product"].code[1].includes(action.payload.code[1]);
        }),
      };
    default:
      return state;
  }
}
