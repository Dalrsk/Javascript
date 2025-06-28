function semaforo (numero = 0) {
  if (numero == 1) {
    console.log("Rojo, detente");
  } else if (numero == 2) {
    console.log("Amarillo, precaucion");
  } else if (numero == 3) {
    console.log("Verde, avanza");
  } else { 
    console.log("Numero no valido");
  }
}

semaforo (1);
semaforo (2);
semaforo (3);
semaforo (4);
semaforo ();