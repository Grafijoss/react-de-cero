function render(element, container) {
  // element instanceof Element
  // sabemos si es un elemento HTML
  if (typeof element === "string" || element instanceof Element) {
    return container.append(element);
  }
  // innerHTML recibe un string y lo convierte
  // a un elemento del DOM
  // container.innerHTML = element.render()

  const childElemnt = element.render();
  // agrega un elemento hasta el final del contenedor
  container.append(childElemnt);
}

export { render };
