import { FC } from "react";
import { ITask } from "../Interface";
import Modal from "./Modal";

interface Props {
  toggleDeleteModal: () => void;
  handleDelete: (id: number) => void;
  task: ITask;
}
const DeleteModal: FC<Props> = ({ task, toggleDeleteModal, handleDelete }) => {
  return (
    <Modal>
      <h3>Are you sure Delete this Task ?</h3>
      <div className="modal-buttons">
        <button className="cancle-button" onClick={toggleDeleteModal}>
          CANCEL
        </button>
        <button className="delete-button" onClick={() => handleDelete(task.id)}>
          DELETE
        </button>
      </div>
    </Modal>
  );
};

export default DeleteModal;
