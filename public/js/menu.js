document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.getElementById("btn-menu");
  const menu = document.querySelector(".menu");

  if (!btnMenu || !menu) {
    console.warn("Elementos no encontrados");
    return;
  }

  btnMenu.addEventListener("click", () => {
    menu.classList.toggle("activo");
  });
});
