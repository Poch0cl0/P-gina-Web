document.addEventListener('DOMContentLoaded', function() {
    const iconoModo = document.getElementById('iconoModo');
    const modoOscuroButton = document.getElementById('modoOscuro');
    const body = document.body;

    toggleModoOscuro();

    modoOscuroButton.addEventListener('click', function() {
      toggleModoOscuro();
    });

    function toggleModoOscuro() {
      body.classList.toggle('dark');

      if (body.classList.contains('dark')) {
        iconoModo.className = 'fas fa-sun fa-2x pr-4 text-orange-500';
      } else {
        iconoModo.className = 'fas fa-moon fa-2x pr-4 text-white';
      }
    }
  });