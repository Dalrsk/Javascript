// const input = document.getElementById('inputForm');
// const button = document.getElementById('btnForm');
// const ul = document.getElementById('lista');
// let regexInput = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ]+$/;

// btnForm.addEventListener('click', (event) => {
//   event.preventDefault();
//   if (input.value.trim() === "") {
//     alert("Por favor, ingrese una tarea.");
//   } else {
//     const li = document.createElement('li');
//     li.innerHTML += `
//           <li class="flex items-center justify-between">
//             <input type="checkbox">
//             <p class="font-bold text-lg text-white">${input.value}</p>
//             <button id="delete">
//               
//             </button>
//           </li>`;
//     li.classList.add('bg-violet-400', 'hover:bg-violet-600', 'rounded-md','text-white', 'p-4', 'rounded-md', 'mt-2', 'gap-2');
//     ul.appendChild(li);
//     input.value = "";
//     eliminarBtn(li);
//   }

//    // 2️⃣ Validar que no tenga caracteres especiales
//     if (!regexInput.test(input.value.trim())) {
//     alert("❌ No se permiten caracteres especiales.");
//     input.value = ""; // Limpiar campo
//     return ul; // Salir sin agregar nada
// }
// });

// function eliminarBtn(item) {
//   const eliminarBtn = item.querySelector('#delete');
//   eliminarBtn.addEventListener('click', () => {
//   item.remove();
// });
// }

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