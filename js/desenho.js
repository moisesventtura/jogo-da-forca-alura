function desenharForca() {
    const partesCorpo = document.querySelectorAll(".forca-parte");
    for (let i = 0; i < letrasErradas.length && i < 9; i++) {
        partesCorpo[i].style.display = "block";
    }
}