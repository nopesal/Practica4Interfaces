$("#botonPRO").click(function(){
  location.href="seccion_pro.html";
});

//Si se hace click en el div de la solicitud de presupuesto se despliega una versión extendida
$(".presupuesto").click(function(){
    $(".presupuesto").css("display", "none");
    $(".presupuestoExpandido").css("display", "flex");
});


/*
 stopPropagation para que en los elementos que se puede hacer click dentro de la solictud de presupuestos se pueda
 seguir haciendo
 */
$(".divUsuario .usuario a").click(function(event){
  event.stopPropagation();
});

$(".divUsuario .imagenCircular").click(function(event){
  event.stopPropagation();
});
