import { makeAutoObservable } from "mobx";

export interface ITodoStore {
  id: number;
  completed: boolean;
  title: string;
  description?: string;
}

class TodoStore {
  todos: Array<ITodoStore> = [
    {
        id: 1,
        completed: false,
        title: 'Сделать TODO для Априкод',
        description: 'Тестовое задание на позицию Frontend разработчика'
    }
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo: ITodoStore) {
    this.todos.push(todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(todo: ITodoStore) {
    todo.completed = !todo.completed;
  }
}

export default new TodoStore();
