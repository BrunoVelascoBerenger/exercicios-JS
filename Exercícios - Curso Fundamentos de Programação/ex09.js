const repetir = (elemento, repetidor) => {
    let vetor = []
    if(repetidor == 0) {
        return vetor
    } else {
        for(let i = 0; i < repetidor; i++) {
            vetor[i] = elemento
        }
        return vetor
    }   
}

console.log(repetir('codigo',2))
console.log(repetir(7,3))
console.log(repetir(5,0))
console.log(repetir(true,4))
