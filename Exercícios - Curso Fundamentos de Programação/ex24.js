const contarCaracter = (caracterBuscado,frase) => {
    let contador = 0
    for(let i = 0; i < frase.length; i++) {
        if(frase.charAt(i) === caracterBuscado) {
            contador++
        }
    }   
    return contador
}

function contarCaracter2(caracterBuscado,frase) {
    return [...frase].filter(caracter => caracter === caracterBuscado).length
}

console.log(contarCaracter("r","A sorte favorece os audazes"))
console.log(contarCaracter2("r","A sorte favorece os audazes"))