
function buscarProductos() {
  filtrarProductos();
}

function filtrarProductos() {
  const texto = document.getElementById("buscador").value.toLowerCase();
  const categoriaSeleccionada = document.getElementById("filtro-categoria").value;
  const precioMax = parseInt(document.getElementById("filtro-precio").value);

  for (const categoria in window.productos) {
    const contenedor = document.getElementById(categoria);
    contenedor.innerHTML = "";
    window.productos[categoria].forEach((producto, i) => {
      const cumpleCategoria = categoriaSeleccionada === "" || categoria === categoriaSeleccionada;
      const cumpleNombre = producto.nombre.toLowerCase().includes(texto);
      const cumplePrecio = producto.precio <= precioMax;

      if (cumpleCategoria && cumpleNombre && cumplePrecio) {
        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}" />
          <h3>${producto.nombre}</h3>
          <p>$${producto.precio} MXN</p>
          <button onclick="agregarAlCarrito('${categoria}', ${i})">Agregar</button>
        `;
        contenedor.appendChild(div);
      }
    });
  }
}



function mostrarDepartamento(nombre) {
  // Marcar tab activa
  document.querySelectorAll('.tabs-nav button').forEach(btn => {
    btn.classList.remove('tab-activa');
  });
  const tab = [...document.querySelectorAll('.tabs-nav button')].find(btn => btn.innerText.toLowerCase().includes(nombre));
  if (tab) tab.classList.add('tab-activa');

  // Mostrar productos
  for (const categoria in window.productos) {
    const seccion = document.getElementById(categoria);
    seccion.style.display = (categoria.startsWith(nombre) || (nombre === 'arquitectura' && ['software','cursos','recursos'].includes(categoria))) ? "flex" : "none";
  }
}



const titulosPorDepartamento = {
  arquitectura: {
    software: "Software de Arquitectura",
    cursos: "Cursos",
    recursos: "Extras y Recursos"
  },
  finanzas: {
    software: "Software de Finanzas",
    cursos: "Cursos",
    recursos: "Extras y Recursos"
  },
  diseño: {
    software: "Software de Diseño",
    cursos: "Cursos",
    recursos: "Extras y Recursos"
  },
  fotografia: {
    software: "Software de Fotografía",
    cursos: "Cursos",
    recursos: "Extras y Recursos"
  },
  inversiones: {
    software: "Software de Inversiones",
    cursos: "Cursos",
    recursos: "Extras y Recursos"
  },
  instrumentos: {
    software: "Software de Instrumentos",
    cursos: "Cursos",
    recursos: "Extras y Recursos"
  },
  ingles: {
    software: "Software de Inglés",
    cursos: "Cursos",
    recursos: "Extras y Recursos"
  },
  excel: {
    software: "Software de Excel",
    cursos: "Cursos",
    recursos: "Extras y Recursos"
  },
  desarrollo: {
    software: "Software de Desarrollo",
    cursos: "Cursos",
    recursos: "Extras y Recursos"
  },
  fisioterapia: {
    software: "Software de Fisioterapia",
    cursos: "Cursos",
    recursos: "Extras y Recursos"
  },
  ingenieria: {
    software: "Software de Ingeniería",
    cursos: "Cursos",
    recursos: "Extras y Recursos"
  },
  nutriologia: {
    software: "Software de Nutriología",
    cursos: "Cursos",
    recursos: "Extras y Recursos"
  }
};

function mostrarDepartamento(nombre) {
  // Activar tab
  document.querySelectorAll('.tabs-nav button').forEach(btn => {
    btn.classList.remove('tab-activa');
  });
  const tab = [...document.querySelectorAll('.tabs-nav button')].find(btn => btn.innerText.toLowerCase().includes(nombre));
  if (tab) tab.classList.add('tab-activa');

  // Mostrar secciones y actualizar encabezados
  for (const categoria in window.productos) {
    const seccion = document.getElementById(categoria);
    const titulo = seccion.previousElementSibling;
    if (categoria.startsWith(nombre) || (nombre === 'arquitectura' && ['software','cursos','recursos'].includes(categoria))) {
      seccion.style.display = "flex";
      if (titulosPorDepartamento[nombre]) {
        titulo.textContent = titulosPorDepartamento[nombre][categoria] || categoria;
      }
    } else {
      seccion.style.display = "none";
    }
  }
}
