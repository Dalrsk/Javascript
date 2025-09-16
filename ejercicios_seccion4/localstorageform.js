document.getElementById("formRegistro").addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtener valores del formulario
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value.trim();

  // Validar que los campos no estén vacíos
  if (!nombre || !correo || !contrasena) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Validar formato de correo electrónico
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return;
  }

  // Configurar fecha de expiración (7 días desde ahora)
  const fechaExpiracion = new Date();
  fechaExpiracion.setDate(fechaExpiracion.getDate() + 7);

  // Guardar en cookie
  const usuarioCookie = { nombre, correo };
  document.cookie = `usuario=${encodeURIComponent(JSON.stringify(usuarioCookie))}; expires=${fechaExpiracion.toUTCString()}; path=/`;

  // Guardar en localStorage
  localStorage.setItem("usuario", JSON.stringify(usuarioCookie));

  // Mensaje de éxito
  alert("¡Datos guardados correctamente en LocalStorage y Cookie!");

  // Limpiar el formulario
  this.reset();
});
