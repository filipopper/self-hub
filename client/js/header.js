document.addEventListener("DOMContentLoaded", () => {
  // 1. Animación del logo SVG
  const svg = document.getElementById("logo-smiling-face");
  let isAnimating = false;

  if (svg) {
    // Verifica si el elemento existe
    svg.addEventListener("click", () => {
      if (isAnimating) return;

      isAnimating = true;
      svg.classList.add("jump");

      setTimeout(() => {
        svg.classList.remove("jump");
        isAnimating = false;
      }, 400); // Coincide con la duración de la animación CSS (0.4s)
    });
  }

  const header = document.getElementById("main-header");

  if (!header) {
    console.error('ERROR: No se encontró el header con ID "main-header"');
    return;
  }

  // Evento mejorado de scroll
  const handleScroll = () => {
    const shouldScroll = window.scrollY > 100;
    header.classList.toggle("scrolled", shouldScroll);

    // Debug en tiempo real
  };

  // Usa passive para mejor rendimiento
  window.addEventListener("scroll", handleScroll, { passive: true });

  // Fuerza una comprobación inicial
  handleScroll();
});
