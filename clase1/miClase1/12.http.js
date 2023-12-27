const http = require('node:http') // Módulo nativo Protocolo HTTP
const { findAvailablePort } = require('./13.free-port')

const desiredPort = process/* variable global */.env.PORT/* variable de entorno que se declara en la linea de ejecucion para setear lo deseado y sino, usará el 3000 */ ?? 3000 

const server = http.createServer((req, res) => {
    console.log('request received') // Los console.log que se ejecutan en el servidor no llegan al navegador porque es el lado del cliente.
    res.end('Hola Mundo')
}) // Crea el servidor y le paso un callback para gestionar la request y la response
// Los servidores solo pueden hacer dos cosas: recibir peticiones o enviar respuestas.


findAvailablePort(desiredPort).then(port => {
    server.listen(port,()=>{
        console.log(`server listening on port http://localhost:${port}`)
    })
})

// Aca seteo la escucha del servidor
//server.listen(0 /* al pasarle 0 como parametro de puerto, le estamos asignando automaticamente cualquier puerto vacío. De todas maneras esto es solo recomendado para modo DESARROLLO, no modo PRODUCCION */, () => {
//    console.log(`Server listening on port http://localhost:${server.address().port}`/* Con esto obtengo el puerto donde levanta el servidor */)
//})