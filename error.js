const winston = require('winston');

// Configurar el logger de Winston para guardar los mensajes de error en un archivo
const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'errores.log', level: 'error' }),
  ],
});

function generarErrorPersonalizado(mensaje) {
  throw new Error(mensaje);
}

try {
  generarErrorPersonalizado('Este es un mensaje de error personalizado');
} catch (error) {
  logger.error(error.message);
}
