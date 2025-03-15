let saludo = "Hola mundo";
console.log(saludo.toUpperCase());

let respuesta = "HOLA TIERRA";
console.log(`respuesta ${respuesta}`)
console.log(respuesta.toLowerCase());

let texto = document.getElementById("entrada");

texto.addEventListener("keydown", ()=> {
    document.getElementById("salida").textContent = texto.value;
})





