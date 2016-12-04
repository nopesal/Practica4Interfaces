        var transparencias =document.querySelectorAll('.transparencia');
        for(var i=0;i<transparencias.length;i++){
            transparencias[i].addEventListener("mouseenter",activarTransparencia,false);
            transparencias[i].addEventListener("mouseleave",desactivarTransparencia,false);
        }

        function activarTransparencia(){
             for(var i=0;i<transparencias.length;i++){
                if(this==transparencias[i]){
                    this.className+=" transparencia" +i ;
                    var parrafo = document.createElement("P");
                    transparencias[i].appendChild(parrafo);
                    parrafo.className = "nombreImagen";
                    var icono = document.createElement("I");
                    transparencias[i].appendChild(icono);
                    var numero = document.createElement("P");
                    transparencias[i].appendChild(numero);
                    numero.className = "numero";
                    icono.className= "fa fa-heart fa-2x";
                    icono.className+= " icono";
                }
             }

             if(this==transparencias[0]){
                parrafo.innerHTML= "PAISAJES";
                numero.innerHTML= "80";
             }
             if(this==transparencias[1]){
                parrafo.innerHTML= "EVENTOS";
                numero.innerHTML= "24";
             }
             if(this==transparencias[2]){
                parrafo.innerHTML= "ANIMALES";
                numero.innerHTML= "33";
             }
             if(this==transparencias[3]){
                parrafo.innerHTML= "BLACK AND WHITE";
                numero.innerHTML= "56";
             }
             if(this==transparencias[4]){
                parrafo.innerHTML= "OTROS";
                numero.innerHTML= "5";
             }
        }

        function desactivarTransparencia(i){
             for(var i=0;i<transparencias.length;i++){
                if(this==transparencias[i]){
                    transparencias[i].className="";
                    transparencias[i].className="transparencia";
                    transparencias[i].removeChild(transparencias[i].firstChild);
                    transparencias[i].removeChild(transparencias[i].firstChild);
                    transparencias[i].removeChild(transparencias[i].firstChild);
                }
             }
        }



