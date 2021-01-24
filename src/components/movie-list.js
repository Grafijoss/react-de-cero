import { Component } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";

import Wrapper from "./wrapper.js";
import Movie from "./movie.js";
// import movies from "../movies.js";
import store from "../store.js";
import api from "../api.js";
import { ADD_MOVIES } from "../actions/index.js";

const MovieListStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  box-sizing: border-box;
  gap: 1em;
`;

class MovieList extends Component {
  state = {
    page: 20,
  };

  getPage = async (page) => {
    const { results, ...rest } = await api.moviePage(page);
    console.log(rest);
    console.log(results);
    store.dispatch({
      type: ADD_MOVIES,
      payload: results,
    });
  };

  componentDidMount() {
    this.getPage(this.state.page);
    // recibe una funcion como callback
    store.subscribe(() => {
      console.log("me he actualizado");
      // vamos a forzar el rerenderizado de la aplicacion
      this.setState();
    });
  }

  render() {
    const state = store.getState();
    const movieListId = state.list[state.filter];
    const movieList = state.movieList;

    console.log(state);

    console.log(state);

    return Wrapper({
      children: MovieListStyled({
        children: movieListId.map((id) => new Movie(movieList.get(id))),
      }),
    });
  }
}

export default MovieList;
