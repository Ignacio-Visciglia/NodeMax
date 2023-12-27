const net = require('node:net') // Módulo nativo Protocolo TCP

function findAvailablePort(desiredPort){
    return new Promise((resolve,reject) => {
        const server = net.createServer()
        server.listen(desiredPort,()=>{
            const port = server.address().port
            /* const { port } = server.address() */ // Desestructuro
            server.close(()=>{
                resolve(port)
            })
        })
        server.on('error',(err) => {
            if(err.code == 'EADDRINUSE'){
                findAvailablePort(0).then(port => resolve(port))
            } else {
                reject(err)
            }
        })// Evento orientado a manejar error
    })
}

module.exports = { findAvailablePort }