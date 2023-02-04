const multiplicar = (numero1,numero2) => {
    let resultado = 0

    for(let i = 0; i < numero2; i++) {
        resultado += numero1
    }
    return resultado
}

console.log(multiplicar(5,2))

const mulitplicar2 = (numero,multiplicador) => {
    if(numero === 0 || multiplicador === 0) {
        return 0
    } else {
        return multiplicador === 1 ? numero: numero + mulitplicar2(numero,multiplicador-1)
    }
}

console.log(mulitplicar2(0,1))
