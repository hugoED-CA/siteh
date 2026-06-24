document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.querySelector("#site-menu");

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", function () {
    var aberto = toggle.getAttribute("aria-expanded") === "true";

    toggle.setAttribute("aria-expanded", String(!aberto));
    toggle.setAttribute("aria-label", aberto ? "Abrir menu" : "Fechar menu");
    toggle.classList.toggle("is-open", !aberto);
    menu.classList.toggle("is-open", !aberto);
  });

  menu.addEventListener("click", function (event) {
    if (event.target.tagName !== "A") {
      return;
    }

    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    toggle.classList.remove("is-open");
    menu.classList.remove("is-open");
  });
});
