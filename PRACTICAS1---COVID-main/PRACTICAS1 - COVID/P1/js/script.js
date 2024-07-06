document.addEventListener("DOMContentLoaded", function() {
    const botonesVer = document.querySelectorAll(".ver-btn");
    const botonesOcultar = document.querySelectorAll(".ocultar-btn");

    botonesVer.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const porcentaje = btn.parentElement.querySelector(".porcentaje");
            porcentaje.style.display = "block";
        });
    });

    botonesOcultar.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const porcentaje = btn.parentElement.querySelector(".porcentaje");
            porcentaje.style.display = "none";
        });
    });
});
