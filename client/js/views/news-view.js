import { View } from "/core/view.js";

export class NewsView extends View {
  constructor() {
    super();
  }

  render(newsData) {
    if (!newsData || typeof newsData !== "object") {
      console.error("Invalid news data:", newsData);
      this.content.innerHTML = "<p>Error: Invalid news data.</p>";
      return;
    }

    if (Array.isArray(newsData)) {
      this.renderNewsList(newsData);
    } else {
      this.renderSingleNews(newsData);
    }
  }

  renderNewsList(newsList) {
    if (!Array.isArray(newsList)) {
      console.error("Invalid news list:", newsList);
      this.content.innerHTML = "<p>Error: Invalid news list.</p>";
      return;
    }

    const efemerideOfToday = this.getEfemerideOfToday();
    this.content.innerHTML = `
      <div class="announcement">
        <h3>Declaración editorial sobre el contenido de esta sección</h3>
        <p>Las publicaciones incluidas en esta sección son elaboradas por un equipo de <strong>periodistas independientes</strong>, dedicados a documentar iniciativas, declaraciones y proyectos vinculados a la figura de <strong>Nicolás Filipovich</strong>. Ante la limitada cobertura que su actividad política recibe en los medios tradicionales, este espacio se propone como una <strong>fuente alternativa de información relevante</strong> y contextualizada.</p>
        <p>La producción de estos contenidos es financiada mediante <strong>aportes privados</strong> y <strong>colaboraciones voluntarias</strong>, lo que garantiza la <strong>autonomía editorial</strong> y la <strong>libertad de expresión</strong> de sus autores. Por razones profesionales y con el objetivo de preservar la integridad del proceso editorial, se ha optado por mantener en reserva la identidad de los redactores. Esta decisión no afecta el compromiso con la <strong>veracidad</strong>, el <strong>rigor periodístico</strong> ni la <strong>transparencia informativa</strong>.</p>
        <p>Este espacio no responde a intereses <strong>partidarios</strong>, <strong>corporativos</strong> ni <strong>institucionales</strong>. Su propósito es ofrecer un canal de comunicación <strong>independiente</strong> que permita una comprensión más amplia, accesible y plural sobre la trayectoria de <strong>Nicolás Filipovich</strong> y su impacto en el ámbito público.</p>
      </div>

      ${getEfemerideHtml(efemerideOfToday)}

      <div class="news-grid">
        ${newsList
          .map((news) => {
            if (!news.title || !news.description) return "";

            const tags = news.tags || [];

            return `
              <article class="news-item">
                <img src="${news.thumbnail || "default-thumbnail.jpg"}" alt="${
              news.title
            }" />
                <h4>${news.title}<span class="date"> (${new Date(
              news.date
            ).toLocaleDateString()})</span></h4>
                <p>${news.description}</p>
                <div class="news-meta">
                  <div class="tags">
                    ${tags
                      .map((tag) => `<span class="tag">${tag}</span>`)
                      .join(" ")}
                  </div>
                </div>
                <a href="#news/${news.id}" class="read-more" data-id="${
              news.id
            }">Leer más</a>
              </article>
            `;
          })
          .join("")}
      </div>
    `;

    this.addReadMoreEventListeners();
  }

  renderSingleNews(newsData) {
    if (!newsData.title || !newsData.description || !newsData.content) {
      console.error("Invalid news data:", newsData);
      this.content.innerHTML = "<p>Error: Invalid news data.</p>";
      return;
    }

    const safeHtmlContent = marked.parse(newsData.content);
    const tags = newsData.tags || [];

    let tagText = "Filipovich: Noticia sin clasificar";
    const tagMapping = {
      actualización: "Actualización",
      opinión: "Opinión",
      propuestas: "Propuestas",
      política: "Política",
      sociedad: "Sociedad",
      economía: "Economía",
      desarrollo: "Desarrollo",
    };

    for (let key in tagMapping) {
      if (tags.includes(key)) {
        tagText = `Filipovich: ${tagMapping[key]}`;
        break;
      }
    }

    this.content.innerHTML = `
      <article class="news-detail">
        <div class="content">
          <span class="date">${new Date(
            newsData.date
          ).toLocaleDateString()} - ${tagText}</span>
          ${safeHtmlContent}
        </div>
        <div class="news-meta">
          <div class="tags">
            ${tags.map((tag) => `<span class="tag">${tag}</span>`).join(" ")}
          </div>
        </div>
      </article>
    `;
  }

  // NUEVO: devuelve el tag de efeméride solo si coincide con la fecha actual
  getEfemerideOfToday() {
    const specialDates = [
      { date: "01/01", tag: "Año nuevo" },
      {
        date: "20/01",
        tag: "Aniversario del nacimiento de Alexandra Callejas 🎂",
      },
      {
        date: "07/04",
        tag: "Fundación de la Lista 74: el inicio de una causa con identidad y propósito",
      },
      {
        date: "07/04",
        tag: "Aniversario del vínculo sentimental Filipovich–Callejas 💕",
      },
      {
        date: "19/04",
        tag: "Desembarco de los Treinta y Tres Orientales (1825)",
      },
      { date: "01/05", tag: "Día Internacional de los trabajadores" },
      { date: "18/05", tag: "Batalla de Las Piedras (1811)" },
      { date: "19/06", tag: "Natalicio de José Gervasio Artigas (1764)" },
      {
        date: "24/06",
        tag: "Aniversario del nacimiento de Nicolás Filipovich 🎂",
      },
      { date: "18/07", tag: "Jura de la constitución (1830)" },
      { date: "25/08", tag: "Declaratoria de la independencia (1825)" },
      { date: "12/10", tag: "Encuentro de culturas (antes día de la raza)" },
      { date: "08/10", tag: "Éxodo del pueblo oriental (1811)" },
      { date: "31/10", tag: "Halloween" },
      { date: "02/11", tag: "Día de los difuntos" },
      { date: "24/12", tag: "Noche buena" },
      { date: "25/12", tag: "Navidad" },
      { date: "31/12", tag: "Fin de año" },
    ];

    const today = new Date();
    const formatted = today.toLocaleDateString("en-GB").slice(0, 5); // dd/mm
    const efemerides = specialDates
      .filter((e) => e.date === formatted)
      .map((e) => e.tag);
    return efemerides.length > 0 ? efemerides : null;
  }

  addReadMoreEventListeners() {
    this.content.removeEventListener("click", this.handleReadMoreClick);
    this.content.addEventListener("click", this.handleReadMoreClick.bind(this));
  }

  handleReadMoreClick(event) {
    if (event.target && event.target.matches(".read-more")) {
      event.preventDefault();
      const newsId = event.target.getAttribute("data-id");
      location.hash = `#news/${newsId}`;
    }
  }
}

// Paleta de colores armónica
const colors = [
  { bg: "#f4b400", text: "#fff8e1" },
  { bg: "#0f9d58", text: "#e0f2f1" },
  { bg: "#db4437", text: "#ffebee" },
  { bg: "#4285f4", text: "#e3f2fd" },
  { bg: "#ab47bc", text: "#f3e5f5" },
  { bg: "#ff7043", text: "#fbe9e7" },
  { bg: "#00897b", text: "#e0f2f1" },
];

// Función para obtener un color aleatorio de la paleta
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length); // Índice aleatorio
  return colors[randomIndex];
}

function getEfemerideHtml(efemerides) {
  if (!efemerides || !efemerides.length) return "";

  return (
    `<div class="efemeride-banner">🗓️ Hoy se conmemora: ` +
    efemerides
      .map((tag) => {
        const randomColor = getRandomColor(); // Obtener color aleatorio
        return `<span style="background-color: ${randomColor.bg}; color: ${randomColor.text}; padding: 0 6px; border-radius: 4px; margin-right: 6px; white-space: nowrap;">${tag}</span>`;
      })
      .join("") +
    `</div>`
  );
}
