import { NewsController } from "./controllers/news-controller.js";
import { controllersRegistry } from "./controllers-registry.js";
import { NewsView } from "./views/news-view.js";
import { Model } from "./models/model.js";

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  // Cargar la vista actual desde el hash
  loadControllerFromHash();

  // Manejar clics en enlaces con `data-view`
  document.querySelectorAll("a[data-view]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const viewId = link.getAttribute("data-view");
      navigateTo(viewId);
    });
  });

  // Detectar cambios en la URL (cuando el usuario usa "atrás" o "adelante")
  window.addEventListener("hashchange", loadControllerFromHash);
});

// Función para cambiar la URL con hash
function navigateTo(viewId, postId = "") {
  location.hash = `#/${viewId}${postId ? `/${postId}` : ""}`;
}

// Función que carga el controlador basado en el hash de la URL
async function loadControllerFromHash() {
  const content = document.getElementById("content");
  if (!content) return;

  content.classList.remove("slide-in", "fade-in");
  setTimeout(() => {
    content.classList.add("slide-in");
  }, 10);

  // Obtener la ruta desde el hash, eliminando `#/`
  let path = location.hash.replace("#/", "");
  if (!path) path = "news"; // Si no hay ruta, mostrar "news"

  const [viewId, postId] = path.split("/");

  const ControllerClass =
    controllersRegistry[viewId] || controllersRegistry["news"];

  if (ControllerClass) {
    const model = new Model();
    const view = new NewsView();
    const controller = new ControllerClass(model, view);

    if (postId) {
      const newsItem = await model.getNewsById(postId);
      view.render(newsItem);
    } else {
      controller.init();
    }
  } else {
    // Si la vista no existe, mostrar error y redirigir
    const view = new NewsView();
    view.render(
      "<p>Vista no encontrada. Redirigiendo a la página principal...</p>"
    );
    setTimeout(() => {
      navigateTo("news");
    }, 2000);
  }
}
