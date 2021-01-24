import { API_KEY } from "./constants.js";

class API {
  // se llama inmediatamente cuando se crea la instancia
  constructor() {
    this.API_KEY = API_KEY;
  }
  // base de la url
  // puede ser static
  baseAPI = "https://api.themoviedb.org/3/";

  // esta disponible en cualquier otro metodo de la clase
  get discoverMovie() {
    return `${this.baseAPI}discover/movie?api_key=${this.API_KEY}`;
  }
  // compone un endpoint para traer una pagina
  // como es una peticion asincrona la funcion le debe preceder el async
  // el metodo que envuelve al await
  async moviePage(page) {
    const response = await fetch(`${this.discoverMovie}&page=${page}`);
    // json pertenece a la api de fetch
    // y regresa una promesa
    const data = await response.json();
    return data;
  }
}

// exportamos una instancia de  API
export default new API(API_KEY);
