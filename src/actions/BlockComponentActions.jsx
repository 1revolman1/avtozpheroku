//This block describes the actions that are called for processing goods (downloading, receiving a page with pagination, filtering an array with goods)
export const GET_GOODS_REQUEST = "GET_GOODS_REQUEST";
export const GET_GOODS_SUCCESS = "GET_GOODS_SUCCESS";
export const GET_GOODS_PAGE = "GET_GOODS_PAGE";
export const SET_GOODS_STORE = "SET_GOODS_STORE";
export const SET_GOODS_NEW = "SET_GOODS_NEW";
//Getting goods from backend
export function getGoods() {
  return (dispatch) => {
    dispatch({
      type: GET_GOODS_REQUEST,
    });
    fetch("https://autozpheroku.herokuapp.com/api/goods")
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

//Getting goods pagination page

export function getGoodsPage(page) {
  return (dispatch) => {
    dispatch({
      type: GET_GOODS_PAGE,
      payload: page,
    });
  };
}

//Making changes in goods array

export function changeProducts(products) {
  return (dispatch) => {
    dispatch({
      type: SET_GOODS_STORE,
      payload: products,
    });
  };
}
