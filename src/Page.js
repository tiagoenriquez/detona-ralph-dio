class Page {
    /** @type {HTMLHeadingElement} */ prazoElement;
    /** @type {HTMLHeadingElement} */ pontuacaoElement;
    /** @type {HTMLHeadingElement} */ vidasElement;
    /** @type {HTMLCollectionOf<HTMLDivElement>} */ quadradosElements;
    /** @type {Jogo} */ jogo;

    /**
     * 
     * @param {Jogo} jogo 
     */
    constructor(jogo) {
        this.prazoElement = document.getElementById('prazo');
        this.pontuacaoElement = document.getElementById('pontuacao');
        this.vidasElement = document.getElementById('vidas');
        this.quadradosElements = document.getElementsByClassName('quadrado');
        this.jogo = jogo;
        setInterval(() => this.atualizarPrazoElement(), segundo);
        setInterval(() => this.atualizarQuadradosElements(), segundo);
    }

    /**
     * 
     * @param {Jogo} jogo 
     * @param {number} status 
     */
    atualizarPontuacaoElement = (jogo, status) => {
        this.jogo = jogo;
        this.pontuacaoElement.textContent = this.jogo.jogador.pontuacao.toString();
        if (status === Status.ACERTO) {
            const audio = new Audio('./assets/audios/hit.m4a');
            audio.volume = 0.2;
            audio.play();
        }
    }

    /**
     * 
     * @param {Jogo} jogo 
     * @param {number} status 
     */
    atualizarVidasElement = (jogo, status) => {
        this.jogo = jogo;
        this.vidasElement.textContent = `x${this.jogo.jogador.vidas.toString()}`;
        if (status === Status.MORTE) {
            alert(`Game over! Suas chances acabaram. ${this.escreverMensagemDePontuacao()}`);
            location.reload();
        }
    }

    atualizarPrazoElement() {
        const prazo = this.jogo.jogador.prazo;
        this.prazoElement.textContent = prazo.toString();
        if (prazo === 0) {
            alert(`Parabéns! Você chegou até o fim. ${this.escreverMensagemDePontuacao()}`);
            location.reload();
        }
    }

    atualizarQuadradosElements() {
        for (let i = 0; i < this.quadradosElements.length; i++) {
            this.quadradosElements.item(i).classList.remove('inimigo');
        }
        this.quadradosElements.item(this.jogo.inimigo.quadrado - 1).classList.add('inimigo');
    }

    /**
     * @returns {string}
     */
    escreverMensagemDePontuacao() {
        return `Você acertou Ralhp ${this.jogo.jogador.pontuacao.toString()} vezes.`;
    }
}