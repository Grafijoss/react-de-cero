function render(element, container) {
  // element instanceof Element
  // sabemos si es un elemento HTML
  if (typeof element === "string" || element instanceof Element) {
    return container.append(element);
  }

  // setstate-lesson
  function reRender(newChild) {
    // replaceChild es un metodo del DOM
    // recibe dos parametros
    // newChild, oldChild
    container.replaceChild(newChild, childElement);
    childElement = newChild;
  }

  // setstate-lesson
  // le asignamos un nuevo metodo a update de React
  // React es la clase base
  element.update = reRender;

  // innerHTML recibe un string y lo convierte
  // a un elemento del DOM
  // container.innerHTML = element.render()

  let childElement = element.build();
  // agrega un elemento hasta el final del contenedor
  container.append(childElement);

  // cuando pasa el primer renderizado
  element.componentDidMount();
}

export { render };
