// Definimos las variables y funciones necesarias para el juego Piedra, Papel o Tijera
// El jugador y la computadora juegan hasta que uno de ellos alcanza 3 puntos
let puntuacionJugador = 0;
let puntuacionComputadora = 0;

const opciones = ['piedra', 'papel', 'tijera'];
const puntos = 3;

// Función para iniciar el juego

function jugar(jugadaJugador) {
  const jugadaComputadora = obtenerJugadaComputadora();
  let resultado = determinarGanador(jugadaJugador, jugadaComputadora);

  // Actualizamos el puntaje y mostramos el resultado
  actualizar(resultado, jugadaJugador, jugadaComputadora);
  
  if (puntuacionJugador === puntos || puntuacionComputadora === puntos) {
    finalizarJuego();
  }
}
// Funciones auxiliares para obtener la jugada de la computadora y determinar el ganador
function obtenerJugadaComputadora() {
  return opciones[Math.floor(Math.random() * opciones.length)];
}

// Determina el ganador de la partida
// Retorna "empate", "ganaste" o "perdiste"
function determinarGanador(jugador, computadora) {
  if (jugador === computadora) {
    return "empate";
  } // Compara las jugadas del jugador y la computadora
  if (
    (jugador === 'piedra' && computadora === 'tijera') ||
    (jugador === 'papel' && computadora === 'piedra') ||
    (jugador === 'tijera' && computadora === 'papel')
  ) {
    puntuacionJugador++;
    return "ganaste";
  } else {
    puntuacionComputadora++;
    return "perdiste";
  }
}

// Actualiza el resultado del juego y el puntaje
// Muestra un mensaje dependiendo del resultado y actualiza el puntaje
function actualizar(resultado, jugadaJugador, jugadaComputadora) {
  let mensaje = "";

  switch (resultado) {
    case "empate":
      mensaje = `¡Empate! Ambos eligieron ${jugadaJugador}.`;
      break;
    case "ganaste":
      mensaje = `¡Ganaste! Elegiste ${jugadaJugador} y la computadora eligió ${jugadaComputadora}.`;
      break;
    case "perdiste":
      mensaje = `Perdiste. La computadora eligió ${jugadaComputadora} y tú ${jugadaJugador}.`;
      break;
  }
  // Actualiza el contenido del HTML con el mensaje y el puntaje
  document.getElementById('resultado').textContent = mensaje;
  document.getElementById('puntaje').textContent = `Jugador: ${puntuacionJugador} - Computadora: ${puntuacionComputadora}`;
}

// Finaliza el juego cuando uno de los jugadores alcanza 3 puntos
// Muestra un mensaje final y deshabilita los botones
function finalizarJuego() {
  const mensajeFinal = puntuacionJugador === puntos
    ? "¡Felicidades, ganaste el juego!"
    : "La computadora ganó el juego.";
  
  document.getElementById('resultado').textContent = mensajeFinal;

  document.querySelectorAll('button').forEach(btn => {
  btn.disabled = true;
  });
}