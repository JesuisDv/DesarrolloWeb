document.getElementById("send").addEventListener("click", ()=> {

    const nombre = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!nombre || !email) {
        alert("Por favor, complete todos los campos");
        return;
    }

    const DatosPrevios = localStorage.getItem("datos")||"";
    const Datos = `${DatosPrevios}<p>Nombre: ${nombre} Email: ${email}</p>`;
    localStorage.setItem("datos", Datos);
    alert("Datos guardados correctamente");
});

document.getElementById("go").addEventListener("click", ()=> { // Redirecciona a la lista de datos usando window.location.href,                                                              
    window.location.href = "./pages/list.html";                // alternativo al <a href="...">...</a>
});

document.getElementById("clear").addEventListener("click", ()=> {
    localStorage.clear();
    alert("Datos eliminados correctamente");
});