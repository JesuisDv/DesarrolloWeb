const gente = [];

document.getElementById('enviar').addEventListener('click', () => {
    
    let nombre = document.getElementById('name').value;

    if(nombre){
        gente.push(nombre);
        document.getElementById('name').value = '';

        document.getElementById('list').innerHTML = '';
        
        for(let i = 0; i < gente.length; i++){
            document.getElementById('list').innerHTML += `<li>Nombre:${gente[i]}</li>`;
        }
    }
    
    
});