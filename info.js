// Importamos el módulo 'fs' para poder escribir en el archivo
const fs = require('fs');

// Creamos el objeto con los datos solicitados
const miInfo = {
  nombre: 'Tu Nombre',
  edad: 30,
  esDesarrollador: true,
  fechaNacimiento: new Date('1993-07-20'),
  libroFavorito: {
    titulo: 'Nombre del Libro',
    autor: 'Nombre del Autor',
    fecha: 'Fecha de Publicación',
    url: 'URL del Libro',
  },
};

// Convertimos el objeto en formato JSON
const miInfoJSON = JSON.stringify(miInfo, null, 2);

// Escribimos el contenido en el archivo miInfo.json
fs.writeFile('miInfo.json', miInfoJSON, (err) => {
  if (err) {
    console.error('Error al escribir en el archivo:', err);
  } else {
    console.log('Archivo miInfo.json creado correctamente.');
  }
});
