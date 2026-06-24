export class Ahorcado {
  constructor(private palabra: string) {}

  palabraEnmascarada(): string {
    return Array(this.palabra.length).fill("_").join(" ");
  }

  vidasRestantes(): number {
    return 6;
  }
}
