
/* Se muestran más imágenes cuando se pulsa en el botón "Ver más" en la sección fotografías del pefil propio*/
$("#ver-mas")[0].addEventListener("click", verMasImagenes, false);

function verMasImagenes() {
    $("#ver-mas")[0].style.display = "none";
    $(".fa.fa-circle-o-notch.fa-spin")[0].style.display = "block";
    setTimeout(function () {
        $("#imagenes-hidden").css("display", "block");
        $(".fa.fa-circle-o-notch.fa-spin")[0].style.display = "none";
    }, 1000);
}