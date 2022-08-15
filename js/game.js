let bancoDePalavras = ['FORCA', 'PALAVRA', 'JOGO'];
let qtdErro = 0;

//sorteia a palavra baseada no array de palavras
function sortearPalavra(palavras) {
    const index = Math.floor(Math.random() * palavras.length)

    return bancoDePalavras[index];
}


//checa um palpite
function palpite(palavra, letra) {
    //letra não existe na palavra
    if (palavra.indexOf(letra) === -1) {
        qtdErro++;
        return false;
    }

    let ocorrencias = [];
    let index = 0;
    //qtd de vezes que a letra está presente na palavra
    while (palavra.indexOf(letra, index) !== -1) {
        const ocorrencia = palavra.indexOf(letra, index);
        index = ocorrencia + 1;
        ocorrencias.push(ocorrencia)
    }

    return ocorrencias;
}
//checa se o usuario excedeu a quantidade de palpites
function checarEnforcado() {
    return qtdErro > 10;
}