const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const hash = link.getAttribute("href");

    if (!hash || hash === "#") return;

    const target = document.getElementById(hash.slice(1));

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: reducedMotion.matches ? "instant" : "smooth",
      block: "start",
    });

    history.replaceState(null, "", hash);
  });
});

const form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    alert(
      "Formulaire de démonstration : aucune demande n’a été envoyée."
    );
  });
}