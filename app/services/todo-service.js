import store from "../store.js";
import ToDo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/AshleyS/todos/",
  timeout: 9000
});

class TodoService {
  getTodos() {
    console.log("Getting the Todo List");
    todoApi.get()
    .then(res => {
      let results = res.data.data.map(rawData => new ToDo(rawData));
      store.commit('todos', results)})
  }

  addTodoAsync(todo) {
    todoApi.post("", todo)
    .then(res => {this.getTodos()})
  }

  toggleTodoStatusAsync(todoId) {
    let toggledTodo = store.State.todos.find(todo => todo.id == todoId)
    if (toggledTodo.completed == false){
      let toggledTodo = {completed: true}
    } else {
      let toggledTodo = {completed: false}
    }
    todoApi.put('todoId', toggledTodo)
    .then(res => {this.getTodos()})

    //TODO Make sure that you found a todo,
    //		and if you did find one
    //		change its completed status to whatever it is not (ex: false => true or true => false)
    //TODO do you care about this data? or should you go get something else?
  }

  removeTodoAsync(todoId) {
    todoApi.delete(todoId)
    .then(res => {this.getTodos()})
  }
}

const todoService = new TodoService();
export default todoService;
