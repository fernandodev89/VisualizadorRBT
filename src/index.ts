function cambiarTexto(): void {
   const parrafo: HTMLElement | null = document.getElementById("miParrafo");
   if (parrafo) {
      parrafo.textContent = 'Texto Cambiado';
   }
       
}

// Añadir evento al botón
const boton = document.getElementById('miBoton') as HTMLButtonElement;
if (boton) {
    boton.addEventListener('click', cambiarTexto);
}