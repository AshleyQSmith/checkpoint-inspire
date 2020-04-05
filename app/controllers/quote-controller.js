import QuoteService from "../services/quote-service.js";
import store from "../store.js";

function drawQuote() {
  document.getElementById("quote").innerHTML = store.State.quote.Template
}

export default class QuoteController {
  constructor() {
    store.subscribe("quote", drawQuote);
    QuoteService.getQuote();
  }
}
 