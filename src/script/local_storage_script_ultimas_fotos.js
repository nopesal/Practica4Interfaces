var listaImagenes;

function parsearDatosImagenesJSON() {
    if (soportaLocalStorage()) {
        localStorage["listaImagenes"] = JSON.stringify(myData);
    }
    return myData;
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
    for (var i = 0; i < imagenes.length; i++){
        $(imagenes[i]).append('<img src="images/' + listaImagenes[i].identificador + '.PNG" alt="' + listaImagenes[i].identificador + '">');
        $(imagenes[i]).append('<div class="gradient"></div>');
        $(imagenes[i]).append('<p class="unselectable titulo-foto">' + listaImagenes[i].titulo + '</p>');
        if (listaImagenes[i].identificador != "Otoño" && listaImagenes[i].identificador != "Puente2") {
            $(imagenes[i]).append('<small class="unselectable">@MaxSteel</small>');
        }
        $(imagenes[i]).append('<div class="social"><i class="fa ' + listaImagenes[i].likeDado + '" aria-hidden="true"></i><span class="unselectable">' + listaImagenes[i].likes + '</span><i class="fa fa-comment" aria-hidden="true"></i><span class="unselectable">' + listaImagenes[i].comentarios + '</span></div>');
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
    console.log("Funciona");
    var coleccionImagenes = $(".imagen");
    var imagenAModificar = $(this).closest(".imagen");
    var index = coleccionImagenes.index(imagenAModificar);
    window.location.href = "picture.html#" + listaImagenes[index].identificador;
}