import React, { useState } from "react";
import todoStore from "../../../store/todo-store";
import cl from "./todo-form.module.scss";

const TodoForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    id: null,
    completed: false,
  });
  const onSubmint = (e) => {
    e.preventDefault();

    todoStore.addTodo({
      ...form,
      id: Date.now(),
    });

    setForm({
      title: "",
      description: "",
      id: null,
      completed: false,
    });
  };

  const inputChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={onSubmint} className={cl.form}>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Заголовок"
        value={form.title}
        onChange={inputChangeHandler}
        required
      />
      <input
        id="description"
        type="text"
        name="description"
        placeholder="Описание"
        value={form.description}
        onChange={inputChangeHandler}
      />
      <button className={cl.btn}>Добавить</button>
    </form>
  );
};

export default TodoForm;
