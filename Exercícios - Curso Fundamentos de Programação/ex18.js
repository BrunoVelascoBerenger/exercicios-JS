const despesasTotais = function(itens) {
    return itens.map(soPreco).reduce(soma)
}

const soPreco = item => item.preco
const soma = (total,valor) => total + valor

console.log(despesasTotais([
    {nome: "Jornal Online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]))