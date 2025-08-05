const input = document.getElementById('inputForm');
const button = document.getElementById('btnForm');
const ul = document.getElementById('lista');

btnForm.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value === "") {
    alert("Por favor, ingrese una tarea.");
  } else {
    const li = document.createElement('li');
    li.innerHTML = `<label><input type="checkbox"> ${input.value}</label>`;
    li.classList.add('bg-violet-400', 'rounded-md','text-white', 'p-4', 'rounded-md', 'mt-2');
    ul.appendChild(li);
    input.value = "";
    eliminarBtn(li);
    
  }

});

function eliminarItem(item) {
  const eliminarBtn = item.querySelector('.delete');
  eliminarBtn.addEventListener('click', () => {
    e.parentElement.remove();
});
}