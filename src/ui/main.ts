import { Ahorcado } from "../domain/Ahorcado";

function render(juego: Ahorcado) {
  const wordEl = document.querySelector('[data-testid="word"]');
  const livesEl = document.querySelector('[data-testid="lives"]');
  const messageEl = document.querySelector('[data-testid="message"]');

  if (wordEl) {
    wordEl.textContent = juego.haPerdido()
      ? juego.palabraCompleta()
      : juego.palabraEnmascarada();
  }
  if (livesEl) livesEl.textContent = String(juego.vidasRestantes());

  if (messageEl) {
    if (juego.haPerdido()) {
      messageEl.textContent = "Perdiste";
    } else if (juego.haGanado()) {
      messageEl.textContent = "¡Ganaste!";
    } else {
      messageEl.textContent = "";
    }
  }
}

export function mountApp(juego: Ahorcado) {
  render(juego);

  const form = document.getElementById("guess-form") as HTMLFormElement | null;
  const input = document.getElementById("guess-input") as HTMLInputElement | null;

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const letra = input?.value.trim().toUpperCase() ?? "";
    if (letra.length === 1) {
      if (juego.letraYaIntentada(letra)) {
        const messageEl = document.querySelector('[data-testid="message"]');
        if (messageEl) messageEl.textContent = "Ya intentaste esa letra";
      } else {
        juego.adivinar(letra);
        render(juego);
        if (input) input.value = "";
      }
    }
  });
}
