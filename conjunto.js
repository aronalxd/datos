// Un nuevo Set con los nombres de tu familia
const nombresFamilia = new Set(["Nombre1", "Nombre2", "Nombre3"]);

// Modificar el Set original añadiendo tu nombre (duplicado)
nombresFamilia.add("Tu Nombre");
nombresFamilia.add("Tu Nombre"); // No se añadirá una segunda vez, ya que los Sets no permiten duplicados

// Modificar el Set original añadiendo el nombre "Javascript"
nombresFamilia.add("Javascript");

console.log("Nombres de la familia:", nombresFamilia);
