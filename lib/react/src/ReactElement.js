import { render } from "../../react-dom.js";

// renderisa los children
function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach((child) => render(child, container));
  }
  return render(children, container);
}

// event-lesson
function setEvents(element, event, callback) {
  return element.addEventListener(event, callback);
}

function setProperties(prop, value, element) {
  // event-lesson
  // support for events
  if (prop.startsWith("on")) {
    const event = prop.replace("on", "").toLowerCase();
    return setEvents(element, event, value);
  }

  // support for children
  if (prop === "children") {
    // children: createElement('div, {}, 'hola)
    // prop: children:
    // value: createElement('div, {}, 'hola)
    return renderChildren(value, element);
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
    // console.log(Object.keys(props));
  }

  return element;
}
