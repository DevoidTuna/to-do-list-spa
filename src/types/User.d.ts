import { ToDoItem } from './ToDoItem'

type User = {
  id: number;
  name: string;
  email: string;

  toDoItems?: ToDoItem[];
}

export { User }
