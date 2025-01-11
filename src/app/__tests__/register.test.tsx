import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Register from "../register/page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

describe("Register component", () => {
  it("renders the registration form", () => {
    render(<Register />);
    expect(screen.getByText(/Регистрация/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Придумайте логин/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Придумайте пароль/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Зарегистрироваться/i })
    ).toBeInTheDocument();
  });

  it("shows error if registration fields are empty", () => {
    render(<Register />);
    const button = screen.getByRole("button", { name: /Зарегистрироваться/i });

    fireEvent.click(button);

    expect(screen.getByText(/Вы заполнили не все поля!/i)).toBeInTheDocument();
  });
});
