import { render } from "../../react-dom.js";

function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach((child) => render(child, container));
  }
  return render(children, container);
}

function setProperties(prop, value, element) {
  // support for children
  if (prop === "children") {
    // children: createElement('div, {}, 'hola)
    // prop: children:
    // value: createElement('div, {}, 'hola)
    renderChildren(value, element);
  }

  // support for atibutes
  const attribute = value;
  return element.setAttribute(prop, attribute);
}

// va a recibir tres paramnetros
// tipo de elemento
// propiedades que le vamos a asignar
// contenido
export function createElement(type, props, content) {
  // creando tipo de elemento
  const element = document.createElement(type);

  // Contenido
  if (element) {
    element.textContent = content;
  }

  // Propiedades
  if (props) {
    Object.keys(props).forEach((prop) =>
      setProperties(prop, props[prop], element)
    );
    console.log(Object.keys(props));
  }

  return element;
}
