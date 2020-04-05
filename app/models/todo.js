export default class ToDo {
  constructor(data) {
    this.id = data._id;
    this.completed = data.completed;
    this.user = data.user;
    this.description = data.description
  }

  get Template() {
    if (this.completed == false) {
    return `
    <div class="form-check">
    <button type="button" class="close text-dark" onclick="app.todoController.removeTodo('${this.id}')">
    <span>&times;</span>
    </button>
    <input class="form-check-input" type="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')" value="" id="defaultCheck1"/>
    <label class="form-check-label" for="defaultCheck1">${this.description}</label>  
    </div> ` }

    else {
      return `
      <div class="form-check">
      <button type="button" class="close text-dark" onclick="app.todoController.removeTodo('${this.id}')">
      <span>&times;</span>
      </button>
      <input class="form-check-input" type="checkbox" onclick="app.todoController.toggleTodoStatus('${this.id}')" value="" id="defaultCheck1" checked/>
      <label class="form-check-label" for="defaultCheck1">${this.description}</label>  
      </div> ` }
}
}