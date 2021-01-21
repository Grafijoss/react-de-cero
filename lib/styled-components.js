import { createElement } from "./react/index.js";

const styled = {};
const elements = ["h1", "p", "div", "img", "article", "footer", "header"];

function buildStyles(strings, dynamicValues, props) {
  // hacemos una copia del array
  const style = strings.slice();
  dynamicValues.forEach((value, index) => {
    // value es la funcion que queremos ejecutar
    // (props) => props.primaryColor

    style[index] += value(props);
  });
  return style.join("");
}

elements.forEach((tag) => {
  // TAGTTENPLATE
  // recibe strings que son los estilos base
  // como segundo parametreo recibe los dynamicValues
  // normalmente se llama ...rest
  styled[tag] = function (strings, ...dynamicValues) {
    return function (props, content) {
      const style = buildStyles(strings, dynamicValues, props);
      return createElement(
        tag,
        {
          // vamos a decorar las propiedades
          ...props,
          style,
        },
        content
      );
    };
  };
});

export default styled;
