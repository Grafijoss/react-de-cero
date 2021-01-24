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
    store.dispatch({
      type: ADD_MOVIES,
      payload: results,
    });
  };

  handleIntersection = (entries) => {
    const state = store.getState();
    const moviesFiltered = state.list[state.filter].length > 0;
    // console.log(entries);
    if (entries[0].isIntersecting && moviesFiltered) {
      console.log("traer nueva pagina");
      console.log(state.list[state.filter].length);
      this.getPage(this.state.page);
      this.setState({
        page: this.state.page + 1,
      });
    } else {
      console.log("no hay cincidencias");
    }
  };

  componentDidMount() {
    this.getPage(this.state.page);
    // recibe una funcion como callback
    store.subscribe(() => {
      // console.log("me he actualizado");
      // vamos a forzar el rerenderizado de la aplicacion
      // el callback se ejecuta cuando las condiciones del interceptor
      // entran en evaluacion
      this.setState();

      // la clase IntersectionObserver
      // se le pasa un callback y un objeto de configuracion
      const observer = new IntersectionObserver(this.handleIntersection);
      observer.observe(window.intersector);
    });
  }

  render() {
    const state = store.getState();
    const movieListId = state.list[state.filter];
    const movieList = state.movieList;

    if (state.list[state.filter].length > 0) {
      return Wrapper({
        children: MovieListStyled({
          children: movieListId.map((id) => new Movie(movieList.get(id))),
        }),
      });
    }

    return Wrapper({
      children: MovieListStyled(null, "no hay coincidencias"),
    });
  }
}

export default MovieList;
