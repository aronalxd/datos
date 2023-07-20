const alturaCentimetros = 180;
const alturaMetros = alturaCentimetros / 100;
const pesoKilogramos = 75.5;
const alturaMetrosRedondeada = Math.ceil(alturaMetros);
const pesoKilogramosRedondeado = Math.floor(pesoKilogramos);
const maximoValorMasUnoIgualMaximoValor = Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER;

console.log("Altura en centímetros:", alturaCentimetros);
console.log("Altura en metros:", alturaMetros);
console.log("Peso en kilogramos:", pesoKilogramos);
console.log("Altura en metros redondeada hacia arriba:", alturaMetrosRedondeada);
console.log("Peso en kilogramos redondeado hacia abajo:", pesoKilogramosRedondeado);
console.log("¿El máximo valor que se puede obtener en Javascript + 1 es igual al máximo valor que se puede obtener en Javascript?", maximoValorMasUnoIgualMaximoValor);
