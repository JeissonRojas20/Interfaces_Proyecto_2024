document.getElementById('dropdown-button').addEventListener('click', function () {
    var menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('hidden');
});

// Función para alternar el menú móvil
function toggleMenu() {
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}