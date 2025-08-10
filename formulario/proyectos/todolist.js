const input = document.getElementById('inputForm');
const button = document.getElementById('btnForm');
const ul = document.getElementById('lista');

let regexInput = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]+$/;

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

  const li = document.createElement('li');
  li.classList.add('flex', 'items-center', 'justify-between', 'bg-violet-400', 'hover:bg-violet-600', 'rounded-md', 'text-white', 'p-4', 'rounded-md', 'mt-2', 'gap-2' );

  li.innerHTML = `
    <input type ="checkbox">
      <p class="font-bold text-lg text-white">${tarea}</p>
      <button class="delete">
        <img src="./images/trash-2.svg" alt="eliminar">
      </button>
  `;

  ul.appendChild(li);
  input.value = "";

  const deleteBtn = li.querySelector('.delete');
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

})
