class Inimigo {
    /** @type {number} */ quadrado;

    constructor() {
        setInterval(() => this.moverSe(), segundo);
    }

    moverSe() {
        this.quadrado = Math.floor(Math.random() * nQuadrados + 1);
    }
}