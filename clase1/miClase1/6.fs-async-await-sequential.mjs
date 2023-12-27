import { readFile } from 'node:fs/promises'

console.log('Leyendo el primer archivo')
const text = await readFile('./archivo.txt','utf-8')
console.log(text)

console.log('Hacer cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo')
const text2 = await readFile('./archivo2.txt','utf-8')
console.log(text2)

//En ES Modules el await se puede usar en el cuerpo del archivo, no necesitan ser parte de una funcion asíncrona, esto se llama TOP LEVEL AWAIT