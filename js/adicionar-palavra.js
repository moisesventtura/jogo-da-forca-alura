function adicionarPalavra() {
    const btnAdicionarPalavra = document.querySelector(".adicionar-palavra");

    btnAdicionarPalavra.addEventListener("click", event => {
        event.preventDefault();

        // recebendo o que eu quero esconder
        mostraTela(".tela-adicionar-palavra");
        salvarPalavra();
    })
}

function salvarPalavra() {
    const btnSalvarPalavra = document.querySelector(".salvar-palavra");

    btnSalvarPalavra.addEventListener("click", event => {
        event.preventDefault();
        const novaPalavra = document.getElementById("palavra").value;

        if (novaPalavra != "") {
            bancoDePalavras.push(novaPalavra.toUpperCase());
            //POP UP DE AVISO

            mostraTela(".jogo");

            start();

        } else {
            //POP UP DE AVISO
        }
    })
}