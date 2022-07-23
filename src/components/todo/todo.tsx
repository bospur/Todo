import React, { FC } from "react";
import TodoList from "./todo-list/todo-list";
import cl from "./todo.module.scss";
import TodoForm from "./todo-form/todo-form";
import TodoFilter from "./todo-filter/todo-filter";

interface ITodo {
  title: string;
}

const Todo: FC<ITodo> = ({ title }) => {
  return (
    <div className={cl.container}>
      <h1 className={cl.title}>{title}</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
};

export default Todo;
