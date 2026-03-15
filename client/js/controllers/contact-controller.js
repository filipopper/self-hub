import { ContactView } from "../views/contact-view.js";

export class ContactController {
  constructor(model) {
    this.model = model;
    this.view = new ContactView();
  }

  init() {
    this.view.render();
  }
}
