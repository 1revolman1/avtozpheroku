export const GET_GOODS_REQUEST = "GET_GOODS_REQUEST";
export const GET_GOODS_SUCCESS = "GET_GOODS_SUCCESS";
export function getGoods(t) {
  return (dispatch) => {
    // экшен с типом REQUEST (запрос начался)
    // диспатчится сразу, как будто-бы перед реальным запросом
    dispatch({
      type: GET_GOODS_REQUEST,
    });
    // а экшен внутри setTimeout
    // диспатчится через секунду
    // как будто-бы в это время
    // наши данные загружались из сети
    setTimeout(() => {
      dispatch({
        type: GET_GOODS_SUCCESS,
        payload: [1, 2, 3, 4, 5],
      });
    }, 1000);
  };
}
