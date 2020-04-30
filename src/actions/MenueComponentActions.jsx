export const GET_MENUES_REQUEST = "GET_MENUES_REQUEST";
export const GET_MENUES_SUCCESS = "GET_MENUES_SUCCESS";
export const GET_MENUES_ERROR = "GET_MENUES_ERROR";
export const SET_MENUES_SETTINGS = "SET_MENUES_SETTINGS";
// https://avtooporatest.herokuapp.com/api/menu
// http://localhost:8080/api/menu
export function getMenues() {
  return (dispatch) => {
    dispatch({
      type: GET_MENUES_REQUEST,
    });
    fetch("http://localhost:8080/api/menu")
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
export function setFilter(selectedOption, withToSelect) {
  return (dispatch) => {
    dispatch({
      type: SET_MENUES_SETTINGS,
      payload: [selectedOption, withToSelect],
    });
  };
}
//  http://localhost:8080/api/menu
