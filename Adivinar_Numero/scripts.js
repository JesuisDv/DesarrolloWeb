let puntos = 0;

document.getElementById("validar").addEventListener("click", () => {
    let numero = document.getElementById("numero").value;
    let aleatorio = Math.floor(Math.random() * 10) + 1;
    
    if (numero > 10){
        alert('El numero debe estar entre 1 y 10');
        document.getElementById('puntos').textContent = 'Puntaje: '+puntos;
        document.getElementById('resultado').textContent = '...';
        document.getElementById('resultado').style.color = 'white';
        document.getElementById("numero").value = "";

    }

    if (numero == aleatorio) {
        document.getElementById('resultado').textContent = "Correcto";
        document.getElementById('resultado').style.color = "#1eff00";
        puntos ++;

    }else {
        document.getElementById('resultado').textContent = 'Incorrecto, el número era ' + aleatorio;
        document.getElementById('resultado').style.color = "red";
    }

    document.getElementById('puntos').textContent = "Puntaje: "+puntos;
    document.getElementById("numero").value = "";

});


document.getElementById('reiniciar').addEventListener('click', () => {
    
    puntos = 0;
    document.getElementById('puntos').textContent = 'Puntaje: '+puntos;
    document.getElementById('resultado').textContent = '...';
    document.getElementById('resultado').style.color = 'white';
    document.getElementById("numero").value = "";
});