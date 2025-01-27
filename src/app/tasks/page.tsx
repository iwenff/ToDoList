"use client"
import React, { useMemo } from "react"
import { useState, useEffect, useRef } from "react"
import ProgressBar from "../components/Progressbar"
import TaskList from "../components/TaskList"

type Task = {
  id: number
  title: string
  completed: boolean
}

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState("")
  const [state, setState] = useState("Создайте вашу первую задачу")
  const [editTaskId, setEditTaskId] = useState<number | null>(null)
  const [editTaskTitle, setEditTaskTitle] = useState("")

  const addRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks")
    if (savedTasks) setTasks(JSON.parse(savedTasks))
  }, [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    setState(tasks.length > 0 ? "Ваши задачи" : "Создайте вашу первую задачу")
  }, [tasks])

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("Задача не может быть пустой!")
      return
    }
    const newTasks = [
      ...tasks,
      { id: tasks.length + 1, title: newTask.trim(), completed: false },
    ]
    setTasks(newTasks)
    setNewTask("")
  }

  const markAsCompleted = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    )
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const startEditingTask = (taskId: number, currentTitle: string) => {
    setEditTaskId(taskId)
    setEditTaskTitle(currentTitle)
  }

  const saveTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, title: editTaskTitle.trim() } : task
      )
    )
    setEditTaskId(null)
    setEditTaskTitle("")
  }

  const completedPercentage = useMemo(() => {
    return tasks.length
      ? Math.round(
          (tasks.filter((task) => task.completed).length / tasks.length) * 100
        )
      : 0
  }, [tasks])

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTask()
      if (addRef.current) {
        addRef.current.focus()
      }
    }
  }

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">{state}</h1>

        <div className="flex mb-6">
          <input
            ref={addRef}
            type="text"
            className="flex-1 border border-gray-300 rounded px-3 py-2 mr-2"
            placeholder="Добавить задачу"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyUp={handleKeyUp}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Добавить
          </button>
        </div>

        <ProgressBar completedPercentage={completedPercentage} />

        <TaskList
          tasks={tasks}
          editTaskId={editTaskId}
          editTaskTitle={editTaskTitle}
          setEditTaskTitle={setEditTaskTitle}
          onComplete={markAsCompleted}
          onDelete={deleteTask}
          onEdit={startEditingTask}
          onSave={saveTask}
        />
      </div>
    </main>
  )
}
