/////////////////////////////////////////////////////////////
// Crea una función recursiva que imprima la sucesión de Fibonacci hasta un número dado.
function functionFibonacci(numero) {
  if (numero == 1)
    console.log(numero);
  else {
    functionFibonacci(numero - 1);
    console.log(numero);
  }
}

functionFibonacci(5);