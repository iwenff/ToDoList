import { AnimatePresence } from "framer-motion";
import React from "react";
import TaskItem from "./TaskItem";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  editTaskId: number | null;
  editTaskTitle: string;
  setEditTaskTitle: (title: string) => void;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
  onSave: (id: number) => void;
};

const TaskList = ({
  tasks,
  editTaskId,
  editTaskTitle,
  setEditTaskTitle,
  onComplete,
  onDelete,
  onEdit,
  onSave,
}: TaskListProps) => {
  return (
    <ul>
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            editTaskId={editTaskId}
            editTaskTitle={editTaskTitle}
            setEditTaskTitle={setEditTaskTitle}
            onComplete={onComplete}
            onDelete={onDelete}
            onEdit={onEdit}
            onSave={onSave}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TaskList;
