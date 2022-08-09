function addWord() {
    var campoTexto = document.getElementById("texto-principal");
    var btnAdicionarPalavra = document.getElementById("#add-word");

    btnAdicionarPalavra.addEventListener("click", function name(event) {
        event.preventDefault();

        //recebendo o que eu quero esconder
        var naoClicouEmAdicionar = document.querySelector(".esquerda");
        naoClicouEmAdicionar.classList.add("d-none");

        var clicouEmAdicionar = document.querySelector(".tela-inicial");
        clicouEmAdicionar.classList.remove("d-none");


        // document.querySelector(".tela-inicial").style.display = "none";
        // document.querySelector(".esquerda").style.display = "block";
    })
}