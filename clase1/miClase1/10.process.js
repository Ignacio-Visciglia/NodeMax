//El objeto global process proporciona información y control sobre el proceso actual de ejecución

// argumentos de entrada
console.log(process.argv)

// controlar los eventos del proceso
/* process.on('exit', () => {
    //limpiar recursos o console, por ejemplo.
}) */

//CWD Current Working Directory
//console.log(process.cwd()) // Te informa desde dónde estás trabajando


// controlar el proceso y su salida
//process.exit(0) // con 0 el proceso ha ido bien y termina ahí, con 1 ha habido algún error y puede quedar colgado o lo que sea

//platform
console.log(process.env.PEPITO) //Variables de entorno