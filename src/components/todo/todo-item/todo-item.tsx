import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";
import DeletIcon from "../../ui/icons/delet-icon/delet-icon";
import cl from "./todo-item.module.scss";
import todoStore, { ITodoStore } from "../../../store/todo-store";

interface ITodoItem {
  todo: ITodoStore;
}

const TodoItem: FC<ITodoItem> = observer(({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const background = todo.completed
    ? "rgba(169, 169, 253, 1)"
    : "rgba(169, 253, 180, 1)";

  const onChange = () => {
    todoStore.completeTodo(todo);
  };
  const removeTodo = () => {
    todoStore.removeTodo(todo.id);
  };
  const descriptionOpenHandler = () => {
    if (!todo.description) return;

    setIsOpen(!isOpen);
  };
  return (
    <li className={cl.item} style={{ background }}>
      <div className={cl.info}>
        <input
          type="checkbox"
          checked={todo.completed}
          className={cl.input}
          onChange={onChange}
        />
        <p className={cl.title}>{todo.title}</p>
        <DeletIcon onClick={removeTodo} />
        {todo.description && (
          <p
            className={cl.openBtn}
            style={{ background }}
            onClick={descriptionOpenHandler}
          >
            {isOpen ? "Свернуть" : "Посмотреть описание"}
          </p>
        )}
      </div>
      {isOpen && <p className={cl.description}>{todo.description}</p>}
    </li>
  );
});

export default TodoItem;
