import { observer } from "mobx-react-lite";
import React from "react";
import DeletIcon from "../../ui/icons/delet-icon/delet-icon";
import cl from "./todo-item.module.scss";
import todoStore from "../../../store/todo-store";

const TodoItem = observer(({ todo }) => {
  const background = todo.completed
    ? "rgba(169, 169, 253, 0.794)"
    : "rgba(169, 253, 180, 0.794)";

  const onChange = () => {
    todoStore.completeTodo(todo);
  };
  const removeTodo = () => {
    todoStore.removeTodo(todo.id)
  }

  return (
    <li className={cl.item} style={{ background }}>
      <input
        type="checkbox"
        checked={todo.completed}
        className={cl.input}
        onChange={onChange}
      />
      <p className={cl.title}>{todo.title}</p>
      <DeletIcon  onClick={removeTodo} />
    </li>
  );
});

export default TodoItem;
