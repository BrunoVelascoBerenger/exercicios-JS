class Avo {
    constructor(sobronome) {
        this.sobronome = sobronome
    }
}

class Pai extends Avo {
    constructor(sobronome, profissao = 'Professor') {
        super(sobronome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho()
console.log(filho)