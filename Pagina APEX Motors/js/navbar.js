//NAVBAR

window.addEventListener("scroll", () => {

  const barra =
    document.getElementById("barra-navegacion");

  if (!barra) return;

  barra.classList.toggle(
    "desplazado",
    window.scrollY > 60
  );

});