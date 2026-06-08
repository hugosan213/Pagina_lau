// ─── INICIALIZACIÓN GENERAL ─────────────

document.addEventListener(
  "DOMContentLoaded",
  () => {

    /* TARJETAS AUTOS */

    document
      .querySelectorAll(".tarjeta-auto")
      .forEach((el, i) => {

        el.classList.add("reveal");

        if (i === 1)
          el.classList.add("delay-1");

        if (i === 2)
          el.classList.add("delay-2");

        observadorRevelar.observe(el);

      });

    /* NOSOTROS */

    document
      .querySelectorAll(
        "#nosotros .texto-nosotros, #nosotros .insignia"
      )
      .forEach((el, i) => {

        el.classList.add("reveal");

        if (i === 1)
          el.classList.add("delay-2");

        observadorRevelar.observe(el);

      });

    /* CONTACTO */

    document
      .querySelectorAll(
        "#contacto .intro-contacto, #contacto .formulario-contacto"
      )
      .forEach((el, i) => {

        el.classList.add("reveal");

        if (i === 1)
          el.classList.add("delay-1");

        observadorRevelar.observe(el);

      });

    /* ESTADISTICAS */

    document
      .querySelectorAll(".estadistica")
      .forEach((el) => {

        observadorEstadisticas.observe(el);

      });

  }
);