// .js --> por defecto utiliza CommonJS
// .mjs --> para utilizar ES Modules
// .cjs --> para utilizar CommonJS forzado

import { sum, sub, mult } from './sum.mjs'
import div from './sum.mjs'

console.log(sum(1,2))
console.log(sub(2,2))
console.log(mult(2,2))
console.log(div(2,2))