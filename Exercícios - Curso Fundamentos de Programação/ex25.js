const buscarPalavrasSemelhantes = (inicio,array) => {
    let novoArray = []
    for(let palavra of array) {
        if(palavra.includes(inicio)) {
            novoArray.push(palavra)
        }
    }
    return novoArray
}

const buscarPalavrasSemelhantes2 = (inicio,array) => array.filter(palavra => palavra.includes(inicio))

console.log(buscarPalavrasSemelhantes("pro", ["programação","mobile","profissional"]))
console.log(buscarPalavrasSemelhantes2("pro", ["programação","mobile","profissional"]))
