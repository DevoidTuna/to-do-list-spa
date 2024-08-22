import { ToDoItem } from './ToDoItem'

type User = {
  id: number;
  name: string;
  email: string;

  tasks?: ToDoItem[];
}

export { User }
