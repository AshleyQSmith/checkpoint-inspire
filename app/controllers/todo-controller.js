import TodoService from "../services/todo-service.js";
import store from "../store.js"; 

function _drawTodos() {
  let toDos = store.State.todos
  let template = ''
  toDos.forEach(todo => template += todo.Template)
  document.getElementById("todos").innerHTML = template
}

export default class TodoController {
  constructor() {
    TodoService.getTodos();
    store.subscribe('todos', _drawTodos);
  }

  addTodo(event) {
    event.preventDefault()
    let formData = event.target
    let todo = {description: formData.taskName.value}
    TodoService.addTodoAsync(todo);
    formData.reset()
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be toggled
  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
