
/* Aumenta el número de seguidores del usuario al que se da a "Seguir"
*  y se cambia el estilo del botón para que el ususario sepa que le está siguiendo. Si vuelve a pulsar
*  el botón se deja de seguir al usuario*/
function seguir() {
    console.log(document.getElementById("seguir").textContent);
    var ejecucion = 0;
    if (document.getElementById("seguir").textContent == "Seguir") {
        var numSeg=document.getElementById("cuadroSeguidores").childNodes[3].firstChild.textContent;
        numSeg++;
        document.getElementById("cuadroSeguidores").childNodes[3].innerHTML = numSeg+"<br>seguidores";
        document.getElementById("seguir").className += " seguido";
        document.getElementById("seguir").innerHTML = "Siguiendo";
        ejecucion = 1;
    }

    if (document.getElementById("seguir").textContent == "Siguiendo" && ejecucion == 0) {
        var numSeg=document.getElementById("cuadroSeguidores").childNodes[3].firstChild.textContent;
        numSeg--;
        document.getElementById("cuadroSeguidores").childNodes[3].innerHTML = numSeg+"<br>seguidores";
        document.getElementById("seguir").innerHTML = "Seguir";
        document.getElementById("seguir").className = " boton";
    }
}


/* Hace que aparezca una transparencia con texto por encima de las imágenes de los perfiles al pasar el ratón
* por encima y desaparece cuando el ratón deja de estar por encima*/
var columnas =document.querySelectorAll('.columna');
for(var i=0;i<columnas.length;i++){
    columnas[i].addEventListener("mouseenter",activarTransparencia,false);
    columnas[i].addEventListener("mouseleave",desactivarTransparencia,false);
}

function activarTransparencia(){
    $(this.children[0].children[0]).stop().fadeTo(300, 0.5);
    $(this.children[0].children[1]).stop().fadeTo(300, 1);
    $(this.children[0].children[2]).stop().fadeTo(300, 1);
    $(this.children[0].children[3]).stop().fadeTo(300, 1);
}


function desactivarTransparencia(){
    $(this.children[0].children[0]).stop().fadeTo(300, 0);
    $(this.children[0].children[1]).stop().fadeTo(300, 0);
    $(this.children[0].children[2]).stop().fadeTo(300, 0);
    $(this.children[0].children[3]).stop().fadeTo(300, 0);
}

