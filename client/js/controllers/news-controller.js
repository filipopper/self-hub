import { NewsView } from "../views/news-view.js"; // Asegurar la extensión .js
import { Model } from "../models/model.js"; // Asegurar que exista el modelo

export class NewsController {
  constructor(model, view) {
    this.model = model;
    this.view = view; // Usa NewsView, no View
  }

  render(newsData) {
    this.view.render(newsData); // Renderiza las noticias
  }

  async init() {
    try {
      const newsData = await this.model.getNews();
      this.view.render(newsData); // Asegúrate de que renderiza NewsView
    } catch (error) {
      console.error("Error loading news data:", error);
      this.view.render("<p>Error loading news data.</p>");
    }
  }

  async loadNews(id) {
    try {
      const newsData = await this.model.getNewsById(id);
      this.view.render(newsData);
    } catch (error) {
      console.error("Error loading news item:", error);
      this.view.render({ error: "Error al cargar la noticia." }); // Mejor manejo de errores
    }
  }
}
