# language: es
Característica: Jugar partida

  Escenario: Iniciar partida
    Dado una partida con la palabra "GATO"
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 6 vidas

  Escenario: Acertar letra
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "A"
    Entonces se ve la palabra "_ A _ _"
    Y se ven 6 vidas

  Escenario: Fallar letra
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "E"
    Entonces se ve la palabra "_ _ _ _"
    Y se ven 5 vidas

