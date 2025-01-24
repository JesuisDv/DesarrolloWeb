Calcular.addEventListener("click", ()=>{
    let lado1 = document.getElementById('lado1').value;
    let lado2 = document.getElementById('lado2').value;
    let lado3 = document.getElementById('lado3').value;

    if (lado1 == lado2 && lado2 == lado3){
        document.getElementById("triangulo").textContent = "Equilátero";
    }
    else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        document.getElementById("triangulo").textContent = "Isósceles";
    }
    else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        document.getElementById("triangulo").textContent = "Escaleno";
    }
}
);

entero.addEventListener("click", ()=>{
    let numero = document.getElementById('numero').value;

    if(numero > 0){
        document.getElementById("resultado").textContent = "Número Positivo";
    }else if(numero < 0){
        document.getElementById("resultado").textContent = "Número Negativo";
    }else if(numero == 0){
        document.getElementById("resultado").textContent = "Número Neutro";
    }
});




