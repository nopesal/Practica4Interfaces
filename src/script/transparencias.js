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