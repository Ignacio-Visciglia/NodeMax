import { readFile } from 'node:fs/promises'

let text
let text2

Promise.all([
    text = await readFile('./archivo.txt','utf-8'),
    text2 = await readFile('./archivo2.txt','utf-8')
])
/* .then(([text, secondText]) => {
    console.log(text)
    console.log(secondText)
})
 */
/* console.log('Hacer cosas mientras lee async con promesa') */


console.log(text)
console.log(text2)

/* console.log('Hacer cosas mientras lee async con promesa') */