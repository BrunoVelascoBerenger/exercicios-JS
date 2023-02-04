const verificaMaior = (numero1, numero2) => {
    if(numero1 > numero2 || numero1 === numero2) {
        return true
    } else {
        return false
    }
}

console.log(verificaMaior(2,2))