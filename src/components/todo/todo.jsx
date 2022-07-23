import React, { useState } from "react";
import TodoList from "./todo-list/todo-list";
import cl from "./todo.module.scss";
import todoStore from "../../store/todo-store";
import TodoForm from "./todo-form/todo-form";

const Todo = ({ title }) => {
  return (
    <div className={cl.container}>
      <h1 className={cl.title}>{title}</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default Todo;
