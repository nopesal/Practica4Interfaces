$(document).ready(function() {
    $(".overlay").hide(); //al abrir la página está oculto

    $(".cancelbtn, .close").click(function() {
        $(".overlay").hide(); //al pulsar la cruz o el botón cancelar se oculta
    });

    $(".button-sign, .button-sign-big").click(function() {
        $(".overlay").show(); //se muestra al intentar iniciar sesión/registrarse
    });

    $(".button-sign-big").mouseenter(function () {
        $(".button-sign-big").css("background-color", "#ebebeb");
        $("#reg-big").css("color", "#464646");
    })

    $(".button-sign-big").mouseleave(function () {
        $(".button-sign-big").css("background-color", "#193441")
        $("#reg-big").css("color", "#EBEBEB");
    })
});