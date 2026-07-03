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

  haGanado(): boolean {
    return this.palabra.split("").every((l) => this.letrasAdivinadas.has(l));
  }

  haPerdido(): boolean {
    return this.vidas <= 0;
  }

  letraYaIntentada(letra: string): boolean {
    return this.letrasAdivinadas.has(letra);
  }

  haTerminado(): boolean {
    return this.haGanado() || this.haPerdido();
  }

  esLetraValida(letra: string): boolean {
    return /^[a-zA-Z]$/.test(letra);
  }

  palabraCompleta(): string {
    return this.palabra.split("").join(" ");
  }
}
