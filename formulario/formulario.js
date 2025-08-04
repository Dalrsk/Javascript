document.getElementById('formulario').addEventListener('submit',
  (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada y se refresque la página
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;
    let pais = document.getElementById('pais').value;
    let password = document.getElementById('password').value;
    let regexNombre = /^[a-z\sáéíóú']{3,20}$/i;
    let regexCorreo = /^[a-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/i;
    let regexPais = /^[a-z\sáéíóú']{3,20}$/i;
    let regexPassword = /^[(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!*.[\]#@&])[a-zA-Z\d!*.[\]#@&]{8,30}$/;
    
    if (
      validarInput("Nombre", nombre, regexNombre) &&
      validarInput("Apellido", apellido, regexNombre) &&
      validarInput("Correo", correo, regexCorreo) && 
      validarInput("País", pais, regexPais) &&
      validarInput("Password", password, regexPassword)
    ) {
      alert('Formulario enviado correctamente');
      // Aquí puedes agregar la lógica para enviar el formulario
    }
  });

  //   try {
  //       if (!nombre || !apellido || !correo || !pais || !password) {
  //         throw new Error('Todos los campos son obligatorios');
  //       }
  //   } catch (error) {
  //       console.error('Error al enviar el formulario:', error);
  //       alert(error.message || 'Ocurrió un error al enviar el formulario');
  //   }
  // }

function validarInput(nombre, valor,  regex) {
  if (!valor) {
    alert(`El campo ${nombre} es obligatorio`);
    return false;
  } else if (!regex.test(valor) ) {
    alert(`El campo ${nombre} es inválido`);
    return false;
  } else return true;
}