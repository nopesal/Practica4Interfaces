var listaImagenes;

function parsearDatosImagenesJSON() {
    $.getJSON("scripts/datos_imagenes.json", function (jsonParseado) {
        if (soportaLocalStorage()) {
            localStorage["listaImagenes"] = JSON.stringify(jsonParseado);
        }
        return jsonParseado;
    });
}

function soportaLocalStorage() {
    return ('localStorage' in window) && window['localStorage'] !== null;
}

function cargarImagenes() {
    if (localStorage["listaImagenes"] == null) {
        listaImagenes = parsearDatosImagenesJSON();
        location.reload();
    } else {
        listaImagenes = JSON.parse(localStorage["listaImagenes"]);
    }
    var imagenes = $(".imagen");
    var index = imagenes.length - 1;
    for (var i = 0; i < imagenes.length; i++){
        $(imagenes[i]).append('<img src="../images/' + listaImagenes[index].identificador + '.PNG" alt="' + listaImagenes[index].identificador + '">');
        $(imagenes[i]).append('<div class="gradient"></div>');
        $(imagenes[i]).append('<p class="unselectable titulo-foto">' + listaImagenes[index].titulo + '</p>');
        if (listaImagenes[index].identificador != "Otoño" && listaImagenes[index].identificador != "Puente2") {
            $(imagenes[i]).append('<small class="unselectable">@MaxSteel</small>');
        }
        $(imagenes[i]).append('<div class="social"><i class="fa ' + listaImagenes[index].likeDado + '" aria-hidden="true"></i><span class="unselectable">' + listaImagenes[index].likes + '</span><i class="fa fa-comment" aria-hidden="true"></i><span class="unselectable">' + listaImagenes[index].comentarios + '</span></div>');
        index--;
    }
    crearlikeOnClickListener();
    crearAutorOnClickListener();
}

function actualizarValorStorage(elemento, atributo, valor) {
    if (soportaLocalStorage()) {
        var coleccionImagenes = $(".imagen");
        var imagenAModificar = $(elemento).closest(".imagen");
        var index = coleccionImagenes.index(imagenAModificar);
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

function abrirPaginaImagen() {
    var coleccionImagenes = $(".imagen");
    var imagenAModificar = $(this).closest(".imagen");
    var index = coleccionImagenes.index(imagenAModificar);
    window.location.href = "/Practica4Interfaces/Picture/picture.html#" + listaImagenes[listaImagenes.length - 1 - index].identificador;
}