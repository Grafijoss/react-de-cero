import { Component, createElement } from "../lib/react/index.js";

class User extends Component {
  // recibe las propiedades cuando se instancia la clase
  constructor(props) {
    // hace que todo this este disponible en la clase superior (Component)
    super(props);

    // asigna un nuevo this a la funcion
    // retorna una nueva funcion
    // asigamos la nueva funcion a this.handleClick
    this.handleClick = this.handleClick.bind(this);
  }

  // event-lesson
  handleClick(event) {
    console.table(this.props);
  }
  handleClickArrow = (event) => {
    console.table(this.props);
  };
  render() {
    const { avatar, name } = this.props;

    return createElement("div", {
      // event-lesson
      onClick: this.handleClickArrow,
      class: "user",
      children: [
        createElement("div", {
          class: "avatar",
          children: createElement("img", { src: avatar }),
        }),
        createElement("h2", null, name),
      ],
    });
    // return `
    //   <div class="user">
    //     <div class="avatar">
    //       <img src="${avatar}" alt=""/>
    //     </div>
    //     <h2>${name}</h2>
    //   </div>
    // `;
  }
}

export default User;
