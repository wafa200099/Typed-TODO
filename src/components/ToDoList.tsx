import React, { FC } from "react";
import { ITask, UpdateTask } from "../Interface";
import ToDo from "./ToDo";

interface Props {
  todos: ITask[];
  setTodos: React.Dispatch<React.SetStateAction<ITask[]>>;
}

const ToDoList: FC<Props> = ({ todos, setTodos }) => {
  const handleDeleteTask = (id: number) => {
    setTodos((list) => list.filter((task) => task.id !== id));
  };

  const handleUpdateTaskStatus = (updatedTask: UpdateTask) => {
    setTodos((list) =>
      list.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  };

  return (
    <div className="todos">
      {todos.map((task) => (
        <ToDo
          task={task}
          onDelete={handleDeleteTask}
          onUpdateTask={handleUpdateTaskStatus}
        />
      ))}
    </div>
  );
};

export default ToDoList;
