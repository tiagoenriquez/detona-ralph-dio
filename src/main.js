const jogo = new Jogo(new Jogador(), new Inimigo());
const page = new Page(jogo);

/**
 * 
 * @param {Event} event 
 */
function submeterTiro(event) {
    const alvo = event.target.id;
    const status = jogo.submeterTiro(Number(alvo));
    page.atualizarPontuacaoElement(jogo, status);
    page.atualizarVidasElement(jogo, status);
}