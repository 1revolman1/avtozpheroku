//This block describes the actions that are called for processing menu (downloading,adding element in filter)
export const GET_MENUES_REQUEST = "GET_MENUES_REQUEST";
export const GET_MENUES_SUCCESS = "GET_MENUES_SUCCESS";
export const GET_MENUES_ERROR = "GET_MENUES_ERROR";
export const SET_MENUES_SETTINGS = "SET_MENUES_SETTINGS";
//Getting menues from backend

export function getMenues() {
  return (dispatch) => {
    dispatch({
      type: GET_MENUES_REQUEST,
    });
    fetch("https://autozpheroku.herokuapp.com/api/menu")
      .then((response) => response.json())
      .then((json) =>
        dispatch({
          type: GET_MENUES_SUCCESS,
          payload: json,
        })
      )
      .catch((e) => {
        dispatch({
          type: GET_MENUES_ERROR,
          payload: e,
        });
      });
  };
}
//Making changes in menues array
export function setFilter(selectedOption, withToSelect) {
  return (dispatch) => {
    dispatch({
      type: SET_MENUES_SETTINGS,
      payload: [selectedOption, withToSelect],
    });
  };
}
