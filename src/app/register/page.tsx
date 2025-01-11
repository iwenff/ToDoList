"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Вы заполнили не все поля!");
      return;
    }

    setError("");
    console.log("регистрация", { email, password });
    router.push("/login");
  };

  return (
    <main className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded shadow-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">Регистрация</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Придумайте логин</label>
            <input
              type="email"
              className="w-full sm:w-96 md:w-[400px] px-3 py-2 border border-gray-300 rounded"
              value={email}
              placeholder="Придумайте логин"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Придумайте пароль</label>
            <input
              type="password"
              className="w-full sm:w-96 md:w-[400px] border border-gray-700 rounded px-3 py-2"
              value={password}
              placeholder="Придумайте пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Зарегистрироваться
          </button>
        </form>
      </motion.div>
    </main>
  );
};

export default Register;
