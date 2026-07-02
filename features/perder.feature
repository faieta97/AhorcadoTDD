# language: es
Característica: Perder la partida

  Escenario: Perder la partida por agotar vidas
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "E"
    Y el jugador adivina la letra "I"
    Y el jugador adivina la letra "U"
    Y el jugador adivina la letra "N"
    Y el jugador adivina la letra "S"
    Y el jugador adivina la letra "R"
    Entonces se ve el mensaje "Perdiste"
    Y se ve la palabra "GATO"
