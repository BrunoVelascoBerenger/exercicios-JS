const funcaoDaSorte = numero => {
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)
    
    return numero === numeroAleatorio ? 
    `Parabéns! O número sorteado foi ${numeroAleatorio}` : 
    `Que pena! O número sorteado foi ${numeroAleatorio}`

}

console.log(funcaoDaSorte(1))