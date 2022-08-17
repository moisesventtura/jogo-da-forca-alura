function startGame() {
    var btnIniciarJogo = document.querySelector(".start-game");

    btnIniciarJogo.addEventListener("click", function name(event) {
        event.preventDefault();

        // recebendo o que eu quero esconder
        var telaInicial = document.querySelector(".tela-inicial");
        telaInicial.classList.add("d-none");

        var iniciarJogo = document.querySelector(".jogo");
        iniciarJogo.classList.remove("d-none");

        start();
    })
}
startGame();



let bancoDePalavras = ['FORCA', 'PALAVRA', 'JOGO'];


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

    Array.from(palavra).forEach(function (letra) {
        const li = document.createElement("li");
        document.querySelector(".lista-letras-certas").appendChild(li);
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
                document.querySelector(".lista-letras-erradas").appendChild(li);

                if (enforcado) {
                    // alert('PERDEU PLAYBOY')
                }
            } else {
                const ganhou = trataAcerto(letra, palavra);
                const itens = document.querySelectorAll(".lista-letras-certas li");
                ocorrencias.forEach(function (ocorrencia) {
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