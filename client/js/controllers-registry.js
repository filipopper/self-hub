import { NewsController } from "./controllers/news-controller.js";
import { StoreController } from "./controllers/store-controller.js";
import { ContactController } from "./controllers/contact-controller.js";
import { AboutController } from "./controllers/about-controller.js";

export const controllersRegistry = {
  news: NewsController,
  store: StoreController,
  contact: ContactController,
  about: AboutController,
};
