const checarAnoBissexto = ano => (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))