// ================================
// VENTANA WINDOWS 98
// ================================

const alertWindow = document.getElementById("alert98");


// Abrir ventana
function openAlert() {

    alertWindow.style.display = "flex";

}


// Cerrar ventana
function closeAlert() {

    alertWindow.style.display = "none";

}


// ================================
// CERRAR HACIENDO CLICK AFUERA
// ================================

alertWindow.addEventListener("click", function (event) {

    // Si el usuario hace click en el fondo
    // y no dentro de la ventana
    if (event.target === alertWindow) {

        closeAlert();

    }

});


// ================================
// CERRAR CON ESCAPE
// ================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeAlert();

    }

});

function openAlert() {
    // ...
}