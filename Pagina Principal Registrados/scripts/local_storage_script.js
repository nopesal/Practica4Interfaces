var listaImagenes;

function parsearDatosImagenesJSON() {
    $.getJSON("scripts/datos_imagenes.json", function (jsonParseado) {
        if (soportaLocalStorage()) {
            localStorage["listaImagenes"] = JSON.stringify(jsonParseado);
            return JSON.parse(localStorage["listaImagenes"]);
        } else {
            return jsonParseado;
        }
    });
}

function soportaLocalStorage() {
    return ('localStorage' in window) && window['localStorage'] !== null;
}

function cargarImagenes() {
    if (localStorage["listaImagenes"] == null) {
        listaImagenes = parsearDatosImagenesJSON();
    } else {
        listaImagenes = JSON.parse(localStorage["listaImagenes"]);
    }
    $(".imagen").each(function (i) {
        $(this).append('<img src="../images/' + listaImagenes[i].identificador + '.PNG" alt="' + listaImagenes[i].identificador + '">');
        $(this).append('<div class="gradient"></div>');
        $(this).append('<p class="unselectable">' + listaImagenes[i].titulo + '</p>');
        $(this).append('<div class="social"><i class="fa ' + listaImagenes[i].likeDado + '" aria-hidden="true"></i><span class="unselectable">' + listaImagenes[i].likes + '</span><i class="fa fa-comment" aria-hidden="true"></i><span class="unselectable">' + listaImagenes[i].comentarios + '</span></div>');
    });
    crearlikeOnClickListener();
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