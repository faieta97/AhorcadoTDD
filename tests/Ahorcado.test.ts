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
});
