import { Task } from './Task'

type User = {
  id: number;
  name: string;
  email: string;

  tasks?: Task[];
}

export { User }
