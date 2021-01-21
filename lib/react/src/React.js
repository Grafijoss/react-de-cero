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
  }

  // setstate-lesson
  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.#updater();
  }
}

export { Component };
