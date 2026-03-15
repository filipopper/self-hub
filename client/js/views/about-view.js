export class AboutView {
  constructor() {
    this.content = document.getElementById("content");
    if (!this.content) {
      console.error("Element with id 'content' not found.");
    }
  }

  render() {
    this.content.innerHTML = `
  <div id="main-container" class="container">
    <div id="infobox" class="infobox">
      <div id="cabecera" class="cabecera persona">Nicolás Filipovich</div>

      <div id="profile-slider">
        <div class="slide active">
          <img src="https://media.istockphoto.com/id/1396407304/es/foto/insectos-de-europa-abejas-vista-lateral-macro-de-abeja-mel%C3%ADfera-occidental-aislada-sobre-fondo.jpg?s=612x612&w=0&k=20&c=8M5ftU8ooIDHWYs8xLKB0heFojK-MAuJiSuFi4-tp_k=" alt="Nicolás Filipovich">
          <p id="profile-description">
            Nicolás Filipovich posando junto al <a href="https://en.wikipedia.org/wiki/Lola_B99/00" target="_blank" title="Lola B99/00">Lola B99/00</a> de <a href="https://es.wikipedia.org/wiki/Gonzalo_Rodr%C3%ADguez_(piloto)" target="_blank" title="Gonchi">Gonzalo "Gonchi" Rodríguez</a> en la <a href="https://gonzalorodriguez.org/" target="_blank" title="Fundación Gonzalo Rodríguez">Fundación Gonzalo Rodríguez</a> — 2025.
          </p>
        </div>

        <div class="slide">
          <img src="https://i0.wp.com/hoycanelones.com.uy/wp-content/uploads/2025/06/Hogar-5.jpg" alt="Comisión de Amigos del Hospital">
          <p id="profile-description">
Celebración del Día del Abuelo en el Hogar de Ancianos Carlos Vercesi, junto a miembros de la Comisión de Amigos del Hospital, acompañado a su derecha por el alcalde electo de Canelones, Américo Puga, y a la derecha de este, la Concejala Miguela Trujillo — 19 de junio de 2025
          </p>
        </div>

        <div class="slide">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Teatro_Politema_de_Canelones.jpg/320px-Teatro_Politema_de_Canelones.jpg" alt="Teatro Politeama">
          <p id="profile-description">
            Asunción de Nicolás Filipovich como Concejal del Municipio de Canelones, en el marco del recambio de autoridades municipales — Teatro Politeama, 10 de julio de 2025
          </p>
        </div>
        <div class="dots">
          <span class="dot active" onclick="goToSlide(0)"></span>
          <span class="dot" onclick="goToSlide(1)"></span>
          <span class="dot" onclick="goToSlide(2)"></span>
        </div>
        <br>
      </div>
<hr>
<div id="candidacy-info-header" class="background-highlight">Información política</div>

<table id="candidacy-info-table" style="width: 100%; max-width: 480px; margin: 0 auto; border-collapse: collapse; font-family: Arial, sans-serif;">

  <tr>
    <td colspan="2" style="padding: 20px 0; text-align: center; background-color: #f9f9f9; border-bottom: 2px solid #ccc;">
      <img id="canelones-shield"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Coat_of_arms_of_Canelones_Department.svg/320px-Coat_of_arms_of_Canelones_Department.svg.png"
           alt="Escudo de Canelones" decoding="async" width="48" height="58" style="display: inline-block;">
    </td>
  </tr>

  <tr>
    <td colspan="2" style="padding: 12px 24px; text-align: center; font-size: 1.1em; color: #222; border-bottom: 1px solid #ddd;">
      Concejal del Municipio de Canelones
    </td>
  </tr>

  <tr>
    <td colspan="2" style="padding: 8px 24px 20px 24px; text-align: center; font-size: 0.9em; color: #555; background-color: #fafafa; border-bottom: 2px solid #ddd;">
      Función política desempeñada ad honórem, sin percepción de salario, viáticos ni compensación económica alguna.
    </td>
  </tr>

  <tr>
    <th scope="row" style="padding: 14px 16px; text-align: right; background-color: #f0f0f0; color: #444; width: 40%; border-right: 1px solid #ddd;">
      Período
    </th>
    <td style="padding: 14px 16px; text-align: left; background-color: #fff; color: #222; width: 60%;">
      2025–2030
    </td>
  </tr>

  <tr>
    <th scope="row" style="padding: 14px 16px; text-align: right; background-color: #f0f0f0; color: #444; border-top: 1px solid #ddd; border-right: 1px solid #ddd;">
      Alcalde
    </th>
    <td style="padding: 14px 16px; text-align: left; background-color: #fff; color: #222; border-top: 1px solid #ddd;">
      Américo Puga
    </td>
  </tr>
    <tr>
    <th scope="row" style="padding: 14px 16px; text-align: right; background-color: #f0f0f0; color: #444; border-top: 1px solid #ddd; border-right: 1px solid #ddd;">
     Responsabilidad Institucional
    </th>
    <td style="padding: 14px 16px; text-align: left; background-color: #fff; color: #222; border-top: 1px solid #ddd;">
      Integrante de la Comisión de Desarrollo Humano
    </td>
  </tr>

</table>

</table>
<hr>
<div id="candidacy-info-header" class="background-highlight">Participación comunitaria</div>

<table style="width: 100%; max-width: 480px; margin: 0 auto; border-collapse: collapse; font-family: Arial, sans-serif;">
 <tr>
    <td colspan="2" style="padding: 20px 0; text-align: center; background-color: #f9f9f9; border-bottom: 2px solid #ccc;">
      <img id="canelones-shield"
           src="https://www.hospitaldecanelones.com/images/logo-nuevo-hc.png"
           alt="Hospital de Canelones" decoding="async" width="48" height="58" style="display: inline-block;">
    </td>
  </tr>
  <tr>
    <td colspan="2" style="padding: 12px 24px; text-align: center; font-size: 1.1em; color: #222; border-bottom: 1px solid #ddd;">
      Miembro de la Comisión de Amigos del Hospital Dr. Francisco Soca
    </td>
  </tr>

  <tr>
    <td colspan="2" style="padding: 8px 24px 20px 24px; text-align: center; font-size: 0.9em; color: #555; background-color: #fafafa; border-bottom: 2px solid #ddd;">
      Participación civil orientada al fortalecimiento del hospital público mediante acciones solidarias, voluntariado y diálogo con las autoridades de salud.
    </td>
  </tr>

</table>


<hr>
<div id=personal-info-header class=background-highlight>Información personal</div>
<table id=personal-info-table>


<tr>
<th scope=row>Nombre de nacimiento</th>
<td>Johan Nicolás Filipovich Perdomo</td>
</tr>
<tr>
<th scope=row>Nacimiento</th>
<td>24 de junio de 2004 (21&nbsp;años)<br>Canelones (Uruguay)</td>
</tr>
<tr>
<th scope=row>Nacionalidad</th>
<td>
<div id=flag-container class=flag-container>
Uruguaya <img id=uruguay-flag src=https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/512px-Flag_of_Uruguay.svg.png?20240601000842 alt="Bandera de Uruguay" decoding=async width=20 height=13 class=mw-file-element>
</div>
</td>
</tr>
<tr>
<th scope=row>Religión</th>
<td>
<a href=https://es.wikipedia.org/wiki/Iglesia_cat%C3%B3lica target=_blank class=mw-redirect title="Iglesia Católica">Catolicismo</a>
</td>
</tr>
</table>
<hr>
<div id=family-info-header class=background-highlight>Familia</div>
<table id=family-info-table>
<tr>
<th scope=row>Padres</th>
<td>Sara Rodelí Perdomo<br>Fernando Filipovich</td>
</tr>
<tr>
<th scope=row>Pareja</th>
<td> Alexandra Callejas Cáceres (<abbr title=noviazgo>nov.</abbr>&nbsp;2020 - presente) </td>
</tr>
</table>
<hr>
<div id=education-info-header class=background-highlight>Educación</div>
<table id=education-info-table>
<tr>
<th scope=row>Educación</th>
<td>
<a href=https://es.wikipedia.org/wiki/Universidad_del_Trabajo_del_Uruguay target=_blank title="Universidad del Trabajo del Uruguay">Universidad del Trabajo del Uruguay</a> <small>(2018-2023)</small>
<a href=https://ifdcanelones.cfe.edu.uy/ target=_blank title="IFD Juan Amós Comenio"><br>Instituto de Formación Docente Juan Amós Comenio</a> <small>(Magisterio; en curso)</small>
<br>
<a href=https://es.wikipedia.org/wiki/Universidad_de_la_Rep%C3%BAblica target=_blank title="Universidad de la República">Universidad de la República</a>
<small>(Lic. en Educación; en curso)</small>
<br>
</td>
</tr>
</table>
<hr>
<div id=professional-info-header class=background-highlight>Información profesional</div>
<table id=professional-info-table>
<tr>
<th scope=row>Ocupación</th>
<td>Activista y Político</td>
</tr>
<tr>
<th scope=row>Años activo</th>
<td>desde 2023</td>
</tr>
<tr>
<th scope=row>Movimiento</th>
<td>
<ul id=movement-list class=plainlist>
<a href=https://es.wikipedia.org/wiki/Conservadurismo target=_blank>Conservadurismo</a><br>
<a href=https://es.wikipedia.org/wiki/Minarquismo target=_blank>Minarquismo</a><br>
<a href=https://es.wikipedia.org/wiki/Paleolibertarismo target=_blank>Paleolibertarismo</a><br>
</ul>
</td>
</tr>
<tr>
<th scope=row>Partido político</th>
<td>
<div id=political-party-flag class=flag-container>
<a href=https://es.wikipedia.org/wiki/Partido_Nacional_(Uruguay) target=_blank>Partido Nacional</a>
<img id=national-party-flag src=//upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Flag_of_the_National_Party_%28Uruguay%29.svg/20px-Flag_of_the_National_Party_%28Uruguay%29.svg.png alt="Bandera del Partido Nacional" decoding=async width=20 height=13 class=mw-file-element>
</div>
</td>
</tr>
<tr>
<th scope=row>Afiliaciones</th>
<td>
<ul id=affiliations-list class=plainlist>
<a href=https://x.com/LibertarioUy target=_blank> Partido Libertario del Uruguay&nbsp;(PLU)</a><small>(2024-2025)</small><br>
<a href=https://x.com/PPLuy_ target=_blank> Plataforma por la Libertad&nbsp;(PPL)</a><small>(2025-2025)</small><br>
</ul>
</td>
</tr>
</table>
<hr>
<div id=signature-header class=background-highlight>Firma</div>
<div id=signature-container class=signature>
<img id=signature-image src=../client/assets/img/signature.svg alt="Firma de Nicolás Filipovich" decoding=async width=175 height=62 class=mw-file-element>
</div>
</div>
<div id=categories-container class=categories>
<div id=biography-category class=category>
<h2>
<h2 id=biography-header>Biografía</h2>
<div id=biography-description>
<p><strong>Johan Nicolás Filipovich Perdomo</strong> (Canelones, 24 de junio de 2004) es un político uruguayo de perfil heterodoxo e integrante del <i>Partido Nacional</i>. Su irrupción en la escena política ocurrió en 2023, destacándose por su enfoque crítico y su disposición a desafiar las estructuras tradicionales.</p>
</div>
<div id=biography-family>
<p>Su linaje familiar está estrechamente vinculado a la tradición política nacionalista. Es sobrino segundo de <strong>Alberto Perdomo Gamarra</strong>, destacado dirigente del Partido Nacional nacido en Santa Lucía, Canelones, quien fue tres veces electo como diputado por ese departamento (2000–2017), presidente de la Cámara de Diputados (2008–2009) e integrante del Directorio del partido. Inició su militancia en la resistencia a la dictadura cívico-militar, participando en movimientos estudiantiles y en la juventud de <i>Por la Patria</i>, y más tarde fue fundador de <i>Propuesta Nacional</i> y <i>Alianza Canelones</i>. En su trayectoria combinó vocación política con un compromiso firme hacia el desarrollo del interior y las juventudes.</p>
<p> Asimismo, Filipovich es tataranieto de <strong>Guillermo Perdomo</strong>, referente histórico del nacionalismo uruguayo y figura central en la comunidad de Progreso, Canelones. Tras una temprana militancia herrerista, Guillermo integró el <i>Movimiento Popular Nacionalista</i> de Daniel Fernández Crespo y fue uno de los fundadores de <i>Por la Patria</i>, acompañando a Wilson Ferreira Aldunate. Fue edil de Las Piedras por tres períodos, presidente del Concejo Departamental de Canelones en 1963, y diputado en las legislaturas de 1966 y 1971. Tuvo además una activa vida gremial como productor lechero, presidió instituciones sociales y deportivas locales, fundó periódicos como <i>Democracia</i> y <i>Jornada</i>, y escribió durante décadas en <i>Progreso al Día</i>, donde dejó un valioso archivo de memoria colectiva. Su legado combina vocación pública, compromiso comunitario y fidelidad a los ideales nacionalistas.</p>
<p>Su madre, <strong>Sara Rodelí Perdomo</strong>, aunque nunca ocupó cargos públicos, fue una figura clave del activismo socioambiental en Uruguay, particularmente durante la crisis de contaminación por plomo en el barrio Mullins (Canelones), a comienzos de los años 2000. Su involucramiento comenzó tras la diagnosis de plombemia en sus hijos, lo que la llevó a descubrir que el suelo de su hogar —ubicado cerca de la planta industrial de ALUR S.A.— presentaba niveles de plomo 52 veces superiores al límite permitido. Ante esta situación, denunció públicamente la responsabilidad de la empresa en la intoxicación masiva que afectó a un centenar de niños en la zona.</p>
<p>Como consecuencia, Sara enfrentó represalias, incluyendo amenazas anónimas, atentados contra su vida, ataques incendiarios al taller familiar y la detención de su esposo, Fernando Filipovich, bajo acusaciones de "autoatentado", en un intento de desacreditar la denuncia. Pese a las presiones, llevó el caso hasta la Suprema Corte de Justicia, logrando visibilizar la relación entre las prácticas industriales negligentes y los efectos sobre la salud pública, marcando un punto de inflexión en la conciencia ambiental del país.</p>
<p>Por línea paterna, Filipovich desciende de inmigrantes croatas, parte del grupo de los pueblos eslavos del sur, junto con serbios, bosnios, montenegrinos, búlgaros, eslovenos y macedonios. Su bisabuelo huyó de la entonces Yugoslavia durante la Segunda Guerra Mundial, escapando de la ocupación nazi, la guerra civil interna y la violencia entre facciones como los partisanos, chetniks y el régimen fascista Ustasha. Muchos desplazados de ese conflicto encontraron refugio en América del Sur, y Uruguay fue uno de los destinos elegidos. Esta historia de exilio y reconstrucción marcó profundamente la visión de Filipovich sobre la libertad, la soberanía individual y la resistencia frente a los regímenes autoritarios. Interpreta el escape de su bisabuelo como un símbolo de la necesidad de defender la autonomía personal frente al poder coercitivo, lo que se refleja en su énfasis en la descentralización política y su propuesta de un "orden libre, pero estructurado".</p>
</div>
<div id=biography-personal>
<p>En el ámbito personal, mantiene un vínculo sentimental con <strong>Alexandra Callejas Cáceres</strong>, sobrina nieta de <strong>Artemio Camargo Crespo</strong>, considerado un mártir por la causa democrática boliviana.</p>
</div>
<div id=philosophy-category class=category>
<h2>
<h2 id=philosophy-header>Filosofía Política</h2>
<p id=philosophy-description>
La propuesta política de Filipovich se distingue por su adhesión a corrientes paleolibertarias, desarrollando un enfoque que conjuga un modelo de mercado completamente desregulado con principios de orden y justicia restaurativa. Esta visión, que ha denominado "Mercado Libre Dionisiaco Ordenado", promueve un entorno de libertad económica y cultural plena, contrarrestando lo que él considera como el desorden fomentado por sectores progresistas. Según su filosofía, la libertad sin estructuras adecuadas inevitablemente degenera en caos y decadencia social.
</p>
<p id=philosophy-principles>
Filipovich se posiciona como defensor acérrimo de la propiedad privada, la descentralización radical del poder político y la eliminación sistemática de la injerencia estatal en la esfera de libertades individuales. Paralelamente, sostiene la necesidad de un marco de seguridad firme que garantice la aplicación de penas proporcionales a los delitos cometidos. Su activismo se extiende hacia el libre acceso a la información, la fiscalización ciudadana del poder político, la ética en la gestión pública, la defensa de la soberanía individual y la promoción de derechos naturales y autonomía personal frente a los mecanismos de coerción estatal.
</p>
</h2></div>
<div id=initiatives-category class=category>
<h2>
<h2 id=initiatives-header>Iniciativas Profesionales</h2>
<p id=initiatives-description>
La trayectoria de Filipovich, aunque breve debido a su juventud, no se limita al ámbito político. Ha concebido y desarrollado diversas iniciativas que reflejan su visión multidisciplinaria:
</p>
<p id=filipnization>
Filipnization constituye un movimiento artístico y tecnológico que integra múltiples proyectos en diversas disciplinas, fusionando creatividad, innovación y pensamiento disruptivo. El objetivo fundamental de esta iniciativa es trascender las estructuras tradicionales del arte y la tecnología mediante la promoción de la experimentación libre y la descentralización de la producción cultural. Este movimiento abarca desde plataformas digitales de expresión y desarrollo tecnológico hasta proyectos audiovisuales, musicales y literarios que desafían los paradigmas establecidos, generando impacto tanto en el ámbito estético como conceptual.
</p>
<p id=meowpany>
The Meowpany representa su incursión en el desarrollo web con un distintivo enfoque filantrópico. Esta empresa destina sistemáticamente parte de sus ingresos al apoyo de organizaciones y causas comprometidas con el bienestar animal, estableciendo un modelo de negocio que integra responsabilidad social empresarial.
</p>
<p id=toinet>
Toinet emerge como un espacio digital anónimo que Filipovich describe metafóricamente como "el baño público del internet". Esta plataforma implementa un sistema donde los mensajes publicados se eliminan automáticamente cada 24 horas, constituyéndose como un medio de expresión efímera que protege la privacidad y fomenta la libertad comunicativa.
</p>
<p id=chocovan-damme>
ChocoVan-Damme materializa su visión empresarial en el sector gastronómico, especializándose en recetas de chocolate sin gluten. Este emprendimiento ofrece alternativas para personas con enfermedad celíaca y productos artesanales inspirados en la repostería tradicional yugoslava, combinando innovación culinaria con tradición.
</p>
</h2></div>
<div id=governance-category class=category>
<h2>
<h2 id=governance-header>Modelo de Gobernanza</h2>
<p id=governance-description>
El paradigma de gobernanza propuesto por Filipovich contempla una reducción drástica del aparato estatal a su mínima expresión. Según este modelo, el Estado limitaría sus funciones exclusivamente a garantizar seguridad, justicia e infraestructura básica, mientras que el amplio espectro de responsabilidades restantes serían asumidas por la sociedad civil y los mecanismos de mercado. Esta postura ha generado controversia dentro del escenario político uruguayo, particularmente por su enfoque sobre la pena capital, la cual considera viable dentro de un sistema judicial donde la familia de la víctima tenga la potestad de exigir sanciones proporcionales al daño sufrido, incluyendo la ejecución en casos de homicidios con agravantes.
</p>
<p id=governance-support>
Este posicionamiento ha creado distancia entre Filipovich y los sectores más centristas dentro del Partido Nacional; sin embargo, ha encontrado respaldo significativo entre aquellos segmentos de la población que demandan respuestas más contundentes frente a la criminalidad.
</p>
</h2></div>
<div id=economic-category class=category>
<h2>
<h2 id=economic-header>Marco Económico: Mercado Libre Dionisiaco Ordenado</h2>
<p id=economic-description>
La propuesta económica de Filipovich establece un claro distanciamiento de los modelos económicos mixtos y del liberalismo clásico, corrientes que admiten cierto grado de intervención estatal. En su concepción, la economía debe constituir un reflejo auténtico y sin distorsiones de la voluntad individual, libre de restricciones impuestas por estructuras estatales que, según su análisis, obstaculizan el funcionamiento óptimo del mercado y frenan los procesos de innovación.
</p>
<p id=economic-taxation>
Para implementar esta visión, propone la eliminación casi total de cargas impositivas, manteniendo exclusivamente aquellos tributos estrictamente necesarios para el sostenimiento de la seguridad ciudadana y la infraestructura esencial. Asimismo, plantea un proceso de privatización integral de sectores como educación, salud y transporte, que pasarían a operar bajo principios de competencia y eficiencia propios del sector privado.
</p>
<p id=economic-freedom>
Desde esta perspectiva, Filipovich argumenta que la auténtica libertad económica solo puede materializarse en un entorno de mercado completamente desregulado, donde el individuo no se encuentre sometido a normativas estatales ni a monopolios que gozan de protección política. Su rechazo al proteccionismo y al asistencialismo estatal se fundamenta en la convicción de que estos mecanismos generan dependencia crónica y debilitan la iniciativa privada que considera motor del desarrollo. En su modelo, Uruguay debe adoptar una apertura económica integral que lo posicione como nodo global de comercio e inversión, donde la competencia y la creatividad constituyan los ejes fundamentales del desarrollo nacional.
</p>
<p id=economic-vouchers>
Para viabilizar su propuesta, sugiere implementar un sistema tributario minimalista, con una tasa única de baja cuantía que garantice la financiación de servicios esenciales sin representar una carga excesiva para los contribuyentes. Complementariamente, propone la creación de zonas económicas especiales que funcionen como laboratorios de desregulación total, con la intención de expandir progresivamente este modelo al resto del territorio nacional.
</p>
<p id=economic-education>
En los ámbitos educativo y sanitario, su planteamiento incluye un sistema de vouchers mediante el cual el Estado financiaría el acceso ciudadano a servicios privados, fomentando mecanismos de competencia sin desproteger a los sectores más vulnerables de la población.
</p>
</h2></div>
<div id=cultural-category class=category>
<h2>
<h2 id=cultural-header>Enfoque Cultural: Cultura Dionisiaca con Estructura</h2>
<p id=cultural-description>
En el ámbito cultural, Filipovich introduce el concepto de Mercado Libre Dionisiaco, reinterpretando el principio de libertad aplicado a las manifestaciones artísticas, el entretenimiento y la vida social. Esta propuesta aspira a transformar Uruguay en un epicentro de creatividad, turismo y gastronomía de excelencia, diferenciándose tanto de la cultura masificada como del hedonismo descontrolado que atribuye a corrientes progresistas.
</p>
<p id=cultural-funding>
Según su concepción, las manifestaciones culturales deben financiarse exclusivamente mediante mecanismos de mercado y mecenazgo privado, prescindiendo de intervenciones estatales y subsidios que, a su juicio, fomentan la mediocridad artística o responden a agendas ideológicas predeterminadas.
</p>
<p id=cultural-responsibility>
A diferencia de posiciones libertarias más radicales que propugnan un acceso irrestricto a sustancias psicoactivas y otras prácticas asociadas al libertinaje, Filipovich defiende un modelo de placer responsable en el que se mantendría la prohibición del narcotráfico y el consumo excesivo de drogas, evitando que la desregulación derive en deterioro del tejido social. Sin embargo, su enfoque prioriza la educación y la responsabilidad individual por encima de prohibiciones absolutas.
</p>
<p id=cultural-autonomy>
Su conceptualización de la libertad cultural se fundamenta en la autonomía del individuo dentro de un marco de valores y estándares de calidad, promoviendo un entorno de alta cultura y entretenimiento sofisticado que no desemboque en degradación moral ni descontrol social.
</p>
</h2></div>
<div id=justice-category class=category>
<h2>
<h2 id=justice-header>Sistema de Justicia y Marco de Seguridad</h2>
<p id=justice-description>
Entre los aspectos más controvertidos de la propuesta política de Filipovich destaca su enfoque en materia de justicia y seguridad. En contraposición a los modelos garantistas que priorizan la rehabilitación del delincuente sobre los derechos de las víctimas, su visión plantea un sistema judicial basado en principios de restitución y proporcionalidad. En este paradigma, las penas no serían determinadas únicamente por el aparato estatal, sino que la familia de la víctima tendría el derecho legítimo de exigir sanciones equiparables al daño padecido.
</p>
<p id=justice-punishment>
Para dar viabilidad a su propuesta, sugiere la implementación de cadena perpetua con obligatoriedad laboral para criminales convictos por delitos de extrema gravedad, asegurando que el delincuente compense parcialmente el daño infligido a la sociedad. Paralelamente, propone un sistema de justicia restaurativa que otorgue mayor participación a las víctimas durante el proceso judicial, pero dentro de un marco legal claramente definido que prevenga la justicia por mano propia.
</p>
<p id=justice-security>
Desde una perspectiva más amplia, Filipovich sostiene que el Estado debe adoptar una política de tolerancia cero frente a la criminalidad, descentralizando los mecanismos de seguridad y permitiendo que la sociedad civil asuma un rol más protagónico en la prevención y control del delito. En este sentido, su modelo contempla la existencia de sistemas de seguridad privada y la legalización plena del derecho a la autodefensa, argumentando que el ciudadano no debe depender exclusivamente del aparato estatal para proteger su integridad física y patrimonio.
</p>
<p id=justice-reform>
Adicionalmente, propone una reforma estructural del sistema judicial orientada a eliminar procesos burocráticos y agilizar los procedimientos legales, evitando que los delincuentes se beneficien de dilaciones procesales. En su visión, las penas deben caracterizarse por su ejemplaridad y aplicación expeditiva, garantizando proporcionalidad entre el castigo y el crimen cometido, y asegurando que las víctimas obtengan justicia efectiva.
</p>
</h2></div>
<div id=strategy-category class=category>
<h2>
<h2 id=strategy-header>Estrategia Política dentro del Partido Nacional</h2>
<p id=strategy-description>
Históricamente, el Partido Nacional ha constituido un espacio de convergencia entre corrientes de liberalismo económico y conservadurismo social, aunque en distintas etapas ha mantenido un componente estatista significativo. Filipovich busca introducir una corriente paleolibertaria dentro de esta formación política, reivindicando principios de soberanía individual, descentralización extrema y justicia firme, sin que esto suponga una ruptura con la identidad histórica del nacionalismo uruguayo.
</p>
<p id=strategy-approach>
Para alcanzar este objetivo, implementa una estrategia que conjuga elementos pragmáticos y radicales, evitando ser percibido como un agente disruptivo carente de fundamento ideológico. Según su enfoque, la clave para consolidar apoyo dentro del Partido Nacional radica en demostrar que la reducción del aparato estatal y la exaltación de la autonomía individual representan una evolución natural de los principios históricos de esta formación política, y no una fractura respecto a su tradición. En este sentido, trabaja en la consolidación de su liderazgo apelando a sectores desencantados con la política tradicional, especialmente jóvenes, empresarios y ciudadanos que perciben en el estatismo un freno para el desarrollo personal y económico.
</p>
<p id=strategy-discourse>
Su discurso busca canalizar el descontento de un electorado que percibe a la dirigencia política como excesivamente moderada o ineficaz, enfatizando la necesidad de un cambio estructural y profundo. A diferencia de propuestas libertarias más abstractas o teóricas, Filipovich enfatiza la aplicación práctica de sus ideas, ilustrando mediante ejemplos concretos cómo una reducción significativa del Estado puede traducirse en prosperidad económica y estabilidad social.
</p>
<div id=vision-category class=category>
<h2>
<h2 id=vision-header>Visión: Hacia un Uruguay de Individuos Soberanos</h2>
<p id=vision-description>
La propuesta de Filipovich trasciende los límites de un programa económico o una reforma del sistema político convencional, planteando un nuevo paradigma societal donde la soberanía individual constituye el principio rector. Su concepción del Mercado Libre Dionisiaco Ordenado aspira a transformar Uruguay en un modelo de desarrollo fundamentado en la descentralización radical, la libre competencia y una cultura de excelencia, libre de interferencias estatales que impongan regulaciones, cargas impositivas o restricciones arbitrarias.
</p>
<p id=vision-impact>
Este modelo, aunque controversial, representa un desafío directo al orden político y social establecido, proponiendo una alternativa en la que la justicia se rige por principios de proporcionalidad, el mercado opera con absoluta libertad y la expresión cultural es libre pero no decadente. En un contexto caracterizado por la crisis del estatismo y el descontento generalizado con el sistema político tradicional, su propuesta emerge como una opción para aquellos sectores que aspiran a un país fundamentado en el esfuerzo individual, la meritocracia y la soberanía personal.
</p>
</h2></div>
</h2></div>
</h2></div>
</div></div>
          `;

    setTimeout(() => {
      const slides = document.querySelectorAll("#profile-slider .slide");
      const dots = document.querySelectorAll("#profile-slider .dot");
      let currentIndex = 0;
      let interval = setInterval(nextSlide, 20000);

      function showSlide(index) {
        slides.forEach((slide, i) => {
          slide.classList.toggle("active", i === index);
        });
        dots.forEach((dot, i) => {
          dot.classList.toggle("active", i === index);
        });
      }

      function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      }

      window.goToSlide = function (index) {
        currentIndex = index;
        showSlide(index);
        clearInterval(interval);
        interval = setInterval(nextSlide, 20000);
      };
    }, 0);
  }
}
