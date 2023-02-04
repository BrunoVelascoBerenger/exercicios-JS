const somarNumeros = array => array.reduce(soma)

const soma = (total, valor) => total + valor

console.log(somarNumeros([10,10,10]))
console.log(somarNumeros([15,15,15,15]))