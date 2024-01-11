document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById("RevelarIcon");
    const nuevoDiv = document.getElementById("NuevoDiv");

    btn.addEventListener('click', () => {
        nuevoDiv.classList.toggle('hidden');
    });
});