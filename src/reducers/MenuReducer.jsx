import {
  GET_MENUES_REQUEST,
  GET_MENUES_SUCCESS,
  GET_MENUES_ERROR,
  SET_MENUES_SETTINGS,
} from "../actions/MenueComponentActions";
const initialState = {
  menues: [],
  isFetching: false,
  selectedOption: {
    Бренд: [],
    Вязкость: [],
    Тип: [],
    Спецификация: [],
    Допуск: [],
  },
};
export function menueReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MENUES_REQUEST:
      return { ...state, isFetching: true };
    case GET_MENUES_SUCCESS:
      return {
        ...state,
        menues: action.payload,
        isFetching: false,
      };
    case GET_MENUES_ERROR:
      return {
        ...state,
        menues: { id: 1488, title: "Извините, нету интернета" },
        isFetching: false,
      };
    case SET_MENUES_SETTINGS:
      return {
        ...state,
        selectedOption: {
          [action.payload[1]]: action.payload[0],
        },
      };
    default:
      return state;
  }
}
