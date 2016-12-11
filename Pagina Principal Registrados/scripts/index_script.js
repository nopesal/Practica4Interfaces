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
    $(this.children[4]).stop().fadeTo(300, 1);
}

function ocultarDatosImagen() {
    $(this.children[1]).stop().fadeTo(300, 0);
    $(this.children[2]).stop().fadeTo(300, 0);
    $(this.children[3]).stop().fadeTo(300, 0);
    $(this.children[4]).stop().fadeTo(300, 0);
}

function crearlikeOnClickListener() {
    var corazonesInactivos = document.getElementsByClassName("fa-heart-o");
    for (var i = 0; i < corazonesInactivos.length; i++) {
        corazonesInactivos[i].addEventListener("click", darLike, false);
    }
    var corazonesActivos = document.getElementsByClassName("fa-heart");
    for (var i = 0; i < corazonesActivos.length; i++) {
        corazonesActivos[i].addEventListener("click", darLike, false);
    }

    var imgs = document.getElementsByTagName("img");
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", abrirPaginaImagen, false);
    }

    function darLike() {
        var corazon = $(this);
        var contadorDeLikes = $(this).next();
        var numeroDeLikes = parseInt(contadorDeLikes.html());
        if (corazon.hasClass("fa-heart-o")) {
            numeroDeLikes = numeroDeLikes + 1;
        } else if (corazon.hasClass("fa-heart")) {
            numeroDeLikes = numeroDeLikes - 1;
        }
        corazon.toggleClass('fa-heart-o fa-heart');
        contadorDeLikes.text(numeroDeLikes);
        actualizarValorStorage(corazon, "likes", numeroDeLikes);
    }
}

function crearAutorOnClickListener() {
    var autor = document.getElementsByTagName("small");
    for (var i = 0; i < autor.length; i++) {
        autor[i].addEventListener("click", irAPerfilAutor, false);
    }

    function irAPerfilAutor() {
        window.location.href = "../../Perfil Usuario Ajeno/profile.html";
    }

    var titulo = document.getElementsByClassName("titulo-foto");
    for (var i = 0; i < titulo.length; i++) {
        titulo[i].addEventListener("click", abrirPaginaImagen, false);
    }
}