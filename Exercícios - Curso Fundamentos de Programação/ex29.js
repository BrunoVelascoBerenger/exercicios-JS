function segundoMaior(array) {
    let indiceDoMaior = 0
    let segundoMaior

    array.forEach((numero, indice) => {
        if(numero > array[indiceDoMaior]) {
            indiceDoMaior = indice
        }
    })

    array.splice(indiceDoMaior,1)
    segundoMaior = array [0]

    array.forEach(numero => {
        if(numero > segundoMaior) {
            segundoMaior = numero
        }
    })

    return segundoMaior
}

function segundoMaior2(array) {
    const maiorNumero = Math.max(...array)
    array = array.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...array)

    return segundoMaior
}

function segundoMaior3(array) {
    const numerosOrdenados = array.sort((numeroA,numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]

    return segundoMaior
}

console.log(segundoMaior([12,6,1,5]))
console.log(segundoMaior2([12,6,1,5]))
console.log(segundoMaior3([12,6,1,5]))