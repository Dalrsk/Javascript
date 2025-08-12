// declaración de variables 

const input = document.getElementById('inputForm');
const button = document.getElementById('btnForm');
const ul = document.getElementById('lista');

// Validación de entrada de texto
let regexInput = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]+$/;

// Evento para agregar una tarea a la lista
btnForm.addEventListener('click', (event) => {
  event.preventDefault();
  const tarea = input.value.trim();
  if (tarea === "") {
    alert("Por favor, ingrese una tarea.");
    return;

  } else if (!regexInput.test(tarea)) {
    alert("❌ No se permiten caracteres especiales.");
    input.value = ""; // Limpiar campo
    return;
  }

  // Crear un nuevo elemento de lista y agregarlo al DOM
  const li = document.createElement('li');
  li.classList.add('flex', 'items-center', 'justify-between', 'bg-violet-400', 'hover:bg-violet-600', 'rounded-md', 'text-white', 'p-4', 'rounded-md', 'mt-2', 'gap-2' );

  li.innerHTML = `
    <input type ="checkbox">
      <p class="font-bold text-lg text-white">${tarea}</p>
      <button class="delete">
        <img src="./images/trash-2.svg" alt="eliminar">
      </button>
  `;
  // Agregar el nuevo elemento a la lista y limpiar el campo de entrada
  ul.appendChild(li);
  input.value = "";

  // Agregar evento para eliminar la tarea
  const deleteBtn = li.querySelector('.delete');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

})
