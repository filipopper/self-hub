export class Model {
  constructor(postsDir = "./posts") {
    this.postsDir = postsDir.endsWith("/") ? postsDir.slice(0, -1) : postsDir;
  }

  async loadJsonFile(filePath) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Error loading file: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error loading JSON file:", error);
      return null;
    }
  }

  async loadTextFile(filePath) {
    try {
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error(`Error loading file: ${response.status}`);
      }
      return await response.text();
    } catch (error) {
      console.error("Error loading text file:", error);
      return "";
    }
  }

  async getNews() {
    const news = [];
    const postsIndex = await this.loadJsonFile(`${this.postsDir}/index.json`);

    if (!Array.isArray(postsIndex)) {
      console.warn("index.json is not an array or is empty");
      return [];
    }

    for (const post of postsIndex) {
      try {
        const article = await this.loadJsonFile(
          `${this.postsDir}/${post}/article.json`
        );
        const content = await this.loadTextFile(
          `${this.postsDir}/${post}/content.md`
        );
        const thumbnail = `${this.postsDir}/${post}/thumbnail.jpg`;

        if (!article || !article.title || !article.description) {
          console.warn(`Skipping invalid post: ${post}`);
          continue;
        }

        const newsItem = {
          ...article,
          content,
          thumbnail,
          id: post,
          tags: article.tags || [], // Asegurar que los tags existan o sean un array vacío
        };

        news.push(newsItem);
      } catch (error) {
        console.error(`Error loading post ${post}:`, error);
      }
    }

    // Ordenar las noticias por fecha (de más reciente a más antigua)
    const sortedNews = news.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA; // Orden descendente (más reciente primero)
    });

    return sortedNews;
  }

  async getNewsById(id) {
    try {
      const article = await this.loadJsonFile(
        `${this.postsDir}/${id}/article.json`
      );
      const content = await this.loadTextFile(
        `${this.postsDir}/${id}/content.md`
      );
      const thumbnail = `${this.postsDir}/${id}/thumbnail.jpg`;

      if (!article || !article.title || !article.description) {
        console.error(`Invalid post data for id: ${id}`);
        return null;
      }

      return {
        ...article,
        content,
        thumbnail,
        id,
        tags: article.tags || [], // Asegurar que los tags existan o sean un array vacío
      };
    } catch (error) {
      console.error(`Error loading news item ${id}:`, error);
      return null;
    }
  }
}
