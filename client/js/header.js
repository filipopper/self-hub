document.addEventListener("DOMContentLoaded", () => {
  // Registrar Service Worker (PWA)
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/client/js/service-worker.js", { scope: "/" })
      .catch(() => {}); // silencioso en file://
  }

  // Logo bounce
  const logo = document.getElementById("logo-smiling-face");
  let bouncing = false;
  logo?.addEventListener("click", () => {
    if (bouncing) return;
    bouncing = true;
    logo.classList.add("jump");
    setTimeout(() => { logo.classList.remove("jump"); bouncing = false; }, 550);
  });

  // Dark mode toggle
  const darkBtn = document.getElementById("dark-mode-toggle");
  const html    = document.documentElement;
  const saved   = localStorage.getItem("theme");
  if (saved === "dark") html.setAttribute("data-theme", "dark");
  darkBtn?.addEventListener("click", () => {
    const isDark = html.getAttribute("data-theme") === "dark";
    html.setAttribute("data-theme", isDark ? "light" : "dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
    if (darkBtn) darkBtn.setAttribute("aria-label", isDark ? "Activar modo oscuro" : "Desactivar modo oscuro");
    if (darkBtn) darkBtn.innerHTML = isDark ? '<i class="ri-moon-line" aria-hidden="true"></i>' : '<i class="ri-sun-line" aria-hidden="true"></i>';
  });
  // Sync icon on load
  if (darkBtn && saved === "dark") darkBtn.innerHTML = '<i class="ri-sun-line" aria-hidden="true"></i>';

  // Scroll → header scrolled
  const header = document.getElementById("main-header");
  const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 80);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
