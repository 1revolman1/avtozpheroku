export const GET_GOODS_REQUEST = "GET_GOODS_REQUEST";
export const GET_GOODS_SUCCESS = "GET_GOODS_SUCCESS";
export function getGoods(t) {
  return (dispatch) => {
    dispatch({
      type: GET_GOODS_REQUEST,
    });
    fetch("https://avtooporatest.herokuapp.com/api/goods")
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: GET_GOODS_SUCCESS,
          payload: json,
        })
      );
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
