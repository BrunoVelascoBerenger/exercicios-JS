function filtrarPorQuantidadeDeDigitos(array,quantidadeDesejada) {
    let resultado = []
    for(numero of array) {
        const quantidadeDeDigitos = String(numero).length

        if(quantidadeDeDigitos === quantidadeDesejada) {
            resultado.push(numero)
        }
    }

    return resultado
}

function filtrarPorQuantidadeDeDigitos2(array, quantidadeDesejada) {
    return array.filter(numero => {
        const quantidadeDeDigitos = String(numero).length

        return quantidadeDeDigitos === quantidadeDesejada
    })
}

console.log(filtrarPorQuantidadeDeDigitos([38,2,365,10,125,11], 3))
console.log(filtrarPorQuantidadeDeDigitos2([38,2,365,10,125,11], 3))