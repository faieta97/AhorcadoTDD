import { Ahorcado } from "../domain/Ahorcado";

function render(juego: Ahorcado) {
  const wordEl = document.querySelector('[data-testid="word"]');
  const livesEl = document.querySelector('[data-testid="lives"]');
  const messageEl = document.querySelector('[data-testid="message"]');
  const input = document.getElementById("guess-input") as HTMLInputElement | null;

  if (wordEl) {
    wordEl.textContent = juego.haPerdido()
      ? juego.palabraCompleta()
      : juego.palabraEnmascarada();
  }
  if (livesEl) livesEl.textContent = String(juego.vidasRestantes());
  if (messageEl && !messageEl.textContent) {
    messageEl.textContent = juego.haGanado()
      ? "¡Ganaste!"
      : juego.haPerdido()
        ? "Perdiste"
        : "";
  }
  if (input) input.disabled = juego.haTerminado();
}

export function mountApp(juego: Ahorcado) {
  render(juego);

  const form = document.getElementById("guess-form") as HTMLFormElement | null;
  const input = document.getElementById("guess-input") as HTMLInputElement | null;

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const letra = input?.value.trim().toUpperCase() ?? "";
    const messageEl = document.querySelector('[data-testid="message"]');

    if (juego.haTerminado()) {
      if (messageEl) messageEl.textContent = "La partida ya terminó";
      return;
    }
    if (!juego.esLetraValida(letra)) {
      if (messageEl) messageEl.textContent = "Entrada inválida";
      if (input) input.value = "";
      return;
    }
    if (juego.letraYaIntentada(letra)) {
      if (messageEl) messageEl.textContent = "Ya intentaste esa letra";
      if (input) input.value = "";
      return;
    }

    juego.adivinar(letra);
    if (messageEl) messageEl.textContent = "";
    render(juego);
    if (input) input.value = "";
  });
}
