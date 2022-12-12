import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import AddForm from "./components/AddForm/AddForm";
import TodoList from "./components/TodoList/TodoList";
import { v4 as uuid } from "uuid";

export default function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <Header>My To do List</Header>
      <AddForm setTodos={setTodos} />
      <div>
        <TodoList name="working" todos={todos} setTodos={setTodos} />
        <TodoList name="done" todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}
