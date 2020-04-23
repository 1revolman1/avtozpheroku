export const GET_GOODS_REQUEST = "GET_GOODS_REQUEST";
export const GET_GOODS_SUCCESS = "GET_GOODS_SUCCESS";
export const GET_GOODS_AMMOUNT = "GET_GOODS_AMMOUNT";
export const GET_GOODS_PAGE = "GET_GOODS_PAGE";
export const SET_GOODS_STORE = "SET_GOODS_STORE";
export const SET_GOODS_NEW = "SET_GOODS_NEW";
export function getGoods() {
  return (dispatch) => {
    dispatch({
      type: GET_GOODS_REQUEST,
    });
    fetch("https://avtooporatest.herokuapp.com/api/goods")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: SET_GOODS_STORE,
          payload: json,
        });
        return json;
      })
      .then((json) => {
        dispatch({
          type: GET_GOODS_AMMOUNT,
          payload: json.length,
        });
        let buffer = json.slice();
        // let newData = [];
        // let length = json.length;
        // for (let i = 0; i < length; i += 20) {
        //   newData.push(...[buffer.splice(0, 20)]);
        // }
        // return newData;
        // dispatch({
        //   type: GET_GOODS_SUCCESS,
        //   payload: json,
        // });
        return buffer;
      })
      .then((data) => {
        dispatch({
          type: GET_GOODS_SUCCESS,
          payload: data,
        });
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
      type: SET_GOODS_NEW,
      payload: products,
    });
  };
}
// "http://localhost:8080/api/goods"
// payload: [
//         {
//           proizvod: "Castrol",
//           text: "Масло GM Motor Oil 1л 10W40 (полусинтетика)",
//           code: ["Код товара: 410799978887Z", "Кат. номер: GH0W20FS1"],
//           price: "511.80 грн.",
//           img:
//             "https://shop.autoopora.com/fotos/cache/410799978887Z_1-238x238.JPG",
//         },
//       ],
