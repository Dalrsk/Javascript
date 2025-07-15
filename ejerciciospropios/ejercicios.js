let a, b, c, d, e, f

//suma
a = 3 + 4
console.log(a)

//resta
b = 10 - 5
console.log(b)

//multiplicacion
c = 5 * 9
console.log(c)

//division
d = 20 / 4
console.log(d)

//modulo
e = 17 % 5
console.log(e)

//exponente
f = 2 ** 3
console.log(f)

/////////////////////////////////////////////////////////////

// Operadores de incremento / decremento

let a, b, c
a = 0

// post-incremento
a++
console.log(a) // 1

// pre-incremento
++a
console.log(a) // 2

// post-decremento
a--
console.log(a) // 1

// pre-decremento
--a
console.log(a) // 0

//Ejemplo

a = 5
b = 2
c = ++a * b--
console.log(c) // 12
console.log(a) // 6
console.log(b) // 1

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