const simboloMais = numero => {
    let resultado = ''
    
    if(numero == 0) {
        return " "
    } else {
        for(let i = 0; i < numero; i++) {
            resultado += '+'
        }
    }
    return resultado
}


console.log(simboloMais(1))