$("#ver-mas")[0].addEventListener("click", verMasImagenes, false);

function verMasImagenes() {
    $("#ver-mas")[0].style.display = "none";
    $(".fa-spin")[0].style.display = "block";
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

function crearlikeOnClickListener() {
    var corazones = document.getElementsByClassName("fa-heart-o");
    for (var i = 0; i < corazones.length; i++) {
        corazones[i].addEventListener("click", darLike, false);
    }

    function darLike() {
        var corazon = $(this);
        var contadorDeLikes = $(this).next();
        if (corazon.hasClass("fa-heart-o")) {
            corazon.toggleClass('fa-heart-o fa-heart');
            var numeroDeLikes = contadorDeLikes.html();
            numeroDeLikes = parseInt(numeroDeLikes);
            numeroDeLikes = numeroDeLikes + 1
            contadorDeLikes.text(numeroDeLikes);
        } else if (corazon.hasClass("fa-heart")) {
            corazon.toggleClass('fa-heart-o fa-heart');
            var numeroDeLikes = contadorDeLikes.html();
            numeroDeLikes = parseInt(numeroDeLikes);
            numeroDeLikes = numeroDeLikes - 1;
            contadorDeLikes.text(numeroDeLikes);
        }
    }
}
