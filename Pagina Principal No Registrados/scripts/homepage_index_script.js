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

function validateAll() {
    var validReg = true;
    var elementoNombre = document.getElementById('cname');
    if (elementoNombre.value == "") {
        elementoNombre.style.backgroundColor = "#ff6666";
        validReg = false;
    }

    var elementoApellidos = document.getElementById('uname');
    if (elementoApellidos.value == "") {
        elementoApellidos.style.backgroundColor = "#ff6666";
        validReg = false;
    }
    var elementoEmail = document.getElementById('mail');
    if (elementoEmail.value == "" || mailMatch() == false) {
        elementoEmail.style.backgroundColor = "#ff6666";
        document.getElementById('cmail').style.backgroundColor = "#ff6666";
        validReg = false;
    }
    var elementoPassword = document.getElementById('psw');
    if (elementoPassword.value == "" || passMatch() == false) {
        elementoPassword.style.backgroundColor = "#ff6666";
        document.getElementById('cpsw').style.backgroundColor = "#ff6666";
        validReg = false;
    }
    if (validReg == true) {
        alert("Operación realizada con éxito");
    }
    return validReg;
}
function passMatch() {
    var password1 = document.getElementById('psw').value;
    var password2 = document.getElementById("cpsw");
    var passValid = true;
    if (password1 == "" && password2.value == "") {
        password2.style.backgroundColor = "transparent";
    } else if (password1 != password2.value) {
        password2.style.backgroundColor = "#ff6666";
        passValid = false;
    } else {
        password2.style.backgroundColor = "#6ce695";
    }
    return passValid;
}

function mailMatch() {
    var mail1 = document.getElementById("mail").value;
    var mail2 = document.getElementById("cmail");
    var mailValid = true;
    if (mail1 == "" && mail2.value == "") {
        mail2.style.backgroundColor = "transparent";
    } else if (mail1 != mail2.value) {
        mail2.style.backgroundColor = "#ff6666";
        mailValid = false;
    } else {
        mail2.style.backgroundColor = "#6ce695";
    }
    return mailValid;
}