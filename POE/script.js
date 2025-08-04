/*const BtnTouchhMe = document.getElementById("BtnTouchMe");
BtnTouchhMe.textContent = "hola";

/*const label = document.querySelector("label");
label.textContent = " Adios"

const labels = document.querySelectorAll("label");
for (const label of labels) {
  label.textContent = "Eooo";
}


const cosita = document.getElementsByClassName("");

const cosita2 = document.getElementsByName("");
*/

const title = document.querySelector("#title");

const changeTextBtn = document.querySelector("#changeTextBtn");

const changeColorBtn = document.querySelector("#changeColorBtn");

const addItemBtn = document.querySelector("#addItemBtn");

const toggleClassBtn = document.querySelector("#toggleClassBtn");

const message = document.querySelector("#message");

const itemList = document.querySelector("#itemList");

const userForm = document.querySelector("#userForm");

const nameInput = document.querySelector("#nameInput");

const emailInput = document.querySelector("#emailInput");

const clearFormBtn = document.querySelector("#clearFormBtn");

const submitFormBtn = document.querySelector("#submitFormBtn");

const fillFormBtn = document.querySelector("#fillFormBtn");

/* addEventListener 
title.addEventListener(event, callback)
el evento siempre sera un "string"
y el callback se suele usar en funciones flecha

addEventListenner permite hacer cualquier cosa tras registrar un evento. Incluso alterar la propiedad style
de los elementos.

Ejemplo:
changeColorBtn.style.backgroundColor = "blue"; <-- para cambiar derectamente una propiedad
changeColorBtn.classlist.add("bg-blue-500"); para cambiar una clase de un elemento tailwind (.add / .remove) (TailwindCSS).

*/


// Cambia el texto del boton al hacer click
changeTextBtn.addEventListener("click", () => {
  changeTextBtn.textContent = "Freeman";
})

// Cambia el color del texto al hacer click
changeColorBtn.addEventListener("click", () => {
  changeColorBtn.style.backgroundColor = "#4CAF50"; // Cambia el color de fondo a verde
  changeColorBtn.style.color = "white";
})


// Agrega un nuevo elemento a la lista al hacer click
addItemBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "AnusMorGULIS";
  itemList.appendChild(newItem);
})

// interactua con una clase al hacer click y la activa o desactiva con toggleClass
toggleClassBtn.addEventListener("click", () => {
  message.classList.toggle("highlight");
  title.classList.toggle("highlight2");

  const status = message.classList.contains("highlight");
  const status2 = title.classList.contains("highlight2");
  console.log(status, status2);

  if (status) {
    message.textContent = message.textContent + " Highlighted!";
  } else {
    message.textContent = message.textContent.replace(" Highlighted!", "");
  }

  if (status2) {
    toggleClassBtn.style.backgroundColor = "red";
  } else {
    toggleClassBtn.style.backgroundColor = "gray";
  }
});

function createNewElementBaseOnInput () {
  const newElement = document.createElement("p");
  const inputId = this.id;
  console.log(inputId);

  newElement.textContent = `El valor de ${inputId}`;
  document.body.appendChild(newElement);
//userForm.appendChild(newElement);
}

//nameInput.addEventListener("focus", createNewElementBaseOnInput);
//emailInput.addEventListener("focus", createNewElementBaseOnInput);


// Elimina el contenido del formulario al hacer click en el boton
clearFormBtn.addEventListener("click", () => {
  nameInput.value = "";
  emailInput.value = "";
})

fillFormBtn.addEventListener("click", () => {
  nameInput.value = "Dalrsk99";
  emailInput.value = "diegolopezramos99@gmail.com";
})

// Envía el formulario y muestra un mensaje de alerta al hacer click en el boton
userForm.addEventListener("submit", () => {
  const name = nameInput.value;
  const email = emailInput.value;

  if (name === "" || email === "") {
    alert("Por favor, completa todos los campos.");
    return;
  } 
  alert(`Felicidades, ${name}, te has ganado un Iphone 16!
  Por favor ingresa al enlaceque te dejaremos en tu Email: ${email}`);

})