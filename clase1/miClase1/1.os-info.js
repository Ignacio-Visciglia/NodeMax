const os = require('node:os') // a partir de Node 16 se recomienda utilizar el node:
const pc = require('picocolors')

console.log('Informacion del OS')
console.log('------------------')

console.log('Nombre del OS:', pc.red(os.platform()))
console.log('Version:', os.release())
console.log('Arquitectura:', os.arch())
console.log('CPUs:', os.cpus()) // <--- con esto vamos a poder escalar procesos en Node.js
console.log('Memoria libre:', os.freemem() / 1024 / 1024)
console.log('Memoria total:', os.totalmem() / 1024 / 1024)
console.log('Uptime:', os.uptime() / 60 / 60)
