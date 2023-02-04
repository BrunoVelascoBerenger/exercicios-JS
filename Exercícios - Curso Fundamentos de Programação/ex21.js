const menorNumero1 = array => array.reduce(resolucao1)

const resolucao1 = (valorAnterior, valorAtual) => valorAnterior > valorAtual ? valorAtual : valorAnterior

const resolucao2 = function(numeros) {
    let menor = numeros[0]

    for(let i in numeros) {
        if(numeros[i] < menor) {
            menor = numeros[i]
        }
    }
    return menor
}

const resolucao3 = numeros => Math.min(...numeros)


console.log(menorNumero1([10,5,35,65]))
console.log(resolucao2([10,5,35,65]))
console.log(resolucao3([10,5,35,65]))

