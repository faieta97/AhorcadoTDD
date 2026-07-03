Feature: Entrada inválida y partida terminada

  Scenario: Tipear algo que no es una letra
    Given una partida con la palabra "GATO"
    When el jugador adivina la letra "5"
    Then se ve el mensaje "Entrada inválida"
    And se ven 6 vidas

  Scenario: Jugar después de terminar la partida
    Given una partida con la palabra "GATO"
    When el jugador adivina la letra "G"
    And el jugador adivina la letra "A"
    And el jugador adivina la letra "T"
    And el jugador adivina la letra "O"
    And el jugador adivina la letra "X"
    Then se ve el mensaje "La partida ya terminó"
    And el campo de letra está deshabilitado
