# language: es
Característica: Letra ya intentada

  Escenario: Reintentar una letra ya adivinada
    Dado una partida con la palabra "GATO"
    Cuando el jugador adivina la letra "A"
    Y el jugador adivina la letra "A"
    Entonces se ve la palabra "_ A _ _"
    Y se ven 6 vidas
    Y se ve el mensaje "Ya intentaste esa letra"
