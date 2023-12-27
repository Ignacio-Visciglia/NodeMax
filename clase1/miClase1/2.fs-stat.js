const fs = require('node:fs') //a partir de Node 16 se recomienda utilizar el node:

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // Si es un fichero
    stats.isDirectory(), // Si es un directorio
    stats.isSymbolicLink(), // Si es un enlace simbólico
    stats.size // tamaño en bytes
)