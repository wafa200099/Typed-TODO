import React, { useRef, FC, FormEvent, useState } from "react";


interface Props {
  onAdd: (task: { id: number; taskName: string; isDone: boolean }) => void;
}
const ToDoForm: FC<Props> = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = (e: FormEvent) => {
    e.preventDefault();
    if (!task) {
      return;
    }
    onAdd({ id: Date.now(), taskName: task, isDone: false });
    setTask("");
  };

  return (
    <form
      className="todo-form"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a Task"
        className="todo-input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="todo-button">
        Add ToDo
      </button>
    </form>
  );
};

export default ToDoForm;
