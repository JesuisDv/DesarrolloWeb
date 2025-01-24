let cantidadNumero = document.getElementById('num')
let sumar = document.getElementById('mas')
let restar = document.getElementById('menos')
let numero = 0

sumar.addEventListener('click', () => {
    numero += 1;
    if (numero < 0){
        numero = 0;
    }
    cantidadNumero.textContent = numero
})

restar.addEventListener('click', () => {
    numero -= 1
    if(numero < 0){
        numero = 0;
    }
    cantidadNumero.textContent = numero
})

document.getElementById('comprar').addEventListener('click', function(){
    var element = document.querySelector('.modal')
    element.style.display = 'flex'
})

document.getElementById('comprar').addEventListener('click', function(){
    document.querySelector('.pagina').style.filter = 'blur(5px)'
    document.querySelector('.modal').style.display = 'block'
})

document.getElementById('seguir').addEventListener('click', function(){
    var element = document.querySelector('.modal')
    element.style.display = 'none'
})

document.getElementById('seguir').addEventListener('click', function(){
    document.querySelector('.pagina').style.filter = 'blur(0px)'
})

document.getElementById('empezemos').addEventListener('click', function(){
    var element1 = document.querySelector('.register')
    element1.style.display = 'none'
})

document.getElementById('empezemos').addEventListener('click', function(){
    document.querySelector('.pagina').style.filter = 'blur(0px)'
})