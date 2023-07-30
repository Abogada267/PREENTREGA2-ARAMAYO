// Estructura de datos para almacenar los productos en el carrito
const carrito = [];

// Función para actualizar la lista de productos en el carrito
function actualizarListaProductos() {
  const carritoContainer = document.querySelector('.container-cart-products');
  carritoContainer.innerHTML = ''; // Limpiar el contenido anterior

  if (carrito.length === 0) {
    // Mostrar mensaje de carrito vacío si no hay productos en el carrito
    const cartEmptyMessage = document.createElement('p');
    cartEmptyMessage.textContent = 'El carrito está vacío';
    carritoContainer.appendChild(cartEmptyMessage);
  } else {
    // Crear elementos para cada producto en el carrito y agregarlos al contenedor
    carrito.forEach((producto) => {
      const cartProduct = document.createElement('div');
      cartProduct.classList.add('cart-product');

      const infoCartProduct = document.createElement('div');
      infoCartProduct.classList.add('info-cart-product');

      const cantidadProducto = document.createElement('span');
      cantidadProducto.classList.add('cantidad-producto-carrito');
      cantidadProducto.textContent = producto.cantidad;

      const tituloProducto = document.createElement('p');
      tituloProducto.classList.add('titulo-producto-carrito');
      tituloProducto.textContent = producto.nombre;

      const precioProducto = document.createElement('span');
      precioProducto.classList.add('precio-producto-carrito');
      precioProducto.textContent = `$${producto.precio}`;

      infoCartProduct.appendChild(cantidadProducto);
      infoCartProduct.appendChild(tituloProducto);
      infoCartProduct.appendChild(precioProducto);

      const iconoCerrar = document.createElement('svg');
      iconoCerrar.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      iconoCerrar.setAttribute('fill', 'none');
      iconoCerrar.setAttribute('viewBox', '0 0 24 24');
      iconoCerrar.setAttribute('stroke-width', '1.5');
      iconoCerrar.setAttribute('stroke', 'currentColor');
      iconoCerrar.classList.add('icon-close');
      iconoCerrar.addEventListener('click', () => {
        eliminarProductoDelCarrito(producto.id);
      });

      const pathCerrar = document.createElement('path');
      pathCerrar.setAttribute('stroke-linecap', 'round');
      pathCerrar.setAttribute('stroke-linejoin', 'round');
      pathCerrar.setAttribute('d', 'M6 18L18 6M6 6l12 12');

      iconoCerrar.appendChild(pathCerrar);

      cartProduct.appendChild(infoCartProduct);
      cartProduct.appendChild(iconoCerrar);
      carritoContainer.appendChild(cartProduct);
    });
  }
}

// Función para actualizar el contador de productos
function actualizarContadorProductos() {
  const contadorElemento = document.getElementById('contador-productos');
  contadorElemento.textContent = carrito.reduce((total, producto) => total + producto.cantidad, 0);
}

// Función para agregar un producto al carrito
function agregarProductoAlCarrito(id, nombreProducto, precioProducto) {
  const productoExistente = carrito.find((producto) => producto.id === id);

  if (productoExistente) {
    productoExistente.cantidad++;
  } else {
    carrito.push({
      id: id,
      nombre: nombreProducto,
      precio: precioProducto,
      cantidad: 1,
    });
  }

  actualizarListaProductos();
  actualizarContadorProductos();
  actualizarTotalAPagar();
}

// Función para eliminar un producto del carrito
function eliminarProductoDelCarrito(id) {
  const productoIndex = carrito.findIndex((producto) => producto.id === id);

  if (productoIndex !== -1) {
    const producto = carrito[productoIndex];

    if (producto.cantidad > 1) {
      producto.cantidad--;
    } else {
      carrito.splice(productoIndex, 1);
    }

    actualizarListaProductos();
    actualizarContadorProductos();
    actualizarTotalAPagar();
  }
}

// Función para calcular el total a pagar
function calcularTotalAPagar() {
  return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
}

// Función para actualizar el total a pagar en la interfaz de usuario
function actualizarTotalAPagar() {
  const totalPagarElemento = document.querySelector('.total-pagar');
  totalPagarElemento.textContent = `$${calcularTotalAPagar()}`;
}

// Manejador de evento para agregar un producto al hacer clic en el ícono del carrito
const iconoCarrito = document.querySelector('.icon-cart');
iconoCarrito.addEventListener('click', () => {
  agregarProductoAlCarrito(1, 'Zapatos Nike', 80); // 
});
