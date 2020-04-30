export const GET_GOODS_REQUEST = "GET_GOODS_REQUEST";
export const GET_GOODS_SUCCESS = "GET_GOODS_SUCCESS";
export const GET_GOODS_PAGE = "GET_GOODS_PAGE";
export const SET_GOODS_STORE = "SET_GOODS_STORE";
export const SET_GOODS_NEW = "SET_GOODS_NEW";
// https://avtooporatest.herokuapp.com/api/goods
// http://localhost:8080/api/goods
export function getGoods() {
  return (dispatch) => {
    dispatch({
      type: GET_GOODS_REQUEST,
    });
    fetch("http://localhost:8080/api/goods")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: GET_GOODS_SUCCESS,
          payload: json,
        });
        return json;
      })
      .then((json) => {
        dispatch({
          type: SET_GOODS_STORE,
          payload: json,
        });
        return json;
      });
  };
}
export function getGoodsPage(page) {
  return (dispatch) => {
    dispatch({
      type: GET_GOODS_PAGE,
      payload: page,
    });
  };
}
export function changeProducts(products) {
  return (dispatch) => {
    dispatch({
      type: SET_GOODS_STORE,
      payload: products,
    });
  };
}
