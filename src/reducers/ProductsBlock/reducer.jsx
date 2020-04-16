const reducer = function (state = [], action) {
  switch (action.type) {
    case "SET_STATE":
      return state.merge(action.state);
    case "ADD_PHONE":
      return state.update("phones", (phones) => phones.push(action.phone));
    case "DELETE_PHONE":
      return state.update("phones", (phones) =>
        phones.filterNot((item) => item === action.phone)
      );
  }
  return state;
};
export default reducer;
