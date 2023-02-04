const filtarNumeros = array => {
    let novoArray = array.filter(soNumeros)
    return novoArray
}

const soNumeros = numero => typeof numero === 'number'

console.log(filtarNumeros(["Javascript", 1, "3", "Web", 20]))