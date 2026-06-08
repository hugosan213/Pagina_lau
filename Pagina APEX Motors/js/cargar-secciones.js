// ─── CARGAR SECCIONES HTML ─────────────────

function cargarSeccion(id, archivo) {

  fetch(archivo)

    .then(respuesta => respuesta.text())

    .then(datos => {

      document
        .getElementById(id)
        .innerHTML = datos;

    });

}

/* CARGA DE ARCHIVOS HTML */

cargarSeccion(
  "navbar-container",
  "html/navbar.html"
);

cargarSeccion(
  "hero-container",
  "html/hero.html"
);

cargarSeccion(
  "modelos-container",
  "html/modelos.html"
);

cargarSeccion(
  "estadisticas-container",
  "html/estadisticas.html"
);

cargarSeccion(
  "nosotros-container",
  "html/nosotros.html"
);

cargarSeccion(
  "contacto-container",
  "html/contacto.html"
);

cargarSeccion(
  "footer-container",
  "html/footer.html"
);