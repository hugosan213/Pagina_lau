// ─── CONTADORES ANIMADOS ─────────────────

function animarContador(numero) {

  const objetivo =
    parseInt(
      numero.dataset.target,
      10
    );

  const duracion = 1600;

  const inicio = performance.now();

  function paso(actual) {

    const progreso =
      Math.min(
        (actual - inicio) / duracion,
        1
      );

    const suavizado =
      1 - Math.pow(1 - progreso, 3);

    numero.textContent =
      Math.floor(
        suavizado * objetivo
      ).toLocaleString();

    if (progreso < 1)
      requestAnimationFrame(paso);

    else
      numero.textContent =
        objetivo.toLocaleString();

  }

  requestAnimationFrame(paso);

}

/* OBSERVADOR */

const observadorEstadisticas =
  new IntersectionObserver(

    (entradas) => {

      entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

          const numero =
            entrada.target.querySelector(
              ".numero-estadistica[data-target]"
            );

          if (numero)
            animarContador(numero);

          observadorEstadisticas
            .unobserve(entrada.target);

        }

      });

    },

    { threshold: 0.4 }

  );

function iniciarContadores() {

  document
    .querySelectorAll(".estadistica")
    .forEach((estadistica) => {

      if (estadistica.dataset.contadorObservado === "true")
        return;

      estadistica.dataset.contadorObservado = "true";
      observadorEstadisticas.observe(estadistica);

    });

}

window.inicializarContadores = iniciarContadores;

document.addEventListener(
  "DOMContentLoaded",
  iniciarContadores
);