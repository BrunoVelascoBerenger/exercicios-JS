const calcularSalario = (horasTrabalhadas, SalarioHora) => {
    return `Salário igual a ${(SalarioHora * horasTrabalhadas).toLocaleString("pt-BR",{style:'currency', currency:'BRL'})}`
}

console.log(calcularSalario(10,50))