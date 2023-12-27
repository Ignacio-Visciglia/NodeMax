const fs = require('node:fs')

console.log('Leyendo el primer archivo')
const text = fs.readFileSync(/* nos devuelve un buffer en bytes */'./archivo.txt', /* codificacion unicode */'utf-8')

console.log(text)
console.log('Hacer cosas mientras lee el archivo')//Nunca va a poder salir antes del fin de la lectura del archivo porque es Sync y bloquea el proceso

console.log('Leyendo el segundo archivo')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(text2)