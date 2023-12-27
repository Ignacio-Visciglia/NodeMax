const fs = require('node:fs/promises') // este es un modulo que permite el /promises
/* const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)
readFilePromise('./archivo.txt', 'utf-8')
.then(text => console.log(text)) */
//Lo comentado se usa solo en caso de que el modulo nativo no tenga la version para usar promesas

console.log('leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8')
.then(text => console.log(text))

console.log('Hacer cosas mientras lee el archivo')

console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8')
.then(text => console.log(text))