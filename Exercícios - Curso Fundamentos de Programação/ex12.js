const removerPropriedade = (obj, nomePropriedade) => {
    delete obj[nomePropriedade]
    return obj
}

const obj = {id: 20, nome: "caneta", descricao: "Não preenchido"}

console.log(obj)

console.log(Object.is(removerPropriedade(obj, "descricao"), obj))

console.log(obj)