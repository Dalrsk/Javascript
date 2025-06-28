function calculadora (num1 = 0, num2 = 0, operador) {
  if (operador == "suma") { 
    console.log ("El resultado de la suma es: " + (num1 + num2));
  } else if (operador == "resta") {
    console.log("El resultado de la resta es: " + (num1 - num2));
  } else if (operador == "multiplicacion" || operador == "multiplicación") {
    if (num1 == 0) {
      console.log("Primer valor invalido");
    } else if (num2 == 0) {
      console.log("Segundo valor invalido");
    } else {
      console.log("El resultado de la multiplicacion es: " + (num1 * num2));
    } 
  } else if (operador == "division" || operador == "división") {
    if (num1 == 0) {
      console.log("Primer valor invalido");
    } else if (num2 == 0) {
      console.log("Segundo valor invalido");
    } else {
      console.log("El resultado de la division es: " + (num1 / num2));
    }
  } else { 
    console.log("Operador ingresado no valido");
  }
}

calculadora (8, 2, "suma");
calculadora (8, 2, "resta");
calculadora (8, 2, "multiplicacion");
calculadora (8, 2, "division");
calculadora (8, 2, "asd");
calculadora (8, "multiplicacion");
calculadora (8, "division");