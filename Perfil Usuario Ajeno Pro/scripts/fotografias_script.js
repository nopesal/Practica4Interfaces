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
                parrafo.innerHTML= "AMANECER";
                numero.innerHTML= "30";
             }
             if(this==transparencias[1]){
                parrafo.innerHTML= "EIFFEL B&W";
                numero.innerHTML= "15";
             }
             if(this==transparencias[2]){
                parrafo.innerHTML= "TRIGALES";
                numero.innerHTML= "25";
             }
             if(this==transparencias[3]){
                parrafo.innerHTML= "MONTAÑAS";
                numero.innerHTML= "32";
             }
             if(this==transparencias[4]){
                parrafo.innerHTML= "OTOÑO";
                numero.innerHTML= "14";
             }
             if(this==transparencias[5]){
                parrafo.innerHTML= "RECIÉN CASADOS";
                numero.innerHTML= "34";
             }
             if(this==transparencias[6]){
                parrafo.innerHTML= "CONCIERTO";
                numero.innerHTML= "8";
             }
             if(this==transparencias[7]){
                parrafo.innerHTML= "PERIQUITOS";
                numero.innerHTML= "14";
             }
             if(this==transparencias[8]){
                parrafo.innerHTML= "ROCAS EN LA COSTA";
                numero.innerHTML= "5";
             }
             if(this==transparencias[9]){
                parrafo.innerHTML= "THE CITY";
                numero.innerHTML= "36";
             }
             if(this==transparencias[10]){
                parrafo.innerHTML= "LEÓN";
                numero.innerHTML= "46";
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

