export default class Image {

  constructor (data) {
    this.imgURL = data.large_url
  }

  get Template(){
    return `
    <img src="${this.imgURL}" alt="" style="width:100%;">

  `
  }
}