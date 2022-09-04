//sorteia a palavra baseada no array de palavras
function sortearPalavra(palavras) {
    const index = Math.floor(Math.random() * palavras.length)

    return bancoDePalavras[index];
}



//checa um palpite
function palpite(palavraSecreta, letra) {
    //letra não existe na palavra
    if (palavraSecreta.indexOf(letra) === -1) {
        return false;
    }

    let ocorrencias = [];
    let index = 0;
    //qtd de vezes que a letra está presente na palavra
    while (palavraSecreta.indexOf(letra, index) !== -1) {
        const ocorrencia = palavraSecreta.indexOf(letra, index);
        index = ocorrencia + 1;
        ocorrencias.push(ocorrencia)
    }
    return ocorrencias;
}

//checa se o usuario excedeu a quantidade de palpites
function checarEnforcado() {
    return qtdErro > 9;
}


let qtdErro = 0;
const MAX_ERROS = 9;
let letrasErradas = [];

/**
 * 
 * @param {String} letraErrada
 * @returns true caso o seja enforcado e false caso não seja enforcado
 */

function trataErros(letraErrada) {
    qtdErro++;
    letrasErradas.push(letraErrada);
    if (qtdErro > MAX_ERROS) {
        return true;
    } else {
        return false;
    }
}


let letrasCorretas = [];

/**
 * 
 * @param {String} letraCorreta 
 * @param {String} palavra 
 */

function trataAcerto(letraCorreta, palavra) {
    letrasCorretas.push(letraCorreta)
    const letrasUnicasNaPalavra = new Set(Array.from(palavra));
    if (letrasUnicasNaPalavra.size === letrasCorretas.length) {
        return true;
        alert('GANHOU RAPÁ');
    } else {
        return false;
    }
}

function resetGame() {
    letrasCorretas = [];
    letrasErradas = [];
    qtdErro = 0;
}

