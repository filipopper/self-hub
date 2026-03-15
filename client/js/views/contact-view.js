export class ContactView {
  constructor() {
    this.content = document.getElementById("content");
    if (!this.content) {
      console.error("Element with id 'content' not found.");
    }
  }

  render() {
    this.content.innerHTML = `
    <div class="contact-container">
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSe3z5hTk3G7a73ajsw6zwNW7VZlUWWLId5e6iQHFDCkAzIpxg/viewform?embedded=true" 
        width="100%" 
        height="2600" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
        style="border: none; max-width: %;">
        Cargando…
      </iframe>
    </div>
    `;
  }
}
