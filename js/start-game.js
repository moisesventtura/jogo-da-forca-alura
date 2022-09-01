function startGame() {
    var btnIniciarJogo = document.querySelector(".start-game");

    btnIniciarJogo.addEventListener("click", event => {
        event.preventDefault();

        // recebendo o que eu quero esconder
        mostraTela(".jogo");

        start();
    })
}

let bancoDePalavras = ['FORCA', 'PALAVRA', 'JOGO', 'ALURA', 'ORACLE'];


function validaTecla(tecla) {
    const letraMaiuscula = /[A-Z]/.test(tecla) && tecla.length === 1;
    if (!letraMaiuscula) {
        return false;
    }
    const jaFoiInserida = letrasCorretas.includes(tecla) || letrasErradas.includes(tecla);
    return !jaFoiInserida;
}

function start() {
    const palavra = sortearPalavra(bancoDePalavras);

    // alert(`Tamanho da Palavra: ${palavra.length}`)

    resetGame();

    Array.from(palavra).forEach(letra => {
        const li = document.createElement("li");
        document.querySelector(".letras-certas").appendChild(li);
    })

    window.addEventListener('keyup', e => {
        if (validaTecla(e.key)) {
            const letra = e.key
            const ocorrencias = palpite(palavra, letra);

            if (ocorrencias === false) {
                const enforcado = trataErros(letra);

                // alert('Letra Errada PLAYBOY')
                const li = document.createElement("li");
                li.innerText = letra;
                document.querySelector(".letras-erradas").appendChild(li);

                //desenhando a Forca
                desenharForca();

                if (enforcado) {
                    alert('PERDEU PLAYBOY')

                }
            } else {
                const ganhou = trataAcerto(letra, palavra);
                const itens = document.querySelectorAll(".letras-certas li");
                ocorrencias.forEach(ocorrencia => {
                    itens[ocorrencia].innerText = letra;
                })
                if (ganhou) {
                    alert('GANHOU RAPÁ');
                } else {
                    // alert(`Acertou, mizeravi, indices: ${ocorrencias}`);

                }
            }
            console.log(letrasCorretas, letrasErradas);
        }
    })
}

function mostraTela(seletor) {
    const alvo = document.querySelector(seletor);

    const telas = document.querySelectorAll(".tela");

    telas.forEach(tela => {
        tela.classList.add("d-none");
    });

    alvo.classList.remove("d-none");
}
