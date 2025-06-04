
let carrito = [];

function agregarAlCarrito(categoria, index) {
  const producto = window.productos[categoria][index];
  const existente = carrito.find(p => p.nombre === producto.nombre);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  actualizarCarrito();
}

function incrementarCantidad(index) {
  carrito[index].cantidad += 1;
  actualizarCarrito();
}

function decrementarCantidad(index) {
  if (carrito[index].cantidad > 1) {
    carrito[index].cantidad -= 1;
  } else {
    carrito.splice(index, 1);
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const total = document.getElementById("total");

  lista.innerHTML = "";
  let suma = 0;

  carrito.forEach((p, i) => {
    const subtotal = p.precio * p.cantidad;
    const li = document.createElement("li");
    li.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span>${p.nombre} x ${p.cantidad} = $${subtotal}</span>
        <div style="display:flex; gap:5px; align-items:center;">
          <button onclick="decrementarCantidad(${i})">${p.cantidad === 1 ? '🗑️' : '-'}</button>
          <span>${p.cantidad}</span>
          <button onclick="incrementarCantidad(${i})">+</button>
        </div>
      </div>
    `;
    lista.appendChild(li);
    suma += subtotal;
  });

  total.textContent = `Total: $${suma} MXN`;

  // Mostrar botón de confirmar
  const btnConfirmar = document.getElementById("whatsapp-link");
  if (btnConfirmar) {
    btnConfirmar.onclick = mostrarResumen;
  }
}

function mostrarResumen() {
  const resumen = document.getElementById("resumen-pedido");
  const totalTexto = document.getElementById("resumen-total");
  resumen.innerHTML = "";
  let total = 0;
  carrito.forEach(p => {
    const subtotal = p.precio * p.cantidad;
    total += subtotal;
    const li = document.createElement("li");
    li.textContent = `${p.nombre} x ${p.cantidad} = $${subtotal}`;
    resumen.appendChild(li);
  });
  totalTexto.textContent = `Total: $${total} MXN`;
  document.getElementById("modal-confirmacion").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal-confirmacion").style.display = "none";
}

function confirmarEnvio() {
  let mensaje = "Hola, quiero comprar:%0A";
  let suma = 0;
  carrito.forEach(p => {
    const subtotal = p.precio * p.cantidad;
    suma += subtotal;
    mensaje += `• ${p.nombre} x ${p.cantidad} = $${subtotal}%0A`;
  });
  mensaje += `Total: $${suma} MXN`;
  const url = `https://wa.me/526631100794?text=${mensaje}`;
  window.open(url, "_blank");
  cerrarModal();
}
