const nombre = "Ronal";
const apellido = "Mejia";
const estudiante = `${nombre} ${apellido}`;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();
const numeroLetrasEstudiante = estudiante.replace(/ /g, '').length;
const primeraLetraNombre = nombre.charAt(0);
const ultimaLetraApellido = apellido.charAt(apellido.length - 1);
const estudianteSinEspacios = estudiante.replace(/ /g, '');
const nombreContenidoEnEstudiante = estudiante.includes(nombre);

console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Estudiante:", estudiante);
console.log("Estudiante en mayúsculas:", estudianteMayus);
console.log("Estudiante en minúsculas:", estudianteMinus);
console.log("Número de letras de Estudiante (contando espacios):", numeroLetrasEstudiante);
console.log("Primera letra del Nombre:", primeraLetraNombre);
console.log("Última letra del Apellido:", ultimaLetraApellido);
console.log("Estudiante sin espacios:", estudianteSinEspacios);
console.log("¿El Nombre está contenido en Estudiante?", nombreContenidoEnEstudiante);
