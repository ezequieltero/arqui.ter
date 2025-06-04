
const productos = {
  software: [
    { nombre: "AutoCAD 2023", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Autodesk 3DS Max 2024", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "AutoCAD Civil 3D 2024", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "AutoCAD Architecture 2024", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "ArchiCAD 26", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "CivilCAD 2023", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "CorelCAD 2023", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "CorelDRAW 2023", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Corona Renderer", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Edificius 3D 14", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Fusion360 2024", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Fusion360 2023", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Inventor 2023", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Lumion 12", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Neodata 2021", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Photoshop 2023", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Project", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "SketchUp 2022 PRO", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "ArcGIS 10.8", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "SAP 2000 V23", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "V-Ray Advanced 5.10.20 for Revit 2018–2022", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "V-Ray 5.10.06 for Rhinoceros 6–7", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "V-Ray 5 for SketchUp 2017–2021", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Rhinoceros 7", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Opus 14", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Edificius 3D Architectural BIM Design 12", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "SketchUp 2021", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "CivilCAD 2021", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "CivilCAD 2022", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Revit 2022", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Neodata 09", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "AutoCAD Electrical 2024", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "AutoCAD 2022 Español", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "AutoCAD 2022 Inglés", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "3DS Max 2022", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "AutoCAD MEP 2021 (x64)", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "AutoCAD Civil 3D 2021", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Navisworks Manage 2022 (x64)", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "AutoCAD Plant 3D 2022", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "AutoCAD Architecture 2022", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "AutoCAD Electrical 2021", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Navisworks Manage 2022", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Artlantis 2021.2.25648", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Artlantis 2021 v9.5.2.26606", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "ArchiCAD 25 Build 3011", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Lumion 10.3.2", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "AutoCAD MEP 2024", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Navisworks Manage 2024", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "AutoCAD 2024", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Revit 2024", precio: 300, imagen: "img/productos/default.png" },
    { nombre: "Paquete de programas", precio: 300, imagen: "img/productos/default.png" }
  ],
  cursos: [
    { nombre: "Curso de Revit", precio: 180, imagen: "img/productos/curso_revit.png" },
    { nombre: "Curso de Lumion", precio: 150, imagen: "img/productos/curso_lumion.png" },
    { nombre: "Curso de SketchUp", precio: 160, imagen: "img/productos/curso_sketchup.png" }
  ],
  recursos: [
    { nombre: "Bloques dinámicos de AutoCAD", precio: 90, imagen: "img/productos/bloques.png" },
    { nombre: "Familias y plantillas de Revit", precio: 120, imagen: "img/productos/familias.png" },
    { nombre: "Materiales para Lumion", precio: 100, imagen: "img/productos/materiales_lumion.png" }
  ]
};

function renderProductos() {
  for (const categoria in productos) {
    const contenedor = document.getElementById(categoria);
    productos[categoria].forEach((producto, i) => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio} MXN</p>
        <button onclick="agregarAlCarrito('${categoria}', ${i})">Agregar</button>
      `;
      contenedor.appendChild(div);
    });
  }
}
renderProductos();
window.productos = productos;
