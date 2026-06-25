export class Ahorcado {
  private letrasAdivinadas = new Set<string>();

  constructor(private palabra: string) {}

  adivinar(letra: string): void {
    this.letrasAdivinadas.add(letra);
  }

  palabraEnmascarada(): string {
    return this.palabra
      .split("")
      .map((l) => (this.letrasAdivinadas.has(l) ? l : "_"))
      .join(" ");
  }

  vidasRestantes(): number {
    return 6;
  }
}
