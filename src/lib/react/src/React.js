class Component {
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }

  // setstate-lesson
  update() {}

  // setstate-lesson
  // esta funcion solo  se puede acceder desde Component
  // abstraccion de objetos
  // los campos privados inician con un hash #
  // puede ser function, metodo, propiedad set, get,

  #updater() {
    // actualiza el componente con el metodo desde react-dom
    this.update(this.render());
    this.componentDidUpdate();
  }

  // se llama antes de que se renderice el componente
  componentWillMount() {}

  // se llama cuando el componente se pinto en el navegador
  componentDidMount() {}

  // se llama antes de que se actualice el componente
  componentWillUpdate() {}

  // se llama cuando el componente se actualizo
  componentDidUpdate() {}

  // setstate-lesson
  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.componentWillUpdate();
    this.#updater();
  }

  // este metodo va a retornar el render
  // es un armador
  build() {
    this.componentWillMount();
    return this.render();
  }
}

export { Component };
