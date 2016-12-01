var imagenesJSON;
$.getJSON("scripts/datos_imagenes.json", function (respuesta) {
    imagenesJSON = respuesta;
});

function soportaLocalStorage() {
    return ('localStorage' in window) && window['localStorage'] !== null;
}

function cargarImagenes() {
    $(".imagen").each(function (i) {
        $(this).append('<img src="../images/' + imagenesJSON[i].identificador + '.PNG" alt="' + imagenesJSON[i].identificador + '">');
        $(this).append('<div class="gradient"></div>');
        $(this).append('<p class="unselectable">' + imagenesJSON[i].titulo + '</p>');
        $(this).append('<div class="social"><i class="fa fa-heart-o" aria-hidden="true"></i><span class="unselectable">' + imagenesJSON[i].likes + '</span><i class="fa fa-comment" aria-hidden="true"></i><span class="unselectable">' + imagenesJSON[i].comentarios + '</span></div>');
    });
    crearlikeOnClickListener();
}
