import React from "react";
import { motion } from "framer-motion";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskItemProps = {
  task: Task;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string) => void;
  onSave: (id: number) => void;
  editTaskId: number | null;
  editTaskTitle: string;
  setEditTaskTitle: (title: string) => void;
};

const TaskItem = ({
  task,
  onComplete,
  onDelete,
  onEdit,
  onSave,
  editTaskId,
  editTaskTitle,
  setEditTaskTitle,
}: TaskItemProps) => {
  return (
    <motion.li
      className={`flex justify-between items-center p-4 mb-2 rounded shadow ${
        task.completed ? "bg-gray-200" : "bg-white"
      }`}
      layoutId={`task-${task.id}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      {editTaskId === task.id ? (
        <input
          type="text"
          value={editTaskTitle}
          onChange={(e) => setEditTaskTitle(e.target.value)}
          className="flex-1 border border-gray-300 rounded px-3 py-2"
        />
      ) : (
        <span
          className={`flex-1 ${
            task.completed ? "line-through text-gray-500" : "text-black"
          }`}
        >
          {task.title}
        </span>
      )}
      {editTaskId === task.id ? (
        <button
          onClick={() => onSave(task.id)}
          className="bg-green-500 text-white px-2 py-1 rounded ml-2"
        >
          Сохранить
        </button>
      ) : (
        <button
          onClick={() => onEdit(task.id, task.title)}
          className="bg-blue-500 text-white px-2 py-1 rounded ml-2"
        >
          Редактировать
        </button>
      )}
      {!task.completed && (
        <button
          onClick={() => onComplete(task.id)}
          className="bg-blue-500 text-white px-2 py-1 rounded ml-2 hover:bg-blue-600"
        >
          Выполнено
        </button>
      )}
      <button
        onClick={() => onDelete(task.id)}
        className="bg-red-500 text-white px-2 py-1 rounded ml-2 hover:bg-red-600"
      >
        Удалить
      </button>
    </motion.li>
  );
};

export default React.memo(TaskItem);
