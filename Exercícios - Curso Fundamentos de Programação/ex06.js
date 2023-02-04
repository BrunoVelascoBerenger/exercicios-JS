const inverteValor = valor => {
    if(typeof valor === 'boolean') {
        return !valor
    } else if(typeof valor == 'number') {
        return valor * -1
    } else {
        return `Booleano ou número esperados, mas o parado é do tipo ${typeof valor}`
    }
}

console.log(inverteValor('jao'))