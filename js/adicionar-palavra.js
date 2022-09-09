function adicionarPalavra() {
    const btnAdicionarPalavra = document.querySelector(".adicionar-palavra");

    btnAdicionarPalavra.addEventListener("click", event => {
        event.preventDefault();

        // recebendo o que eu quero esconder
        mostraTela(".tela-adicionar-palavra");
        salvarPalavra();
    })
}

function isLetra(codigo) {
    return codigo >= 65 && codigo <= 90;
}

function salvarPalavra() {
    const btnSalvarPalavra = document.querySelector(".salvar-palavra");

    btnSalvarPalavra.addEventListener("click", event => {
        event.preventDefault();
        const novaPalavra = document.getElementById("palavra").value;

        const codigo = event.keyCode;

        if (novaPalavra != "" && isLetra(codigo)) {
            bancoDePalavras.push(novaPalavra.toUpperCase());
            alert("Palavra adicionada!")

            //Limpa o TextArea
            document.getElementById("palavra").value = "";

            mostraTela(".jogo");
            start();

        } else {
            alert("Digite uma palavra!")
        }
    })
}

adicionarPalavra();