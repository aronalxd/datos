// Lista de la compra
let listaCompra = ["Pan", "Leche", "Huevos", "Arroz", "Frutas"];
console.log("Lista de la compra:", listaCompra);

// Modificar la lista de la compra y añadir "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");
console.log("Lista de la compra con Aceite de Girasol:", listaCompra);

// Eliminar "Aceite de Girasol" de la lista de la compra
listaCompra.splice(listaCompra.indexOf("Aceite de Girasol"), 1);
console.log("Lista de la compra sin Aceite de Girasol:", listaCompra);

// Lista de tus 3 películas favoritas
const peliculasFavoritas = [
  {
    titulo: "Nombre de la Película 1",
    director: "Nombre del Director 1",
    fecha: "Fecha de Estreno 1",
  },
  {
    titulo: "Nombre de la Película 2",
    director: "Nombre del Director 2",
    fecha: "Fecha de Estreno 2",
  },
  {
    titulo: "Nombre de la Película 3",
    director: "Nombre del Director 3",
    fecha: "Fecha de Estreno 3",
  },
];
console.log("Películas favoritas:", peliculasFavoritas);

// Filtrar películas posteriores al 1 de enero de 2010
const peliculasPosteriores2010 = peliculasFavoritas.filter(
  (pelicula) => new Date(pelicula.fecha) > new Date("2010-01-01")
);
console.log("Películas posteriores a 1 de enero de 2010:", peliculasPosteriores2010);

// Obtener lista de directores
const directores = peliculasFavoritas.map((pelicula) => pelicula.director);
console.log("Directores de las películas:", directores);

// Obtener lista de títulos
const titulos = peliculasFavoritas.map((pelicula) => pelicula.titulo);
console.log("Títulos de las películas:", titulos);

// Concatenar lista de directores y lista de títulos
const directoresYTitulosConcatenados = directores.concat(titulos);
console.log("Directores y títulos concatenados:", directoresYTitulosConcatenados);

// Concatenar lista de directores y lista de títulos utilizando el operador de propagación (spread)
const directoresYTitulosSpread = [...directores, ...titulos];
console.log("Directores y títulos con el operador de propagación:", directoresYTitulosSpread);
