var textarea = document.querySelector('textarea');
textarea.addEventListener('keyup', resizeTextarea);

function resizeTextarea() {
    this.style.height = '25px';
    this.style.height = this.scrollHeight - 20 + 'px';
}

var album = document.getElementsByClassName("album");
for (var i = 0; i < album.length; i++) {
    album[i].addEventListener("mouseover", mostrarNombreAlbum, false);
    album[i].addEventListener("mouseout", ocultarNombreAlbum, false);
}

var albumPeque = document.getElementsByClassName("album-pequeño");
for (var i = 0; i < albumPeque.length; i++) {
    albumPeque[i].addEventListener("mouseover", mostrarNombreAlbum, false);
    albumPeque[i].addEventListener("mouseout", ocultarNombreAlbum, false);
}

function mostrarNombreAlbum() {
    $(this.children[1]).stop().fadeTo(300, 0.5);
    $(this.children[2]).stop().fadeTo(300, 1);
}

function ocultarNombreAlbum() {
    $(this.children[1]).stop().fadeTo(300, 0);
    $(this.children[2]).stop().fadeTo(300, 0);
}

var botonComentar = document.getElementById("boton-comentar");
botonComentar.addEventListener("click", insertarComentario, false);

botonComentar = document.getElementsByClassName("fa-comment");
botonComentar[0].addEventListener("click", comentar, false);

function comentar() {
    $("#nuevo-comentario").focus();
}

function insertarComentario() {
    $(this).after('<div class="comentario"><img src="images/michael-user.jpg" alt=""><div style="width: 100%;"><div style="display: inline"><span class="comentario-usuario">@michael</span><span class="comentario-hora">Hace 1 minuto</span></div><p class="comentario-texto">' + textarea.value + '</p><div><span class="comentario-responder">Responder</span><span class="comentario-megusta">Me gusta</span></div></div></div>');
    textarea.value = "";
    var numeroComentarios = parseInt($("#social span")[1].innerHTML);
    $("#social span")[1].innerHTML = numeroComentarios + 1;
}

var listaImagenes;
if (localStorage["listaImagenes"] == null) {
    listaImagenes = parsearDatosImagenesJSON();
} else {
    listaImagenes = JSON.parse(localStorage["listaImagenes"]);
}

function cargarImagen() {
    var hash = window.location.hash.substr(1);
    if (hash == "") {
        $("#imagen").append('<img src="images/Flores.PNG" alt="Flores">');
    } else {
        var imagen = listaImagenes.find(function (imagen) {
            return imagen.identificador === hash;
        });
        $("#imagen").append('<img src="images/' + hash + '.PNG" alt="' + hash + '">');
        $("#texto-imagen h1")[0].innerHTML = imagen.titulo;
        $("#social").prepend('<i class="fa ' + imagen.likeDado + '" aria-hidden="true" title="Me gusta"></i>');
        $("#social span")[0].innerHTML = imagen.likes;
    }
    crearlikeOnClickListener();
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
        actualizarValorStorage("likes", numeroDeLikes);
    }
}

function actualizarValorStorage(atributo, valor) {
    if (soportaLocalStorage()) {
        var hash = window.location.hash.substr(1);
        var index;
        if (hash == "") {
            index = 11;
        } else {
            index = getIndexListaImagenes(hash);
        }
        switch (atributo) {
            case "likes" :
                listaImagenes[index].likes = valor;
                if (listaImagenes[index].likeDado == "fa-heart-o") {
                    listaImagenes[index].likeDado = "fa-heart";
                } else if (listaImagenes[index].likeDado == "fa-heart") {
                    listaImagenes[index].likeDado = "fa-heart-o";
                }
                localStorage["listaImagenes"] = JSON.stringify(listaImagenes);
                break;
        }
    }
}

function soportaLocalStorage() {
    return ('localStorage' in window) && window['localStorage'] !== null;
}

function getIndexListaImagenes(imagen) {
    for (var i = 0; i < listaImagenes.length; i++) {
        if (listaImagenes[i].identificador == imagen) return i;
    }
}