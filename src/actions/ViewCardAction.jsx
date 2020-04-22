export const VIEW_AS_LINE = "VIEW_AS_LINE";
export const VIEW_AS_BLOCK = "VIEW_AS_BLOCK";
export function changeToLine(view) {
  return (dispatch) => {
    dispatch({
      type: VIEW_AS_LINE,
      payload: view,
    });
  };
}
export function changeToBlock(view) {
  return (dispatch) => {
    dispatch({
      type: VIEW_AS_BLOCK,
      payload: view,
    });
  };
}
