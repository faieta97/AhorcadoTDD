import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/Ahorcado";

describe("Ahorcado", () => {
  it("al instanciar con la palabra 'GATO', la palabra enmascarada es '_ _ _ _' y las vidas restantes son 6", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
    expect(juego.vidasRestantes()).toBe(6);
  });

  it("al adivinar la letra 'A' en 'GATO', la palabra enmascarada es '_ A _ _' y las vidas restantes siguen siendo 6", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("A");
    expect(juego.palabraEnmascarada()).toBe("_ A _ _");
    expect(juego.vidasRestantes()).toBe(6);
  });

  it("al adivinar la letra 'E' en 'GATO', la palabra enmascarada sigue siendo '_ _ _ _' y las vidas restantes bajan a 5", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("E");
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
    expect(juego.vidasRestantes()).toBe(5);
  });

  it("al adivinar todas las letras de 'GATO', haGanado() devuelve true", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("G");
    juego.adivinar("A");
    juego.adivinar("T");
    juego.adivinar("O");
    expect(juego.haGanado()).toBe(true);
  });

  it("al agotar las 6 vidas, haPerdido() devuelve true", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.haPerdido()).toBe(false);
    juego.adivinar("E");
    juego.adivinar("I");
    juego.adivinar("U");
    juego.adivinar("N");
    juego.adivinar("S");
    juego.adivinar("R");
    expect(juego.haPerdido()).toBe(true);
  });

  it("después de adivinar la letra 'A', letraYaIntentada('A') devuelve true", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("A");
    expect(juego.letraYaIntentada("A")).toBe(true);
  });

  it("haTerminado() devuelve false al inicio de la partida", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.haTerminado()).toBe(false);
  });

  it("haTerminado() devuelve true cuando el jugador ganó", () => {
    const juego = new Ahorcado("GATO");
    juego.adivinar("G");
    juego.adivinar("A");
    juego.adivinar("T");
    juego.adivinar("O");
    expect(juego.haTerminado()).toBe(true);
  });

  it("esLetraValida('A') devuelve true", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.esLetraValida("A")).toBe(true);
  });

  it("esLetraValida('5') devuelve false", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.esLetraValida("5")).toBe(false);
  });
});

