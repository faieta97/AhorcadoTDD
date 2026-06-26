export class Ahorcado {
  private letrasAdivinadas = new Set<string>();
  private vidas = 6;

  constructor(private palabra: string) {}

  adivinar(letra: string): void {
    this.letrasAdivinadas.add(letra);
    if (!this.palabra.includes(letra)) {
      this.vidas--;
    }
  }

  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((l) => (this.letrasAdivinadas.has(l) ? l : "_"))
      .join(" ");
  }

  vidasRestantes(): number {
    return this.vidas;
  }
}
