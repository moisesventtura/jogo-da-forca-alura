function adicionarPalavra() {
    var btnAdicionarPalavra = document.querySelector(".adicionar-palavra");

    btnAdicionarPalavra.addEventListener("click", function name(event) {
        event.preventDefault();

        // recebendo o que eu quero esconder
        var telaInicial = document.querySelector(".tela-inicial");
        telaInicial.classList.add("d-none");

        var adicionarPalavra = document.querySelector(".adicionando-palavra");
        adicionarPalavra.classList.remove("d-none");
    })
}