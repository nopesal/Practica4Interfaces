/* Cuando el usuario pica en los botones correspondientes se muestra
 * y oculta el menu dropdown */
function myMenu() {
    document.getElementById("myMenu").classList.toggle("showMenu");
    document.getElementById("myNotifications").classList.remove('showNot');
    var delay = 400; //0.4 segundos

    /*
     * Si el menú está abierto se añade un retraso para sincronizar la desaparición de la fleche
     * con la desaparición del menú.
     */

    if (document.getElementById("menuNotificaciones").classList.contains('notificationsMenu')) {
        setTimeout(function () {
            document.getElementById("menuNotificaciones").classList.toggle('notificationsMenu');
        }, delay);
    }
    if (document.getElementById("perfil-nav").classList.contains('perfilNavMenu')) {
        setTimeout(function () {
            document.getElementById("perfil-nav").classList.toggle('perfilNavMenu');
        }, delay-100);
    } else {
        document.getElementById("perfil-nav").classList.toggle('perfilNavMenu');
    }
}
function myNotifications() {
    document.getElementById("myNotifications").classList.toggle("showNot");
    document.getElementById("myMenu").classList.remove('showMenu');

    var delay = 400; //0.4 segundos

    /*
     * Si el menú está abierto se añade un retraso para sincronizar la desaparición de la fleche
     * con la desaparición del menú.
     */

    if (document.getElementById("menuNotificaciones").classList.contains('notificationsMenu')) {
        setTimeout(function () {
            document.getElementById("menuNotificaciones").classList.toggle('notificationsMenu');
        }, delay);
    } else {
        document.getElementById("menuNotificaciones").classList.toggle('notificationsMenu');
    }
    if (document.getElementById("perfil-nav").classList.contains('perfilNavMenu')) {
        setTimeout(function () {
            document.getElementById("perfil-nav").classList.toggle('perfilNavMenu');
        }, delay-100);
    }
}

// Cierra el dropdown si se hace click fuera
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showMenu') || openDropdown.classList.contains('showNot')) {
                openDropdown.classList.remove('show');
                openDropdown.classList.remove('showMenu')
            }
        }
    }
}