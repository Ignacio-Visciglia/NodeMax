const fs = require('node:fs/promises')

//IIFE : Immediately Invoked Function Expression

//El ; es opcional en JS pero eso no quiere decir que no sea requerido. Si en este caso no lo pongo despues del require, JS interpreta erróneamente el código
;(async()=>{
    console.log('Leyendo el primer archivo')
    const text = await fs.readFile('./archivo.txt','utf-8')
    console.log(text)

    console.log('Hacer cosas mientras lee el archivo')

    console.log('Leyendo el segundo archivo')
    const text2 = await fs.readFile('./archivo2.txt','utf-8')
    console.log(text2)
})()

//En CommonJS el await NO se puede usar en el cuerpo del archivo, necesitan SI O SI ser parte de una funcion asíncrona. Se pueden usar funciones autoinvocadas