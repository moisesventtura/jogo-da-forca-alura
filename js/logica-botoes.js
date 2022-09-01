function desistir() {

    var btnDesistir = document.getElementById("quit");

    btnDesistir.addEventListener("click", element => {

        mostraTela(".tela-inicial");
    });
}

function cancelar() {
    var btnCancelar = document.querySelector(".cancelar");

    btnCancelar.addEventListener("click", element => {
        console.log("fui clicado")

        mostraTela(".tela-inicial");
    });
}

function novoJogo() {
    var btnNovoJogo = document.querySelector("#new-game");

    btnNovoJogo.addEventListener("click", element => {

        document.querySelector(".letras-certas").innerHTML = "";
        document.querySelector(".letras-erradas").innerHTML = "";

        document.querySelectorAll(".forca-parte").forEach(parteForca => {
            parteForca.style.display = "none";
        });


        start();
    });

}

novoJogo();
desistir();
cancelar();
