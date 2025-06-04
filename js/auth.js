
function getUsers() {
  return JSON.parse(localStorage.getItem("usuarios") || "[]");
}

function setUsers(users) {
  localStorage.setItem("usuarios", JSON.stringify(users));
}

function register() {
  const nombre = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  const usuarios = getUsers();
  if (usuarios.find(u => u.email === email)) {
    alert("Este correo ya está registrado.");
    return;
  }

  usuarios.push({ nombre, email, password, direccion: "", historial: [] });
  setUsers(usuarios);
  alert("Registro exitoso. Inicia sesión.");
  window.location.href = "login.html";
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const usuarios = getUsers();
  const usuario = usuarios.find(u => u.email === email && u.password === password);
  if (!usuario) {
    alert("Credenciales inválidas.");
    return;
  }

  localStorage.setItem("usuarioActivo", JSON.stringify(usuario));
  alert("Sesión iniciada.");
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("usuarioActivo");
  alert("Sesión cerrada.");
  window.location.href = "index.html";
}

function cargarPerfil() {
  const user = JSON.parse(localStorage.getItem("usuarioActivo"));
  if (!user) return;

  document.getElementById("user-name").innerText = user.nombre;
  document.getElementById("user-email").innerText = user.email;
  document.getElementById("direccion").value = user.direccion || "";

  const lista = document.getElementById("historial-compras");
  lista.innerHTML = "";
  (user.historial || []).forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });
}

function guardarDireccion() {
  const direccion = document.getElementById("direccion").value;
  let user = JSON.parse(localStorage.getItem("usuarioActivo"));
  let usuarios = getUsers();
  let idx = usuarios.findIndex(u => u.email === user.email);
  usuarios[idx].direccion = direccion;
  user.direccion = direccion;
  localStorage.setItem("usuarioActivo", JSON.stringify(user));
  setUsers(usuarios);
  alert("Dirección guardada.");
}
