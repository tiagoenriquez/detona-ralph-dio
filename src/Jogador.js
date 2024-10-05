class Jogador {
    /** @type {number} */ prazo;
    /** @type {number} */ pontuacao;
    /** @type {number} */ vidas;
    /** @type {number} */ errosInocuos;
    /** @type {boolean} */ vivo;

    constructor() {
        this.prazo = 60;
        this.pontuacao = 0;
        this.vidas = 3;
        this.alvo = 0;
        this.errosInocuos = 0;
        this.vivo = true;
        setInterval(() => this.perderTempo(), segundo);
    }

    acertar = () => {
        this.pontuacao++;
    }

    errar = () => {
        if (this.errosInocuos < 10) {
            this.errosInocuos++;
        } else {
            this.vidas--;
            if (this.vidas > 0) {
                this.errosInocuos = 0;
            } else {
                this.vivo = false;
            }
        }
    }

    perderTempo() {
        if (this.prazo > 0) {
            this.prazo--;
        }
    }
}