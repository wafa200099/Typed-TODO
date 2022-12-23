import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import DeleteModal from "./DeleteModal";
import { ITask, UpdateTask } from "../Interface";

type Props = {
  task: ITask;
  onDelete: (id: number) => void;
  onUpdateTask: (updatedTask: UpdateTask) => void;
};
const Todo: FC<Props> = ({ task, onDelete, onUpdateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task.taskName);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleDeleteModal = () => {
    setIsDeleteModalOpen(!isDeleteModalOpen);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditing]);

  const handleDone = (id: number, done: boolean) => {
    onUpdateTask({ id, isDone: done });
  };

  const handleDelete = (id: number) => {
    console.log("hiiiiiii");
    
    onDelete(id);
  };

  const handleEdit = (e: FormEvent, id: number) => {
    e.preventDefault();
    onUpdateTask({ id, taskName: editTask});
    
    setIsEditing(false);
  };

  return (
    <form className="todo-row" onSubmit={(e) => handleEdit(e, task.id)}>
      {isEditing ? (
        <input
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          ref={inputRef}
        />
      ): <span className={task.isDone ? "strike" : ""}>{task.taskName}</span>}

     

      <div>
        <div className="icons-div">
          <button
            className="icons"
            onClick={() => handleDone(task.id,!task.isDone)}
          >
            <MdDone style={{ color: "white" }} />
          </button>
          <button
            className="icons"
            disabled={task.isDone === true || isEditing}
            onClick={() => {
              setIsEditing(!isEditing);
            }}
          >
            <AiFillEdit style={{ color: "white" }} />
          </button>
          <button className="icons" onClick={toggleDeleteModal}>
            <AiFillDelete style={{ color: "white" }} />
          </button>
        </div>

        <div>
          {isDeleteModalOpen ? (
            <DeleteModal
              toggleDeleteModal={toggleDeleteModal}
              handleDelete={handleDelete}
              task={task}
            />
          ) : null}
        </div>
      </div>
    </form>
  );
};

export default Todo;
