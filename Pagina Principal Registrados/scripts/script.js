$("#ver-mas")[0].addEventListener("click", verMasImagenes, false);

function verMasImagenes() {
    $("#ver-mas")[0].style.display = "none";
    $(".fa-spin")[0].style.display = "inline-block";
    setTimeout(function () {
        $("#imagenes-hidden").css("display", "block");
        $(".fa-spin")[0].style.display = "none";
    }, 1000);


}

var imagenes = document.getElementsByClassName("imagen");
for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener("mouseover", mostrarDatosImagen, false);
    imagenes[i].addEventListener("mouseout", ocultarDatosImagen, false);
}
function mostrarDatosImagen() {
    $(this.children[1]).stop().fadeTo(300, 1);
    $(this.children[2]).stop().fadeTo(300, 1);
    $(this.children[3]).stop().fadeTo(300, 1);
}

function ocultarDatosImagen() {
    $(this.children[1]).stop().fadeTo(300, 0);
    $(this.children[2]).stop().fadeTo(300, 0);
    $(this.children[3]).stop().fadeTo(300, 0);
}
