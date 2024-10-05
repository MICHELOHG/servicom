// Primer bloque de código
var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider");

function moveDivisor() {
    handle.style.left = slider.value + "%";
    divisor.style.width = slider.value + "%";
}

window.onload = function() {
    moveDivisor();
};

// Segundo bloque de código
var divisor1 = document.getElementById("divisor1"),
    handle1 = document.getElementById("handle1"),
    slider1 = document.getElementById("slider1");

function moveDivisor1() {
    handle1.style.left = slider1.value + "%";
    divisor1.style.width = slider1.value + "%";
}

window.onload = function() {

    moveDivisor1();
};












    Fancybox.bind("[data-fancybox='gallery']", {
        // Ajuste automático de tamaño para imágenes
        Image: {
            zoom: true, // Habilita el zoom de la imagen
            fit: "contain", // Ajusta la imagen dentro del contenedor manteniendo su proporción
        },
        Thumbs: {
            autoStart: false, // No muestra las miniaturas de forma predeterminada
        },
        Toolbar: {
            display: ['close'], // Opciones de la barra de herramientas
        },
    });
