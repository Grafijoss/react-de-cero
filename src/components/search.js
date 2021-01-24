import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";

import Form from "./form.js";
import Input from "./input.js";
import Button from "./button.js";
import store from "../store.js";
import { SEARCH_MOVIE, SET_FILTERS } from "../actions/index.js";

class Search extends Component {
  handleEvent = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const query = formData.get("title");

    if (query) {
      return store.dispatch({
        type: SEARCH_MOVIE,
        payload: query,
      });
    }

    return store.dispatch({
      type: SET_FILTERS,
      payload: "all",
    });
  };
  render() {
    return Form({
      onSubmit: this.handleEvent,
      children: [
        new Input({
          placeholder: "Escribe tu película favorita",
          name: "title",
          type: "text",
        }),
        new Button(null, "Buscar"),
      ],
    });
  }
}

export default Search;
