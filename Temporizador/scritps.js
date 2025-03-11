// Creacion de variables
let intervalo;
let tiempoRestante = 0;
let pausado = false;

// Activa boton Iniciar que inicia el temporizador
document.getElementById("iniciar").addEventListener("click", () =>{
    // se declaran las variables de horas, minutos y segundos
    const horas = parseInt(document.getElementById('horas').value) || 0;
    const minutos = parseInt(document.getElementById('minutos').value) || 0;
    const segundos = parseInt(document.getElementById('segundos').value) || 0;
    // se valida que los valores ingresados sean mayores a 0
    if (horas < 0 || minutos < 0 || segundos < 0) {
        alert("Ingrese un numero válido");
        return;
    }
    // se valida que se ingrese al menos 1 segundo
    if (horas === 0 && minutos === 0 && segundos === 0) {
        alert("Ingrese al menos 1 segundo");
        return;
    }
    // se valida que el temporizador no este pausado
    if(!pausado){
        tiempoRestante = horas * 3600 + minutos * 60 + segundos;
        actualizarPantalla(tiempoRestante);
    }
    // se actualiza la pantalla con los valores ingresados
    clearInterval(intervalo);
    
    // se crea un intervalo que se ejecuta cada segundo
    intervalo = setInterval(() => {
        if (tiempoRestante >= 0) {
            tiempoRestante --;
            actualizarPantalla(tiempoRestante);
        } else{
            alert("¡Se acabó el tiempo!");
            clearInterval(intervalo);
        }
    },1000);

    pausado = false;
});

// Activa boton Pausar que pausa el temporizador
document.getElementById("pausar").addEventListener("click", () => {
    if (!pausado) {
        clearInterval(intervalo);
        pausado = true;
        document.getElementById("pausar").textContent = "Reanudar";
    } else {
        intervalo = setInterval(() => {
            if (tiempoRestante >= 0) {
                tiempoRestante--;
                actualizarPantalla(tiempoRestante);
            } else {
                clearInterval(intervalo);
                alert("¡Se acabó el tiempo!");
            }
        }, 1000);
        pausado = false;
        document.getElementById("pausar").textContent = "Pausar";
    }
});

// Activa boton Reiniciar que reinicia el temporizador
document.getElementById('reiniciar').addEventListener('click', () => {
    clearInterval(intervalo);
    tiempoRestante = 0;
    actualizarPantalla(0);
    pausado = false;
    if (tiempoRestante > 0) {
        document.getElementById("pausar").textContent = "Pausar";
    }
});

// Funcion que actualiza la pantalla con los valores ingresados
function actualizarPantalla(segundosTotales) {
    let h = Math.floor(segundosTotales / 3600);
    let m = Math.floor((segundosTotales % 3600) / 60);
    let s = segundosTotales % 60;

    document.querySelector('.horas').textContent = h.toString().padStart(2, '0');
    document.querySelector('.minutos').textContent = m.toString().padStart(2, '0');
    document.querySelector('.segundos').textContent = s.toString().padStart(2, '0');
}