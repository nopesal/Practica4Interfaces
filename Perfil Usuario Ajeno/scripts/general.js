

function seguir(){
    console.log(document.getElementById("seguir").textContent);
    var ejecucion=0;
    if(document.getElementById("seguir").textContent=="Seguir") {
        document.getElementById("cuadroSeguidores").childNodes[3].innerHTML = "225<br>seguidores";
        document.getElementById("seguir").className += " seguido";
        document.getElementById("seguir").innerHTML = "Siguiendo";
        ejecucion=1;
    }

    if(document.getElementById("seguir").textContent=="Siguiendo" && ejecucion==0) {
        document.getElementById("cuadroSeguidores").childNodes[3].innerHTML = "224<br>seguidores";
        document.getElementById("seguir").innerHTML = "Seguir";
        document.getElementById("seguir").className = " boton";
    }
}