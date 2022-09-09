let bancoDePalavras = ['FORCA', 'PALAVRA', 'JOGO', 'ALURA', 'ORACLE'];

function handlePage() {
    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get('page')

    if (page === 'new-game') {
        // recebendo o que eu quero esconder
        mostraTela(".jogo");

        start();
    }
}

handlePage()

function startGame() {
    var btnIniciarJogo = document.querySelector(".start-game");

    btnIniciarJogo.addEventListener("click", event => {
        event.preventDefault();

        // recebendo o que eu quero esconder
        mostraTela(".jogo");

        start();
    })
}

function validaTecla(tecla) {
    const letraMaiuscula = /[A-Z]/.test(tecla) && tecla.length === 1;
    if (!letraMaiuscula) {
        alert("LIGUE O CAPSLOCK!")
        return false;
    }
    const jaFoiInserida = letrasCorretas.includes(tecla) || letrasErradas.includes(tecla);
    return !jaFoiInserida;
}

function start() {
    let mensagem = "";
    const palavraSecreta = sortearPalavra(bancoDePalavras);
    console.log(palavraSecreta);

    resetGame();

    Array.from(palavraSecreta).forEach(letra => {
        const li = document.createElement("li");
        document.querySelector(".letras-certas").appendChild(li);
    })

    window.addEventListener('keyup', e => {
        if (validaTecla(e.key)) {
            const letra = e.key
            const ocorrencias = palpite(palavraSecreta, letra);

            if (ocorrencias === false) {
                const enforcado = trataErros(letra);

                const li = document.createElement("li");
                li.innerText = letra;
                document.querySelector(".letras-erradas").appendChild(li);

                //desenhando a Forca
                desenharForca();

                if (enforcado) {
                    mostraMensagem();
                }
            } else {
                const ganhou = trataAcerto(letra, palavraSecreta);
                const itens = document.querySelectorAll(".letras-certas li");
                ocorrencias.forEach(ocorrencia => {
                    itens[ocorrencia].innerText = letra;
                })
                if (ganhou) {
                    mostraMensagem(ganhou);
                }
            }

            function mostraMensagem(status) {
                if (status) {
                    mensagem = "Você Venceu. Parabéns!";
                } else {
                    mensagem = "Você perdeu!";
                }
                document.querySelector("#mensagem").innerHTML = mensagem;
                document.querySelector(".popup-container").style.display = "flex";
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

startGame();