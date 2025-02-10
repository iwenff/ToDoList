import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Login from "../login/page"
import { useRouter } from "next/navigation"

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}))

describe("Login component", () => {
  it("renders the login form", () => {
    render(<Login />)
    expect(screen.getByText(/Войти/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Введите логин/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Введите пароль/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Вход/i })).toBeInTheDocument()
  })

  it("shows error message if fields are empty", () => {
    render(<Login />)
    const button = screen.getByRole("button", { name: /Вход/i })

    fireEvent.click(button)
    expect(
      screen.getByText(/Все поля должны быть заполнены!/i)
    ).toBeInTheDocument()
  })

  it("redirects to tasks page after successful login", () => {
    const pushMock = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push: pushMock })

    render(<Login />)
    fireEvent.change(screen.getByPlaceholderText(/Введите логин/i), {
      target: { value: "test@example.com" },
    })
    fireEvent.change(screen.getByPlaceholderText(/Введите пароль/i), {
      target: { value: "password" },
    })
    fireEvent.click(screen.getByRole("button", { name: /Вход/i }))

    expect(pushMock).toHaveBeenCalledWith("/tasks")
  })
})
