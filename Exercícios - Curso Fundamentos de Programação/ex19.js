const calcularMedia = array => array.reduce(soma) / array.length

const soma = (total,valor) => total + valor

console.log(calcularMedia([1,2,3,4,5]))
console.log(calcularMedia([0,10]))