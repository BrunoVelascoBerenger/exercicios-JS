const receberSomenteOsParesDeIndicesPares = array => {
    let novoArray = []
    novoArray = array.filter((element,indice) => element % 2 == 0 && indice % 2 == 0)
    return novoArray
}

console.log(receberSomenteOsParesDeIndicesPares([1,2,3,4]))
console.log(receberSomenteOsParesDeIndicesPares([10,70,22,43]))
