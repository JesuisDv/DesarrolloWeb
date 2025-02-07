const dato = localStorage.getItem("datos")||"";

if (dato){
    document.getElementById("container").innerHTML += dato;
}else{
    document.getElementById("container").innerHTML = `<p>No hay datos guardados</p>`;
}

document.getElementById("users").addEventListener("click", ()=> { // Redirecciona a la lista de datos usando window.location.href,                                                              
    window.location.href = "../index.html";                        // alternativo al <a href="...">...</a>
});
