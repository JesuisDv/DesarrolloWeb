function calcular(){
    let pes= document.getElementById('peso').value;
    let alt = document.getElementById('altura').value;
    let result = pes * alt;
    document.getElementById('resultado').textContent = result;
}