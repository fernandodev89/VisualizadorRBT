"use strict";
function cambiarTexto() {
    const parrafo = document.getElementById("miParrafo");
    if (parrafo) {
        parrafo.textContent = 'Texto Cambiado';
    }
}
// Añadir evento al botón
const boton = document.getElementById('miBoton');
if (boton) {
    boton.addEventListener('click', cambiarTexto);
}
