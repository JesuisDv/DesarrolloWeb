document.getElementById("actualizar").addEventListener("click", () => {
    const datosNuevos = localStorage.getItem("datos");

    if (datosNuevos) {
                document.querySelector(".estudiantes").innerHTML = datosNuevos;
    } else {
        alert("No hay datos para actualizar");
    }
});

