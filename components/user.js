import { Component, createElement } from "../lib/react/index.js";

class User extends Component {
  displayName = "User";
  state = {
    age: this.props.age,
  };

  componentWillMount() {
    console.log(`the ${this.displayName} component was rendered`);
  }

  componentDidMount() {
    console.log(`the ${this.displayName} omponentt is to be rendered`);
  }

  componentWillUpdate() {
    console.log(`the ${this.displayName} omponentt is to be updated`);
  }

  componentDidUpdate() {
    console.log(`the ${this.displayName} omponentt was updated`);
  }

  // recibe las propiedades cuando se instancia la clase
  // constructor(props) {
  // hace que todo this este disponible en la clase superior (Component)
  // super(props);

  // asigna un nuevo this a la funcion
  // retorna una nueva funcion
  // asigamos la nueva funcion a this.handleClick
  // this.handleClick = this.handleClick.bind(this);
  // }

  // event-lesson
  // handleClick(event) {
  //   console.table(this.props);
  // }
  handleClick = (event) => {
    // setstate-lesson
    this.setState({
      age: this.state.age + 1,
    });
  };
  render() {
    const { avatar, name } = this.props;
    const { age } = this.state;

    return createElement("div", {
      // event-lesson
      class: "user",
      onClick: this.handleClick,
      children: [
        createElement("div", {
          class: "avatar",
          children: createElement("img", { src: avatar }),
        }),
        createElement("h2", null, `Hola soy ${name} y tengo ${age}`),
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
