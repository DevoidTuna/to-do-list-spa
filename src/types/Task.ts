type Task = {
  id: number;
  user_id: number;
  content: string;
  end_at: string | null;
  finished_at: string | null;
  created_at: string;
}

export type { Task }
