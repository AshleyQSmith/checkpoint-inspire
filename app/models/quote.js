export default class Quote {

  constructor (data) {
    this.author = data.quote.author
    this.quote = data.quote.body
  }

get Template() {
  return `
  <div>
  <h5>"${this.quote}"</h5>
  <h6>-${this.author}</h6>
  </div>
  `
}

}