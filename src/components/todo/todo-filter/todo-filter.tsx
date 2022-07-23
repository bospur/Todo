import React, { useEffect, useState } from "react";
import cl from "./todo-filter.module.scss";
import todoStore from "../../../store/todo-store";

const TodoFilter = () => {
  const [value, setValue] = useState("all");

  const clickHandler = (e: any): void => {
    setValue(e.target.dataset.value);
  };

  useEffect(() => {
    todoStore.setFilter(value);
  }, [value]);

  const borderBottom = "2px solid rgba(169, 169, 253, 1)";
  return (
    <div className={cl.wrapper} onClick={clickHandler}>
      <div
        className={cl.tab}
        data-value="all"
        style={value === "all" ? { borderBottom } : {}}
      >
        Все
      </div>
      <div
        className={cl.tab}
        data-value="completed"
        style={value === "completed" ? { borderBottom } : {}}
      >
        Выполненные
      </div>
      <div
        className={cl.tab}
        data-value="uncompleted"
        style={value === "uncompleted" ? { borderBottom } : {}}
      >
        Невыполненные
      </div>
    </div>
  );
};

export default TodoFilter;
