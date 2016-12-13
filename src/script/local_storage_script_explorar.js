var listaImagenes;

/**
 * Guarda en el almacenamiento local del navegador la informacion de las imágenes a mostrar.
 * @returns {*[]}
 */
function parsearDatosImagenesJSON() {
        if (soportaLocalStorage()) {
            localStorage["listaImagenes"] = JSON.stringify(myData);
        }
        return myData;
}

/**
 * Funcion que comprueba si el navegador en el que se ejecuta la página está disponible el almacenamiento
 * local.
 * @returns {boolean}
 */
function soportaLocalStorage() {
    return ('localStorage' in window) && window['localStorage'] !== null;
}

/**
 * Se encarga de recoger la información de las imágenes y las coloca en el diseño de la página principal.
 * Además de colocar las imágenes, coloca la informacion de cada una que se mostrará, con los valores de
 * los me gusta actualizados. Posteriormente se crean los escuchadores de eventos de los elementos creados.
 */
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
        $(imagenes[i]).append('<img src="images/' + listaImagenes[index].identificador + '.PNG" alt="' + listaImagenes[index].identificador + '">');
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

/**
 * Cambia un atributo de la informacion de las imagenes guardado en almacenamiento local del navegador
 * y actualiza su valor con el valor pasado por parámetros.
 * @param elemento Elemento que ha provocado el cambio en el almacenamiento
 * @param atributo Atributo a cambiar en el almacenamiento
 * @param valor
 */
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

/**
 * Función que se encarga de lanzar la página del visor de la imagen correspondiente a la imagen sobre
 * la que se ha pulsado.
 */
function abrirPaginaImagen() {
    var coleccionImagenes = $(".imagen");
    var imagenAModificar = $(this).closest(".imagen");
    var index = coleccionImagenes.index(imagenAModificar);
    window.location.href = "picture.html#" + listaImagenes[listaImagenes.length - 1 - index].identificador;
}