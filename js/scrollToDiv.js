// Espera a que el documento HTML se haya cargado completamente
document.addEventListener('DOMContentLoaded', function () {
  // Obtiene el valor del hash de la URL actual
  var hash = window.location.hash;

  // Verifica si hay un hash en la URL
  if (hash) {
    // Busca el elemento correspondiente al hash en el documento
    var target = document.querySelector(hash);

    // Verifica si se encontró un elemento coincidente
    if (target) {
      // Desplaza suavemente la vista hacia el elemento
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});
