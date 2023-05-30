// Obtener referencia al elemento del botón
var btn = document.getElementById("btn");

// Obtener referencia al elemento de la imagen
var imagen = document.getElementById("imagen");

// Obtener referencia al elemento de la cita
var quote = document.getElementsByClassName("quote")[0];

// Función para mostrar la imagen y ocultar el botón y la cita
function mostrarImagen() {
    imagen.style.display = "block";
    btn.style.display = "none";
    quote.style.display = "none";
}

// Agregar un evento de clic al botón
btn.addEventListener("click", mostrarImagen);

// Ejecutar la función al cargar la página
window.onload = mostrarImagen;
