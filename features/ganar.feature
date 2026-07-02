# language: es
Característica: Ganar la partida

  Escenario: Ganar completando la palabra
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "G"
    Y el jugador adivina la letra "A"
    Y el jugador adivina la letra "T"
    Y el jugador adivina la letra "O"
    Entonces se ve el mensaje "¡Ganaste!"
