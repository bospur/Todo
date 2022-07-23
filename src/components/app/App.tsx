import React, { FC } from "react";
import Todo from "../todo/todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Todo title={"Список задач!"} />
    </div>
  );
}

export default App;
