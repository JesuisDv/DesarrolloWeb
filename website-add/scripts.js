document.getElementById("agregar").addEventListener("click", () => {
    const curso = document.getElementById("curso").value.trim();
    const email = document.getElementById("email").value.trim();
    const nam = document.getElementById("nam").value.trim();

    if (!nam || !email || !curso) {
        alert("Por favor llene todos los campos");
        return;
    }

    // Recuperar datos previos de localStorage
    const DatosPrevios = localStorage.getItem("datos") || "";

    // Crear la nueva entrada de estudiante
    const Datos = `${DatosPrevios}
        <h2>Student</h2>
        <label><strong>Nombre:</strong> ${nam}</label>
        <label><strong>Email:</strong> ${email}</label>
        <label><strong>Curso:</strong> ${curso}</label>`;

    // Guardar en localStorage
    localStorage.setItem("datos", Datos);
    alert("Datos guardados correctamente");

    // Limpiar el formulario
    document.getElementById("formulario").reset();
});