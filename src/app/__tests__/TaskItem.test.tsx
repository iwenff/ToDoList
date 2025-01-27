import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import TaskItem from "../components/TaskItem"

describe("TaskItem component", () => {
  const mockTask = { id: 1, title: "Test Task", completed: false }
  const onDeleteMock = jest.fn()

  it("renders task title correctly", () => {
    render(<TaskItem task={mockTask} onDelete={onDeleteMock} />)
    const taskTitle = screen.getByText(/Test Task/i)
    expect(taskTitle).toBeInTheDocument()
  })

  it("calls onDelete when delete button is clicked", () => {
    render(<TaskItem task={mockTask} onDelete={onDeleteMock} />)
    const deleteButton = screen.getByRole("button", { name: /удалить/i })
    fireEvent.click(deleteButton)
    expect(onDeleteMock).toHaveBeenCalledTimes(1)
  })
})
