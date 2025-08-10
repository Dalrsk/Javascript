let puntuacionJugador = 0;
let puntuacionComputadora = 0;

const opciones = ['piedra', 'papel', 'tijera'];
const puntos = 3;

function jugar(jugadaJugador) {
  const jugadaComputadora = obtenerJugadaComputadora();
  let resultado = determinarGanador(jugadaJugador, jugadaComputadora);

  actualizar(resultado, jugadaJugador, jugadaComputadora);
  
  if (puntuacionJugador === puntos || puntuacionComputadora === puntos) {
    finalizarJuego();
  }
}

function obtenerJugadaComputadora() {
  return opciones[Math.floor(Math.random() * opciones.length)];
}

function determinarGanador(jugador, computadora) {
  if (jugador === computadora) {
    return "empate";
  }
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

  document.getElementById('resultado').textContent = mensaje;
  document.getElementById('puntaje').textContent = `Jugador: ${puntuacionJugador} - Computadora: ${puntuacionComputadora}`;
}

function finalizarJuego() {
  const mensajeFinal = puntuacionJugador === puntos
    ? "¡Felicidades, ganaste el juego!"
    : "La computadora ganó el juego.";
  
  document.getElementById('resultado').textContent = mensajeFinal;

  document.querySelectorAll('button').forEach(btn => {
  btn.disabled = true;
  });
}