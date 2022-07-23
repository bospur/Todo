import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import todoStore, { ITodoStore } from "../../../store/todo-store";
import TodoItem from "../todo-item/todo-item";
import cl from "./todo-list.module.scss";

const TodoList: FC = observer(() => {
  const filter = todoStore.filter;
  let todos = [] as Array<ITodoStore>;
  if (filter === "all") {
    todos = todoStore.todos;
  }
  if (filter === "completed") {
    todos = todoStore.todos.filter((todo) => todo.completed);
  }
  if (filter === "uncompleted") {
    todos = todoStore.todos.filter((todo) => !todo.completed);
  }
  return (
    <ul className={cl.list}>
      {!todos.length && <h2 className={cl.subtitle}>Пока что пусто..</h2>}
      {todos?.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
});

export default TodoList;
