import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

Given("una partida con la palabra {string}", async ({ page }, palabra: string) => {
  await page.goto(`/?word=${palabra}`);
});

When("el jugador adivina la letra {string}", async ({ page }, letra: string) => {
  await page.getByRole("textbox").fill(letra);
  await page.getByRole("textbox").press("Enter");
});

Then("se ve la palabra {string}", async ({ page }, esperada: string) => {
  const actualText = await page.getByTestId("word").textContent();
  const actualNormalized = actualText?.replace(/\s+/g, "") || "";
  const expectedNormalized = esperada.replace(/\s+/g, "");
  expect(actualNormalized).toBe(expectedNormalized);
});

Then("se ven {int} vidas", async ({ page }, vidas: number) => {
  await expect(page.getByTestId("lives")).toHaveText(String(vidas));
});

Then("se ve el mensaje {string}", async ({ page }, mensaje: string) => {
  await expect(page.getByTestId("message")).toHaveText(mensaje);
});
