import { ADD_MOVIES, SET_FILTERS } from "../actions/index.js";
import {
  movieListAsMap as getMovieListAsMap,
  getAllIds,
  getLeastValuedIds,
  getMostValuedIds,
} from "../normalize.js";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_MOVIES: {
      const movieList = getMovieListAsMap(payload, state.movieList);
      const all = getAllIds(payload, state.list.all);
      const leastValued = getLeastValuedIds(payload, state.list.leastValued);
      const mostValued = getMostValuedIds(payload, state.list.mostValued);
      return {
        ...state,
        movieList,
        list: {
          ...state.list,
          all,
          leastValued,
          mostValued,
        },
      };
    }
    case SET_FILTERS:
      return state;
    default:
      return state;
  }
};

export default reducer;
