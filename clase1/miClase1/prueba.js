const fs = require('node:fs')
const { promisify } = require('node:util')

const readFilePromise = promisify(fs.readFile)
readFilePromise('./archivo.txt', 'utf-8').then(text => console.log(text))