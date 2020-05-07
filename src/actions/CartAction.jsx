export const SET_CART_INFAVOURITE = "SET_CART_INFAVOURITE";
export const DELETE_CART_INFAVOURITE = "DELETE_CART_INFAVOURITE";
export const SET_CART_BUY = "SET_CART_BUY";
export const DELETE_CART_INBUY = "DELETE_CART_INBUY";
export function setInfavourite(product) {
  return (dispatch) => {
    dispatch({
      type: SET_CART_INFAVOURITE,
      payload: product,
    });
  };
}
export function deleteInfavourite(product) {
  return (dispatch) => {
    dispatch({
      type: DELETE_CART_INFAVOURITE,
      payload: product,
    });
  };
}
export function setInbuy(product, ammount) {
  return (dispatch) => {
    dispatch({
      type: SET_CART_BUY,
      payload: [product, ammount],
    });
  };
}
