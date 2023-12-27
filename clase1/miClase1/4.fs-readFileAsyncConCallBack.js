const fs = require('node:fs')

console.log('Leyendo el primer archivo')
fs.readFile(/* nos devuelve un buffer en bytes */'./archivo.txt', /* codificacion unicode */'utf-8', /* funcion callback */(err, text) => {
    console.log(text)
})
//Al ser un método asíncrono, necesita un mecanismo que le permita ejecutar el código una vez finalizada la tarea, eso lo logramos mediante las funciones callback
//En los callbacks, siempre el primer parámetro es el error, justamente para no olvidarnos de manejarlo

console.log('Hacer cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8',(err, text) => {
    console.log(text)
})