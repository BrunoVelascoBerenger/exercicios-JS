const removerVogais = frase => {
    const vogais = ["a","A","e","E","i","I","o","O","u","U"]
    vogais.forEach(vogal => frase = frase.replace(vogal,''))
    return frase
}

const removerVogais2 = frase => frase.replace(/[aeiou]/ig, '')

console.log(removerVogais("Cod3r"))
console.log(removerVogais2("Cod3r"))