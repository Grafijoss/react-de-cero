function movieListAsMap(newList) {
  // rewtorna un map con todos las peliculas
  // con el id como el key de cada pelicula
  return newList.reduce((list, movie) => {
    list.set(movie.id, movie);
    return list;
  }, new Map());
  // map puede recibir como key de lo elementos iterables
  // string, number, todos los primivitos, y tambien funciones
  // podriamos retornar un objeto, array, map..
}

function getAllIds(list) {
  return list.map((movie) => movie.id);
}

// recibe como parametro una funcion
// la funcion recibe como parametros
// (prevValue, actualValue, index)
// el valor actual va a ser el elemento que esta iterando
// el index sera el indice del elemento
function getMostValuedIds(list) {
  return list.reduce((list, movie) => {
    // si la pelicula tiene mas de 7 votos
    if (movie.vote_average > 7) {
      // push añade un elemento a la parte final del array
      // vamos a añadir solo el id de la pelicula
      list.push(movie.id);
    }
    return list;
  }, []);
  // este es el valor inicial para evitar que se indefinido
}

function getLeastValuedIds(list) {
  return list.reduce((list, movie) => {
    if (movie.vote_average <= 7) {
      list.push(movie.id);
    }
    return list;
  }, []);
}

export { movieListAsMap, getAllIds, getMostValuedIds, getLeastValuedIds };
