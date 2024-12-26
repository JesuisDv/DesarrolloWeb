const calc = document.getElementById('calcular');

calc.addEventListener('click', function(){
    let num = document.getElementById('horas').value;
    let coste = document.getElementById('valor').value;
    let result = num * coste;
    document.getElementById('resultado').textContent = result;
    

    if(result > 130000){
        document.body.style.backgroundImage = "url(./img/subidaDolar.jpg)";
    } else{
        document.body.style.backgroundImage = "url(./img/caidaDolar.jpg)";
    }
});