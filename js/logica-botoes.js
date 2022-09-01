var btnDesistir = document.querySelector("#quit");

btnDesistir.addEventListener("click", function () {

    location.reload();

});

function novoJogo() {
    var btnNovoJogo = document.querySelector("#new-game");

    btnNovoJogo.addEventListener("click", function () {

        document.querySelector(".letras-certas").innerHTML = "";
        document.querySelector(".letras-erradas").innerHTML = "";

        document.querySelectorAll(".forca-parte").forEach(parteForca => {
            parteForca.style.display = "none";
        });

        start();
    });

}

novoJogo();
