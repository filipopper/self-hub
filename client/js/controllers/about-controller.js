import { AboutView } from "../views/about-view.js";

export class AboutController {
  constructor(model) {
    this.model = model;
    this.view = new AboutView();
  }

  init() {
    this.view.render();
  }
}
