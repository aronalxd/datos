// Un objeto con tus datos personales
const datosPersonales = {
  nombre: "Tu Nombre",
  apellido: "Tu Apellido",
  edad: 30,
  altura: 180,
  eresDesarrollador: true,
};

// Obtener tu edad a partir del objeto anterior
const miEdad = datosPersonales.edad;

// Un objeto con los datos personales de tus dos mejores amig@s
const amigo1 = {
  nombre: "Nombre Amigo 1",
  apellido: "Apellido Amigo 1",
  edad: 28,
  altura: 175,
  eresDesarrollador: false,
};

const amigo2 = {
  nombre: "Nombre Amigo 2",
  apellido: "Apellido Amigo 2",
  edad: 32,
  altura: 190,
  eresDesarrollador: true,
};

// Una lista con los objetos de tus datos personales y tus dos mejores amig@s
const listaPersonas = [datosPersonales, amigo1, amigo2];

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenadaPorEdad = listaPersonas.sort((a, b) => b.edad - a.edad);

console.log("Datos personales:", datosPersonales);
console.log("Mi edad:", miEdad);
console.log("Lista de personas:", listaPersonas);
console.log("Lista ordenada por edad:", listaOrdenadaPorEdad);
