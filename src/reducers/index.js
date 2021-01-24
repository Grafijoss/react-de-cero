import { ADD_MOVIES, SEARCH_MOVIE, SET_FILTERS } from "../actions/index.js";
import {
  movieListAsMap as getMovieListAsMap,
  getAllIds,
  getLeastValuedIds,
  getMostValuedIds,
} from "../normalize.js";

function filterByTitle({ title, list: movies }) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(title.toLowerCase());
  });
}

function findById(id, allIds) {
  const parseId = parseInt(id, 10);
  // si se incluye devolvemos el id
  if (allIds.includes(parseId)) {
    return [parseId];
  }

  return allIds;
}

function searchMovie({ query, allIds }) {
  if (isNaN(query)) {
    // return filterByTitle(query);
  }
  return findById(query, allIds);
  // return findById(query)
}

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
      return {
        ...state,
        filter: payload,
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        filter: "search",
        list: {
          ...state.list,
          search: searchMovie({
            query: payload,
            list: state.movieList,
            allIds: state.list.all,
          }),
        },
      };
    default:
      return state;
  }
};

export default reducer;
