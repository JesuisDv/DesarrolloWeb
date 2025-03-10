function tablaMultiplicar() {
    let numero = document.getElementById("numero").value;
    let cuerpo = document.getElementById("cuerpo");

    // Limpiar solo el cuerpo de la tabla, no los encabezados
    cuerpo.innerHTML = "";

    if (numero === "" || isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    numero = parseInt(numero);

    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        cuerpo.innerHTML += `<tr><td>${numero}</td><td>x</td><td>${i}</td><td>=</td><td>${resultado}</td></tr>`;
    }
}
