import "./App.css";
import { FC, useState } from "react";
import ToDoList from "./components/ToDoList";
import { ITask } from "./Interface";
import ToDoForm from "./components/ToDoForm";

const App: FC = () => {
  const [todos, setTodos] = useState<ITask[]>([]);

  const handleAdd = (task: {
    id: number;
    taskName: string;
    isDone: boolean;
  }) => {
    setTodos((list) => [...list, task]);
    // setTodos([...todos,task])
  };

  return (
    <div className="todo-app">
      <h1>TO-DO-APP </h1>
      <ToDoForm onAdd={handleAdd} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
