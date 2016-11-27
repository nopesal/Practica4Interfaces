$("#ver-mas")[0].addEventListener("click", verMasImagenes, false);

function verMasImagenes() {
    $("#imagenes-hidden").css("display", "block");
}

var imagenes = document.getElementsByClassName("imagen");
for (var i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener("mouseover", mostrarDatosImagen, false);
    imagenes[i].addEventListener("mouseout", ocultarDatosImagen, false);
}
function mostrarDatosImagen() {
    this.children[1].style.display = "block";
}

function ocultarDatosImagen() {
    this.children[1].style.display = "none";
}
