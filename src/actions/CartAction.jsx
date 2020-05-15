// This block describes the actions that are called for processing goods in the favorites and from the basket(initialization, adding to favorites, removing from favorites, adding to basket, deleting, changing)

export const SET_CART_INFAVOURITE = "SET_CART_INFAVOURITE";
export const SET_CART_INFAVOURITE_INIT = "SET_CART_INFAVOURITE_INIT";
export const DELETE_CART_INFAVOURITE = "DELETE_CART_INFAVOURITE";
export const CHANGE_INCART_AMMOUNT = "CHANGE_INCART_AMMOUNT";
export const SET_CART_BUY = "SET_CART_BUY";
export const DELETE_CART_INBUY = "DELETE_CART_INBUY";
//First initialization of adding to favorites
export function setInfavouriteInit(product) {
  return (dispatch) => {
    dispatch({
      type: SET_CART_INFAVOURITE_INIT,
      payload: product,
    });
  };
}
// Adding to Favorites
export function setInfavourite(product) {
  return (dispatch) => {
    dispatch({
      type: SET_CART_INFAVOURITE,
      payload: product,
    });
  };
}
// Deleting from Favorites
export function deleteInfavourite(product) {
  return (dispatch) => {
    dispatch({
      type: DELETE_CART_INFAVOURITE,
      payload: product,
    });
  };
}
// Adding to Cart

export function setInbuy(product, ammount) {
  return (dispatch) => {
    dispatch({
      type: SET_CART_BUY,
      payload: [product, ammount],
    });
  };
}
// Adding changes in cart
export function changeInbuy(product, ammount) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_INCART_AMMOUNT,
      payload: [product, ammount],
    });
  };
}
// Deleting from cart

export function deleteInbuy(product) {
  return (dispatch) => {
    dispatch({
      type: DELETE_CART_INBUY,
      payload: product,
    });
  };
}
