
function seguir(){
    var ejecucion=0;
    if(document.getElementById("seguir").textContent=="Seguir") {
        var numSeg= document.getElementById("cuadroSeguidores").childNodes[3].firstChild.textContent;
        numSeg++;
        document.getElementById("cuadroSeguidores").childNodes[3].innerHTML = numSeg+"<br>seguidores";
        document.getElementById("seguir").className += " seguido";
        document.getElementById("seguir").innerHTML = "Siguiendo";
        ejecucion=1;
    }

    if(document.getElementById("seguir").textContent=="Siguiendo" && ejecucion==0) {
        var numSeg= document.getElementById("cuadroSeguidores").childNodes[3].firstChild.textContent;
        numSeg--;
        document.getElementById("cuadroSeguidores").childNodes[3].innerHTML = numSeg+"<br>seguidores";
        document.getElementById("seguir").innerHTML = "Seguir";
        document.getElementById("seguir").className = " boton";
    }
}