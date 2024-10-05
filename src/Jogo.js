class Jogo {
    /** @type {Jogador} */ jogador;
    /** @type {Inimigo} */ inimigo;

    /**
     * 
     * @param {Jogador} jogador 
     * @param {Inimigo} inimigo 
     */
    constructor(jogador, inimigo) {
        this.jogador = jogador;
        this.inimigo = inimigo;
        this.comecar();
    }

    /**
     * 
     * @param {number} alvo 
     * @returns {Status}
     */
    submeterTiro = (alvo) => {
        if (alvo === this.inimigo.quadrado) {
            this.jogador.acertar();
            return Status.ACERTO;
        } 
        if (this.jogador.vidas > 0) {
            this.jogador.errar();
            return Status.ERRO;
        }
        return Status.MORTE;
    }

    comecar() {
        this.jogador.perderTempo();
        this.inimigo.moverSe();
    }
}