function sum(a,b){
    return a + b
}

//CommonJS Module Export
module.exports = sum

/* module.exports = {
    sum
} */

/* module.exports = {
    sum : sum
} */

/* module.exports = {
    sum : function sum(a,b){
        return a + b
    }
} */

//Cualquiera de las formas comentadas, obligaría a que el import no se declare con una constante que podría tener otro nombre, sino que deberíamos obligatoriamente desestructurar la llave