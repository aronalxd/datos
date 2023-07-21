// Función sin parámetros que devuelve siempre "true"
function siempreTrue() {
  return true;
}

// Función asíncrona con un setTimeout que muestra un mensaje en consola después de 5 segundos
async function mensajeAsincrono() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("Hola, soy una promesa");
}

// Función generadora de índices pares automáticos
function* indicesParesAutomaticos() {
  let index = 0;
  while (true) {
    yield index;
    index += 2;
  }
}

// Prueba de las funciones
console.log(siempreTrue()); // Devuelve true

mensajeAsincrono(); // Muestra "Hola, soy una promesa" después de 5 segundos

const generador = indicesParesAutomaticos();
console.log(generador.next().value); // Devuelve 0
console.log(generador.next().value); // Devuelve 2
console.log(generador.next().value); // Devuelve 4
console.log(generador.next().value); // Devuelve 6
// Y así sucesivamente, el generador seguirá devolviendo índices pares automáticos
