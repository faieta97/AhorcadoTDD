import { Ahorcado } from "../domain/Ahorcado";

function render(juego: Ahorcado) {
  const wordEl = document.querySelector('[data-testid="word"]');
  const livesEl = document.querySelector('[data-testid="lives"]');
  const messageEl = document.querySelector('[data-testid="message"]');

  if (wordEl) wordEl.textContent = juego.palabraEnmascarada();
  if (livesEl) livesEl.textContent = String(juego.vidasRestantes());
  if (messageEl) messageEl.textContent = juego.haGanado() ? "¡Ganaste!" : "";
}

export function mountApp(juego: Ahorcado) {
  render(juego);

  const form = document.getElementById("guess-form") as HTMLFormElement | null;
  const input = document.getElementById("guess-input") as HTMLInputElement | null;

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const letra = input?.value.trim().toUpperCase() ?? "";
    if (letra.length === 1) {
      juego.adivinar(letra);
      render(juego);
      if (input) input.value = "";
    }
  });
}
