// Obtén la referencia al elemento de imagen del carrusel
const carrouselImage = document.getElementById('carrousel-image');

// Arreglo de imágenes para el carrusel
const images = [
  'js/../img/avena_header.jpg',
  'js/../img/avena_img.jpg',
  'js/../img/avena_tazon.jpg'
];

// Variable para mantener el índice de la imagen actual
var currentIndex = 0;

// Función para cambiar la imagen del carrusel
function changeImage() {
  // Cambia la ruta de la imagen en el carrusel
  carrouselImage.src = images[currentIndex];

  // Incrementa el índice de la imagen actual
  currentIndex++;

  // Verifica si hemos alcanzado el final del arreglo de imágenes
  if (currentIndex >= images.length) {
    currentIndex = 0; // Reinicia el índice al principio
  }
}

// Iniciar el carrusel
setInterval(changeImage, 3000); // Cambiar la imagen cada 2 segundos
