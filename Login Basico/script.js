document.getElementById('formulario').onsubmit=function(event){
const checkbox = document.getElementById('terminos');

if(!checkbox.checked){
    alert('Debes aceptar los Terminos y Condiciones para continuar');
    event.preventDefault();
}else{
    alert('Formulario Enviado');
}

}

const modo =document.getElementById('modo');
const body =document.body;

modo.addEventListener('click', () =>{
    
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')){
        localStorage.setItem('theme','dark');
    }else{
        localStorage.setItem('theme', 'light')
    }
});

const savedTheme = localStorage.getItem('theme');
if(savedTheme == 'dark'){
    body.classList.add('dark-mode');
}



