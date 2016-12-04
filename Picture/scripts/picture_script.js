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
botonComentar.addEventListener("click", comentar, false);

function comentar() {
    $(this).after('<div class="comentario"><img src="images/user-icon.png" alt=""><div style="width: 100%;"><div style="display: flex"><span class="comentario-usuario">@usuario</span><span class="comentario-hora">Hace 1 minuto</span></div><p class="comentario-texto">' + textarea.value + '</p><span class="comentario-responder">Responder</span></div></div>');
    textarea.value = "";
}