var listaImagenesInversa;

function parsearDatosImagenesJSON() {
    $.getJSON("scripts/datos_imagenes.json", function (jsonParseado) {
        if (soportaLocalStorage()) {
            localStorage["listaImagenesInversa"] = JSON.stringify(jsonParseado.reverse());
        }
        return jsonParseado.reverse();
    });
}

function soportaLocalStorage() {
    return ('localStorage' in window) && window['localStorage'] !== null;
}

function cargarImagenes() {
    if (localStorage["listaImagenesInversa"] == null) {
        listaImagenesInversa = parsearDatosImagenesJSON();
        location.reload();
    } else {
        listaImagenesInversa = JSON.parse(localStorage["listaImagenesInversa"]);
    }
    $($(".imagen")).each(function (i) {
        $(this).append('<img src="../images/' + listaImagenesInversa[i].identificador + '.PNG" alt="' + listaImagenesInversa[i].identificador + '">');
        $(this).append('<div class="gradient"></div>');
        $(this).append('<p class="unselectable">' + listaImagenesInversa[i].titulo + '</p>');
        $(this).append('<div class="social"><i class="fa ' + listaImagenesInversa[i].likeDado + '" aria-hidden="true"></i><span class="unselectable">' + listaImagenesInversa[i].likes + '</span><i class="fa fa-comment" aria-hidden="true"></i><span class="unselectable">' + listaImagenesInversa[i].comentarios + '</span></div>');
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
                listaImagenesInversa[index].likes = valor;
                if (listaImagenesInversa[index].likeDado == "fa-heart-o") {
                    listaImagenesInversa[index].likeDado = "fa-heart";
                } else if (listaImagenesInversa[index].likeDado == "fa-heart") {
                    listaImagenesInversa[index].likeDado = "fa-heart-o";
                }
                localStorage["listaImagenesInversa"] = JSON.stringify(listaImagenesInversa);
                break;
        }
    }
}

function abrirPaginaImagen() {
    var coleccionImagenes = $(".imagen");
    var imagenAModificar = $(this).closest(".imagen");
    var index = coleccionImagenes.index(imagenAModificar);
    window.location.href = "/PracticaInterfaces/Picture/picture.html#" + listaImagenesInversa[index].identificador;
}