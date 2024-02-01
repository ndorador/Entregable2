

document.addEventListener('DOMContentLoaded', function() {
  // referencias a elementos del DOM
  let nombreProductoInput = document.getElementById('nombreProducto');
  let precioProductoInput = document.getElementById('precioProducto');
  let agregarProductoButton = document.getElementById('agregarProducto');
  let listaProductosElement = document.getElementById('listaProductos');
  let resultadoElement = document.getElementById('resultado');
  let totalElement = document.getElementById('total');

  // Se obtiene los productos del localStorage al cargar la página
  let productosEnCarrito = JSON.parse(localStorage.getItem('productos')) || [];

  // Función para mostrar los productos en el carrito
  function mostrarProductosEnCarrito() {
      // Se Limpia la lista de productos en el carrito
      listaProductosElement.innerHTML = '';

      let total = 0;

      // Aquí se repite sobre los productos en el carrito y crea elementos de lista
      productosEnCarrito.forEach(function(producto) {
          let listItem = document.createElement('li');
          listItem.textContent = producto.nombre + ' - $' + producto.precio.toFixed(2);
          listaProductosElement.appendChild(listItem);

          total += producto.precio;
      });

      // Muestra el total de los productos en el carrito
      totalElement.textContent = 'Total: $' + total.toFixed(2);
  }

  // Muestra los productos iniciales en el carrito al cargar la página
  mostrarProductosEnCarrito();

  // Agrega un evento al botón para agregar productos al carrito
  agregarProductoButton.addEventListener('click', function() {
      // Obtiene el nombre y el precio del producto desde los campos de entrada
      let nombreProducto = nombreProductoInput.value;
      let precioProducto = parseFloat(precioProductoInput.value);

      // Verifica si los datos ingresados son válidos
      if (nombreProducto && !isNaN(precioProducto) && precioProducto > 0) {
          // Crea un nuevo objeto de producto con el nombre y precio
          let nuevoProducto = {
              nombre: nombreProducto,
              precio: precioProducto
          };

          // Agrega el nuevo producto al array de productos en el carrito
          productosEnCarrito.push(nuevoProducto);

          // Guarda el array actualizado en el almacenamiento local (localStorage)
          localStorage.setItem('productos', JSON.stringify(productosEnCarrito));

          // Muestra los productos actualizados en el carrito
          mostrarProductosEnCarrito();

          // Muestra un mensaje de éxito en la interfaz
          resultadoElement.textContent = 'Producto agregado al carrito.';

          // Limpia los campos de entrada
          nombreProductoInput.value = '';
          precioProductoInput.value = '';
      } else {
          // Muestra un mensaje de error si los datos no son válidos
          resultadoElement.textContent = 'Por favor, ingresa datos válidos.';
      }
  });
});