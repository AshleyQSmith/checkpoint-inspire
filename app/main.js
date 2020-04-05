import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import ImageController from "./controllers/image-controller.js"
import QuoteController from "./controllers/quote-controller.js"


//TODO Dont forget to register all your controllers
class App {
  todoController = new TodoController();
  weatherController = new WeatherController();
  imageController = new ImageController();
  quoteController = new QuoteController();

}

window["app"] = new App();
