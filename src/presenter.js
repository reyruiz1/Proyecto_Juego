import ejecutarSecuencia from "./sumador";

const comandosInput = document.querySelector("#comandos");
const form = document.querySelector("#comandos-form");
const resultadoDiv = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const comandos = comandosInput.value;
  const [dimensiones, posicionInicial, secuencia] = comandos.split('/');

  const posicionFinal = ejecutarSecuencia(comandos);

  if (posicionFinal === "Fuera de los límites") {
    resultadoDiv.innerHTML = `<p>Fuera de los límites</p>`;
  } else {
    resultadoDiv.innerHTML = `
      <p>Posición Inicial: ${posicionInicial}</p>
      <p>Comandos: ${secuencia}</p>
      <p>Posición Final: ${posicionFinal}</p>
    `;
  }
});
