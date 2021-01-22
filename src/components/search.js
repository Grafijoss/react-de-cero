import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";

import Form from "./form.js";
import Input from "./input.js";
import Button from "./button.js";
/*
<section class="wrapper">
      <div class="actions">
        <form action="" id="search-form">
          <input
            placeholder="Escribe tu película favorita"
            name="title"
            type="Busca una pelicula"
          />
          <button>Buscar</button>
        </form>
        <button id="recommended">Películas recomendadas</button>
        <select name="" id="filter">
          <option value="all">Todas</option>
          <option value="most-valued">Más valoradas</option>
          <option value="least-valued">Menos valoradas</option>
        </select>
      </div>
    </section>

    */

class Search extends Component {
  render() {
    return Form({
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
