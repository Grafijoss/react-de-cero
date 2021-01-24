import { ADD_MOVIES, SET_FILTERS } from "../actions/index.js";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_MOVIES:
      return state;
    case SET_FILTERS:
      return state;
    default:
      return state;
  }
};

export default reducer;
