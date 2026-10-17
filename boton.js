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


// Mostrar el año actual
document.querySelector("#year").textContent =
new Date().getFullYear();

// Copiar el email
const button = document.querySelector("#copy-email");
const message = document.querySelector("#message");
const email = "[Ismaelpiro38@gmail.com](mailto:Ismaelpiro38@gmail.com)";

button.addEventListener("click", async () => {
try {
await navigator.clipboard.writeText(email);
message.textContent = "Email copiado correctamente.";
} catch {
message.textContent =
"No se pudo copiar. Podés seleccionar el email manualmente.";
}
});
