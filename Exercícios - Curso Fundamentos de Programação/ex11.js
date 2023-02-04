const receberPrimeiroEUltimoElemento = array => {
    let novoArray = []
    novoArray.push(array[0])
    novoArray.push(array[array.length - 1])
    
    return novoArray
}

console.log(receberPrimeiroEUltimoElemento([1,2,4,5]))