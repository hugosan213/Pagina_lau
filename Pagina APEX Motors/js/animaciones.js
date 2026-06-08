const observadorRevelar =
  new IntersectionObserver(

    (entradas) => {

      entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

          entrada.target
            .classList
            .add("visible");

          observadorRevelar
            .unobserve(entrada.target);

        }

      });

    },

    { threshold: 0.15 }

  );