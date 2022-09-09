function desistir() {

    var btnDesistir = document.getElementById("quit");

    btnDesistir.addEventListener("click", element => {

        window.location.reload();
    });
}

function cancelar() {
    var btnCancelar = document.querySelector(".cancelar");

    btnCancelar.addEventListener("click", element => {
        window.location.reload();
    });
}

function novoJogo() {
    var btnNovoJogo = document.querySelector("#new-game");

    btnNovoJogo.addEventListener("click", element => {

        var btnNovoJogo = document.querySelector("#new-game");

        btnNovoJogo.addEventListener("click", e => {
            location.replace("/?page=new-game")
        });
    });

}

novoJogo();
desistir();
cancelar();
