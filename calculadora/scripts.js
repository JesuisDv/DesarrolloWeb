
const pantalla = document.getElementById("pantalla");

function escribir(input){
    pantalla.value += input;
}

function borrar(){
    pantalla.value = "";

}

function calculate(){
    try{
        pantalla.value = eval(pantalla.value);

    }
    catch(error){
        pantalla.value = "Error";
    }
}

function borrarUltimoDigito(){
    pantalla.value = pantalla.value.slice(0,-1);
}

function porcentaje() {
    try {
        const valorActual = eval(pantalla.value); 
        if (!isNaN(valorActual)) {
            pantalla.value = valorActual / 100; 
        } else {
            pantalla.value = "Error";
        }
    } catch (error) {
        pantalla.value = "Error"; 
    }
}