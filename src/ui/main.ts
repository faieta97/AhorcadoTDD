import { Ahorcado } from "../domain/Ahorcado";

export function mountApp(juego: Ahorcado) {
  const wordEl = document.getElementById("word");
  const livesEl = document.getElementById("lives");

  if (wordEl) {
    wordEl.textContent = juego.palabraEnmascarada();
  }
  if (livesEl) {
    livesEl.textContent = String(juego.vidasRestantes());
  }
}
