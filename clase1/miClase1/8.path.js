const path = require('node:path')

// Barra separadora de carpeta según OS
//--> unix /
//--> windows \
console.log(path.sep) 

//unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//Obtener nombre del fichero de una ruta completa
const base = path.basename('/content/subfolder/test.txt')
console.log(base)

//Obtener solo el nombre sin la extensión
const filename = path.basename('/content/subfolder/test.txt', '.txt')
console.log(filename)

const extension = path.extname('image.jpg')
console.log(extension)