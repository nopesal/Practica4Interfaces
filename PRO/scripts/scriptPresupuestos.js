$("#botonPRO").click(function(){
  location.href="pro.html";
});

$(".presupuesto").click(function(){
    $(".presupuesto").css("display", "none");
    $(".presupuestoExpandido").css("display", "flex");
});



$(".divUsuario .usuario a").click(function(event){
  event.stopPropagation();
});

$(".divUsuario .imagenCircular").click(function(event){
  event.stopPropagation();
});
