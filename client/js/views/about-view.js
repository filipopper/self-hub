export class AboutView {
  constructor() {
    this.content = document.getElementById("content");
  }

  render() {
    this.content.innerHTML = `
<div class="about-page slide-in">

  <!-- ══ WIKI LAYOUT ══════════════════════════════════════════ -->
  <div class="wiki-layout">

    <!-- ── INFOBOX SIDEBAR ─────────────────────────────────── -->
    <aside class="wiki-infobox" aria-label="Información de Nicolás Filipovich">

      <div class="wiki-infobox-title">
        <div class="wiki-infobox-avatar">
          <img src="client/assets/img/example.webp" alt="Nicolás Filipovich" onerror="this.style.display='none'" />
        </div>
        <h3>Nicolás Filipovich</h3>
        <span class="wiki-subtitle">Concejal · Canelones</span>
      </div>

      <!-- Slider de fotos -->
      <div class="wiki-slider" id="wikiSlider">
        <div class="wiki-slide active">
          <img crossorigin="anonymous" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Canelones%2C_Uruguay_-_panoramio.jpg/640px-Canelones%2C_Uruguay_-_panoramio.jpg" alt="Día del Abuelo" loading="lazy" />
          <div class="wiki-slide-caption">Día del Abuelo en el Hogar Carlos Vercesi junto al alcalde Américo Puga — 19 jun. 2025</div>
        </div>
        <div class="wiki-slide">
          <img crossorigin="anonymous" src="https://upload.wikimedia.org/wikipedia/commons/4/46/Teatro_Politema_de_Canelones.jpg" alt="Teatro Politeama" loading="lazy" />
          <div class="wiki-slide-caption">Asunción como Concejal — Teatro Politeama de Canelones, 10 jul. 2025</div>
        </div>
      </div>
      <div class="wiki-slider-nav">
        <button class="wiki-dot active" data-slide="0" aria-label="Foto 1"></button>
        <button class="wiki-dot" data-slide="1" aria-label="Foto 2"></button>
      </div>

      <!-- Cargo -->
      <div class="wiki-infobox-section">
        <div class="wiki-section-label"><i class="ri-government-line"></i> Cargo político</div>
        <div class="wiki-crest-block">
          <img crossorigin="anonymous" src="https://upload.wikimedia.org/wikipedia/commons/7/70/Coat_of_arms_of_Canelones_Department.svg" alt="Escudo" width="32" height="39" />
          <div>
            <div class="wiki-crest-title">Concejal del Municipio de Canelones</div>
            <div class="wiki-crest-note">10 jul. 2025 – 2030 · Ad honórem<br>Alcalde: Américo Raúl Puga Espinosa</div>
          </div>
        </div>
      </div>

      <!-- Datos personales -->
      <div class="wiki-infobox-section">
        <div class="wiki-section-label"><i class="ri-user-line"></i> Datos personales</div>
        <table class="wiki-table">
          <tr><th>Nombre</th><td>Johan Nicolás Filipovich Perdomo</td></tr>
          <tr><th>Alias</th><td>Filipopper</td></tr>
          <tr><th>Nacimiento</th><td>24 jun. 2004 · Canelones, Uruguay · <em>21 años</em></td></tr>
          <tr><th>Nacion.</th><td>
            <span class="flag-wrap"><img crossorigin="anonymous" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/20px-Flag_of_Uruguay.svg.png" alt="UY" width="16" /> Uruguaya</span>&nbsp;·&nbsp;
            <span class="flag-wrap"><img crossorigin="anonymous" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg" alt="HR" width="16" /> Croata</span>
          </td></tr>
          <tr><th>Religión</th><td>Católica Apostólica Romana</td></tr>
          <tr><th>Ocup.</th><td>Político · Maestro · Desarrollador</td></tr>
        </table>
      </div>

      <!-- Física -->
      <div class="wiki-infobox-section">
        <div class="wiki-section-label"><i class="ri-body-scan-line"></i> Características físicas</div>
        <table class="wiki-table">
          <tr><th>Altura</th><td>1,86 m</td></tr>
          <tr><th>Peso</th><td>89 kg</td></tr>
          <tr><th>Ojos</th><td>Marrones (heterocromía parcial izq.)</td></tr>
          <tr><th>Cabello</th><td>Castaño</td></tr>
        </table>
      </div>

      <!-- Afiliación -->
      <div class="wiki-infobox-section">
        <div class="wiki-section-label"><i class="ri-flag-line"></i> Afiliación política</div>
        <table class="wiki-table">
          <tr><th>Desde</th><td>2023</td></tr>
          <tr><th>Partido</th><td><a href="https://es.wikipedia.org/wiki/Partido_Nacional_(Uruguay)" target="_blank" rel="noopener">Partido Nacional · Coalición Republicana</a></td></tr>
          <tr><th>Ideología</th><td>
            <ul class="wiki-list">
              <li><a href="https://es.wikipedia.org/wiki/Paleolibertarismo" target="_blank" rel="noopener">Paleolibertarismo</a></li>
              <li><a href="https://es.wikipedia.org/wiki/Minarquismo" target="_blank" rel="noopener">Minarquismo</a></li>
              <li><a href="https://es.wikipedia.org/wiki/Escuela_austriaca" target="_blank" rel="noopener">Escuela Austriaca</a></li>
              <li><a href="https://es.wikipedia.org/wiki/Conservadurismo" target="_blank" rel="noopener">Conservadurismo</a></li>
              <li>Provida · Antiglobalismo de derecha</li>
            </ul>
          </td></tr>
        </table>
      </div>

      <!-- Firma -->
      <div class="wiki-sig">
        <img src="client/assets/img/signature.svg" alt="Firma de Nicolás Filipovich" width="130" height="42" />
      </div>

    </aside>

    <!-- ── ARTÍCULO ──────────────────────────────────────────── -->
    <article class="wiki-article">

      <!-- Eyebrow -->
      <div class="wiki-eyebrow-row">
        <span class="wiki-eyebrow-chip"><i class="ri-verified-badge-line"></i> Información corroborada</span>
        <span class="wiki-eyebrow-chip wiki-chip-muted">Actualizado jul. 2026</span>
      </div>

      <h1 class="wiki-article-title">Nicolás Filipovich</h1>
      <p class="wiki-article-lead"><strong>Johan Nicolás Filipovich Perdomo</strong> (Canelones, 24 de junio de 2004), conocido como <strong>Nicolás Filipovich</strong> o por su alias digital <em>Filipopper</em>, es un político, maestro en formación y desarrollador uruguayo. Asumió como <strong>Concejal del Municipio de Canelones</strong> el 10 de julio de 2025 para el período 2025–2030, ejerciendo la función de forma <em>ad honórem</em>. Se identifica con el paleolibertarismo, la Escuela Austriaca de economía y el conservadurismo social.</p>

      <!-- TOC -->
      <nav class="wiki-toc" aria-label="Tabla de contenidos">
        <div class="wiki-toc-head"><i class="ri-list-unordered"></i> Contenidos</div>
        <ol class="wiki-toc-list">
          <li><a href="javascript:void(0)" data-scroll="wiki-formacion">Formación académica</a></li>
          <li><a href="javascript:void(0)" data-scroll="wiki-carrera">Carrera política</a></li>
          <li><a href="javascript:void(0)" data-scroll="wiki-familia">Familia y ascendencia</a></li>
          <li><a href="javascript:void(0)" data-scroll="wiki-genealogy-mount">Árbol genealógico</a></li>
          <li><a href="javascript:void(0)" data-scroll="wiki-emprendimientos">Iniciativas profesionales</a></li>
          <li><a href="javascript:void(0)" data-scroll="wiki-distinciones">Distinciones</a></li>
        </ol>
      </nav>

      <!-- Formación -->
      <section class="wiki-sec" id="wiki-formacion">
        <h2 class="wiki-sec-title">Formación académica</h2>
        <p>Filipovich realizó su educación inicial en el Jardín Maternal Privado <em>Mimosos</em> (2005–2008), orientado al aprendizaje temprano para niños con altas capacidades. Cursó la escuela primaria en la Escuela N.º 248 <em>Eustaquia Llamosa</em> y la N.º 101 <em>José Pedro Varela</em>, completando el ciclo entre 2009 y 2016.</p>
        <p>Entre 2018 y 2023 se formó en la <strong>Universidad del Trabajo del Uruguay (UTU)</strong>, donde obtuvo el título de Bachiller y Auxiliar Técnico en Informática, con especialización en desarrollo web. Actualmente cursa simultáneamente la carrera de <strong>Magisterio</strong> en el IFD Juan Amós Comenio, la <strong>Licenciatura en Ciencias de la Educación</strong> en UdelaR, el <strong>Bachelor en Administración de Empresas</strong> en University of the People, la <strong>Maestría en Ciencias Financieras</strong> en WorldQuant University, y la <strong>Licenciatura en Defensa Militar Aeroespacial</strong> en la Fuerza Aérea Uruguaya.</p>
        <p>De forma autodidacta, ha profundizado en economía austriaca y teoría monetaria a través del <strong>Mises Institute</strong>, sin titulación formal asociada a dicha formación.</p>
      </section>

      <!-- Carrera -->
      <section class="wiki-sec" id="wiki-carrera">
        <h2 class="wiki-sec-title">Carrera política</h2>
        <p>Filipovich comenzó su actividad política en 2023 afiliándose al <strong>Partido Nacional</strong> bajo la Coalición Republicana. En mayo de 2025 fue electo Concejal del Municipio de Canelones, asumiendo formalmente el cargo el 10 de julio de 2025 en una ceremonia celebrada en el <strong>Teatro Politeama de Canelones</strong>.</p>

        <h3 class="wiki-subsec-title">Comisiones municipales</h3>
        <p>En el ejercicio de su cargo integra cuatro vértices de trabajo municipal: el <strong>Vértice Productivo Ambiental</strong>, el <strong>Vértice Institucional</strong>, el <strong>Vértice Social</strong> y el <strong>Vértice Territorial</strong>. Ejerce la función de manera <em>ad honórem</em>, sin percibir remuneración por el cargo.</p>

        <div class="wiki-pullquote">
          <p>«Libertad, orden y responsabilidad: el camino hacia una sociedad próspera.»</p>
        </div>

        <h3 class="wiki-subsec-title">Posicionamiento ideológico</h3>
        <p>Se autoidentifica como <strong>paleolibertario</strong> y <strong>minarquista</strong>, defendiendo la reducción del Estado a sus funciones mínimas, el respeto irrestricto a la propiedad privada, la soberanía individual y la descentralización del poder. Desde el punto de vista económico adhiere a la <strong>Escuela Austriaca</strong>, y en lo social asume posiciones conservadoras, siendo declaradamente <strong>provida</strong> y crítico del globalismo de izquierda.</p>
      </section>

      <!-- Familia -->
      <section class="wiki-sec" id="wiki-familia">
        <h2 class="wiki-sec-title">Familia y ascendencia</h2>
        <p>Pertenece a una familia vinculada históricamente a la vida política de Canelones. Es sobrino segundo de <strong>Alberto Perdomo Gamarra</strong>, diputado en tres períodos consecutivos y presidente de la Cámara de Representantes durante 2008–2009.</p>
        <p>Tataranieto de <strong>Guillermo Perdomo</strong>, edil, diputado en dos legislaturas y fundador del movimiento político <em>Por la Patria</em>. Por línea paterna desciende de inmigrantes croatas llegados al Uruguay en el siglo XX.</p>

        <!-- ── ÁRBOL GENEALÓGICO ─────────────────────────────── -->
        <div id="wiki-genealogy-mount" style="margin-top: var(--sp-6);"></div>
      </section>

      <!-- Emprendimientos -->
      <section class="wiki-sec" id="wiki-emprendimientos">
        <h2 class="wiki-sec-title">Iniciativas profesionales</h2>
        <p>Paralelamente a su actividad política, Filipovich lleva adelante una serie de emprendimientos en los ámbitos tecnológico, cultural y gastronómico.</p>

        <h3 class="wiki-subsec-title">Filipnization</h3>
        <p>Proyecto cultural y tecnológico con iniciativas en producción digital, audiovisual y creación artística independiente.</p>

        <h3 class="wiki-subsec-title">The Meowpany™</h3>
        <p>Consultora de desarrollo web con enfoque filantrópico. Parte de sus ingresos se destina al bienestar animal.</p>

        <h3 class="wiki-subsec-title">Toinet</h3>
        <p>Plataforma de comunicación efímera basada en publicaciones anónimas con eliminación automática del contenido.</p>

        <h3 class="wiki-subsec-title">ChocoVan-Damme</h3>
        <p>Emprendimiento gastronómico especializado en productos de chocolate artesanal sin gluten.</p>
      </section>

      <!-- Distinciones -->
      <section class="wiki-sec" id="wiki-distinciones">
        <h2 class="wiki-sec-title">Distinciones</h2>
        <table class="wiki-honors-table">
          <thead>
            <tr><th>Distinción</th><th>Otorgante</th><th>Año</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>Mención honorífica</td>
              <td>Olimpiadas de Programación Ceibal</td>
              <td>—</td>
            </tr>
            <tr>
              <td><strong>Canario Destacado</strong> — Reconocimiento al Mérito Cívico Municipal</td>
              <td>Municipio de Canelones</td>
              <td>2026</td>
            </tr>
            <tr>
              <td><strong>Bendición Apostólica</strong> — Papa Leo XIV</td>
              <td>Santa Sede</td>
              <td>2025</td>
            </tr>
          </tbody>
        </table>
      </section>

    </article>
  </div>

</div>
`;

    this._initSlider();
    this._initGenealogy();
  }

  _initGenealogy() {
    const mount = this.content.querySelector('#wiki-genealogy-mount');
    if (!mount) return;
    import('../genealogy-tree.js').then(({ GenealogyTree }) => {
      this._genealogyTree = new GenealogyTree(mount);
    }).catch(err => console.warn('GenealogyTree: no se pudo cargar', err));
  }

  _initSlider() {
    setTimeout(() => {
      // ── Slider ──────────────────────────────────────────
      const slides = this.content.querySelectorAll(".wiki-slide");
      const dots = this.content.querySelectorAll(".wiki-dot");
      let cur = 0;
      let t = setInterval(() => go((cur + 1) % slides.length), 10000);
      const go = (i) => {
        slides[cur].classList.remove("active");
        dots[cur].classList.remove("active");
        cur = i;
        slides[cur].classList.add("active");
        dots[cur].classList.add("active");
      };
      dots.forEach((d) =>
        d.addEventListener("click", () => {
          clearInterval(t);
          go(+d.dataset.slide);
          t = setInterval(() => go((cur + 1) % slides.length), 10000);
        }),
      );

      // ── TOC smooth scroll (avoid hash → router conflict) ──
      this.content.querySelectorAll(".wiki-toc a[data-scroll]").forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          const target = this.content.querySelector(`#${a.dataset.scroll}`);
          if (!target) return;
          const headerH =
            document.getElementById("main-header")?.offsetHeight || 64;
          const top =
            target.getBoundingClientRect().top + window.scrollY - headerH - 16;
          window.scrollTo({ top, behavior: "smooth" });
        });
      });
    }, 0);
  }
}
