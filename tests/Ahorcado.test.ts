import { describe, it, expect } from "vitest";
import { Ahorcado } from "../src/domain/Ahorcado";

describe("Ahorcado", () => {
  it("al instanciar con la palabra 'GATO', la palabra enmascarada es '_ _ _ _' y las vidas restantes son 6", () => {
    const juego = new Ahorcado("GATO");
    expect(juego.palabraEnmascarada()).toBe("_ _ _ _");
    expect(juego.vidasRestantes()).toBe(6);
  });
});
