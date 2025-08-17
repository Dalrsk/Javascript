/*
  Asincronismo
  No es más que la capacidad de un programa para ejecutar tareas en paralelo sin bloquear el 
  hilo principal de ejecución.
*/

/*
  Functiones asincronas
  setInterval
  setInterval es una función que ejecuta un bloque de código repetidamente con un intervalo de tiempo especificado.
  Se utiliza para realizar tareas periódicas, como actualizaciones de interfaz de usuario o comprobaciones
*/

setInterval(() => {
  console.log("Hola, soy un setInterval");
}, 1000); // Ejecuta cada segundo

console.log(
  "Este mensaje se muestra inmediatamente, sin esperar al setInterval"
);

/*
  setTimeout
  setTimeout es una función que ejecuta un bloque de código una sola vez después de un intervalo de tiempo especificado.
  Se utiliza para retrasar la ejecución de una tarea, como mostrar un mensaje después de un tiempo determinado.
*/

setTimeout(() => {
  console.log("Hola, soy un setTimeout");
}, 2000); // Ejecuta después de 2 segundos

console.log(
  "Este mensaje se muestra inmediatamente, sin esperar al setTimeout"
);

/*
  Async/Await
  Async/Await es una forma de manejar operaciones asincrónicas en JavaScript de manera más legible y estructurada.
*/
async function saludar(nombre) {
  let hola = "hola";
  await console.log(`Hola, ${nombre}`);
  alert(hola);
}

/*
  Promesas
  Las promesas son objetos que representan el resultado de una operación asincrónica.
  Pueden estar en uno de los siguientes estados: pendiente, cumplida o rechazada.
*/

async function promesaEjemplo() {
  await new Promise((resolve, reject) => {
    // Crea una nueva promesa
    setTimeout(() => {
      // Resuelve la promesa después de 3 segundos
      resolve("Promesa resuelta después de 3 segundos");
      // reject('Error al resolver la promesa'); // Puedes descomentar esta línea para simular un error
    }, 3000); // Resuelve la promesa después de 3 segundos
  });
}

function mostrarMensaje(mensaje) {
  console.log(mensaje);
}

promesaEjemplo().then(mostrarMensaje);

/*
  Fetch API
  La Fetch API es una interfaz moderna para realizar solicitudes HTTP en JavaScript.
  Permite obtener recursos de la red de manera sencilla y manejar respuestas asincrónicas.
*/

async function getData() {
  let informacion = null;
  // Fetch en este caso esta realizando una petición a la API de Rick and Morty
  await fetch("https://rickandmortyapi.com/api/character")
    .then((data) => {
      //Fetch trae toda la información de la API, pero en formato de string, necesitamos convertirla a JSON
      data.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      // Manejo de errores en caso de que la solicitud falle
      console.error("Error al obtener los datos:", error);
    });
}

getData();

/*

JSON
  JSON (JavaScript Object Notation) es un formato ligero de intercambio de datos que es fácil de leer y 
  escribir para los humanos, y fácil de analizar y generar para las máquinas.
  Se utiliza comúnmente para enviar datos entre un servidor y un cliente en aplicaciones web.
*/

const jsonData = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

//objeto normal
const objetoNormal = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};

// Convertir objeto javaScript a JSON

const jsonString = JSON.stringify(objetoNormal);

// Convertir JSON a objeto JavaScript
const jsonToObject = JSON.parse(jsonString);

/*
  LocalStorage
  LocalStorage es una API de almacenamiento web que permite a las aplicaciones web almacenar datos de manera persistente en el navegador del usuario.
  Los datos almacenados en LocalStorage permanecen incluso después de cerrar el navegador o apagar el dispositivo.
*/

while (true) {
alert("Menu de opciones:\n1. Guardar datos\n2. Obtener datos\n3. Eliminar datos\n4. Salir");
};
let opcion = prompt("Ingrese una opcion (1-4):"); 

switch (opcion) {
  case "1":
    guardarDatos();
    break;
  case "2":
    obtenerDatos();
    break;
  case "3":
    eliminarDatos();
    break;
  case "4":
    salir();
    break;
  default:
    alert("Opcion no valida. Por favor, ingrese una opcion del 1 al 4.");
} 

function guardarDatos() {
  let clave = prompt("Ingrese la clave para guardar los datos:");
  let valor = prompt("Ingrese el valor a guardar:");
  localStorage.setItem(clave, valor);
  alert(`Datos guardados: ${clave} - ${valor}`);
}

function obtenerDatos() {
  let clave = prompt("Ingrese la clave para obtener los datos:");
  let valor = localStorage.getItem(clave);
  if (valor) {
    alert(`Valor obtenido: ${clave} - ${valor}`);
  } else {
    alert(`No se encontraron datos para la clave: ${clave}`);
  }
}

function eliminarDatos() {
  let clave = prompt("Ingrese la clave para eliminar los datos:");
  localStorage.removeItem(clave);
  alert(`Datos eliminados para la clave: ${clave}`);
}

function salir() {
  alert("Saliendo del menu. ¡Hasta luego!");
  throw new Error("Saliendo del menu"); // Lanza un error para salir del bucle
}

/*
  Las cookies
  son pequeños fragmentos de datos que se almacenan en el navegador del usuario y se envían al servidor con cada solicitud HTTP.
  Se utilizan para almacenar información de sesión, preferencias del usuario y otros datos que deben persistir entre visitas a un sitio web.
  Las cookies tienen un tamaño limitado y pueden tener una fecha de expiración.
*/

// crear una coockie

let fechaExpiracion = new Date();
fechaExpiracion.setTime(fechaExpiracion.getTime() + (5 * 60 * 1000)); // Expira en 5 minutos
document.cookie = "nombre=Juan; expires=" + fechaExpiracion.toUTCString() + "; path=/";

// leer una cookie
let cookies = document.cookie;
cookies.split('; ').forEach(cookie) => {
  //Dividir una cookie en nombre y valor
  let [nombre, valor] = cookie.split('=');
  // nombre = cookie[0];
  // valor = cookie[1];

  if (nombre === "nombre") {
    console.log("El valor de la cookie 'usuario':", valor);
  }
}




// let fechaExpiracion = new Date();
// fechaExpiracion.setTime(fechaExpiracion.getTime() + (7 * 24 * 60 * 60 * 1000)); // Expira en 7 días
