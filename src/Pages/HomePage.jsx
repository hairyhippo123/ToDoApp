import { useState } from "react";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";

export default function HomePage() {
  const [todos, setTodos] = useState([]);
 
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6 font-medium">
      <h1 className="text-2xl font-bold text-center font-stretch-normal">Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
    </div>
  );
}
