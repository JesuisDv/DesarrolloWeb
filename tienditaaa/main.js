let allProducts = document.getElementById('producto');
let carro = document.getElementById('carrito');
let conteo = 0;

function agregarCosas(nombre, descripcion, precio, imagen) {
  // Busca si el producto ya está en el carrito
  let productoExistente = document.getElementById(nombre);

  if (productoExistente) {
    // Si el producto ya está agregado, incrementa el contador
    let contador = productoExistente.querySelector('.cantidad');
    let cantidad = parseInt(contador.textContent) + 1;
    contador.textContent = cantidad;
  } else {
    // Si el producto no está agregado, agrégalo al carrito
    allProducts.innerHTML += `
      <div class="productico" id="${nombre}">
        <img alt="" src="${imagen}">
        <h4>${nombre}</h4>
        <h3>${descripcion}</h3>
        <p>${precio}</p>
        <p class="cantidad">1</p>
        <button onclick="mostrar()">ver producto</button>
      </div>
    `;
  }
  conteo++;
  carro.textContent = conteo;
}



function mostrar() {
  document.getElementById('modal-content').style.display = 'block';
  document.getElementById('modal').style.display = 'block';
}