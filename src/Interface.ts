export interface ITask {
  id: number;
  taskName: string;
  isDone: boolean;
}

export interface UpdateTask extends Omit<Partial<ITask>, "id"> {
  id: number;
}
