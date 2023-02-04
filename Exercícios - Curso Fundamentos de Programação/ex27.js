const inverter = obj => {
    let objetoInvertido = {}
    Object.entries(obj).forEach(([chave, valor]) => {
        objetoInvertido[valor] = chave
    })
    return objetoInvertido
}

const inverter2 = obj => {
    const objetoInvertido = {}

    Object.entries(obj).forEach(parChaveValor => {
        const chave = 0,
        valor = 1

        objetoInvertido[parChaveValor[valor]] = parChaveValor[chave]
    })

    return objetoInvertido
}

function inverter3(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map(parChaveValor => parChaveValor.reverse())

    return Object.fromEntries(paresDeChaveValorInvertidos)
}

console.log(inverter({a: 1, b: 2, c: 3}))
console.log(inverter2({a: 1, b: 2, c: 3}))
console.log(inverter3({a: 1, b: 2, c: 3}))