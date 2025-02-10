import React from "react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Добро пожаловать в To-Do App!</h1>
      <div className="flex space-x-4">
        <Link
          href="/login"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Войти
        </Link>
        <Link
          href="/register"
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Регистрация
        </Link>
      </div>
    </main>
  )
}
