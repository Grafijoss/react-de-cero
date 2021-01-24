function movieListAsMap(newList, oldList = new Map()) {
  // rewtorna un map con todos las peliculas
  // con el id como el key de cada pelicula
  return newList.reduce((list, movie) => {
    list.set(movie.id, movie);
    return list;
  }, oldList);
  // map puede recibir como key de lo elementos iterables
  // string, number, todos los primivitos, y tambien funciones
  // podriamos retornar un objeto, array, map..
}

function getAllIds(list, oldList = []) {
  // concatena un array con otro array
  return oldList.concat(list.map((movie) => movie.id));
}

// recibe como parametro una funcion
// la funcion recibe como parametros
// (prevValue, actualValue, index)
// el valor actual va a ser el elemento que esta iterando
// el index sera el indice del elemento
function getMostValuedIds(list, oldList = []) {
  return list.reduce((list, movie) => {
    // si la pelicula tiene mas de 7 votos
    if (movie.vote_average > 7) {
      // push añade un elemento a la parte final del array
      // vamos a añadir solo el id de la pelicula
      list.push(movie.id);
    }
    return list;
  }, oldList);
  // este es el valor inicial para evitar que se indefinido
}

function getLeastValuedIds(list, oldList = []) {
  return list.reduce((list, movie) => {
    if (movie.vote_average <= 7) {
      list.push(movie.id);
    }
    return list;
  }, oldList);
}

export { movieListAsMap, getAllIds, getMostValuedIds, getLeastValuedIds };
