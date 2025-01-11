"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Все поля должны быть заполнены!");
      return;
    }

    setError("");
    console.log("вход", { email, password });
    router.push("/tasks");
  };

  return (
    <main className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded shadow-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Войти</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Логин</label>
            <input
              type="email"
              className="w-full sm:w-96 md:w-[400px] px-3 py-2 border border-gray-300 rounded"
              value={email}
              placeholder="Введите логин"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Пароль</label>
            <input
              type="password"
              className="w-full sm:w-96 md:w-[400px] border border-gray-700 rounded px-3 py-2"
              value={password}
              placeholder="Введите пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            className="mb-3 w-full flex items-center justify-center text-[#808080] "
            onClick={() => router.push("/register")}
          >
            Нет аккаунта?
          </button>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Вход
          </button>
        </form>
      </motion.div>
    </main>
  );
};

export default Login;
