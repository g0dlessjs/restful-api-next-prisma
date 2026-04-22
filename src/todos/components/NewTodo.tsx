"use client";

import { IoTrashOutline, IoAddOutline } from "react-icons/io5";
import { useState } from "react";
// import * as todoApi from "../helpers/todos";
// import { useRouter } from "next/navigation";

import { addTodo, deleteCompleted } from "../actions/todo-actions";

export const NewTodo = () => {
  const [description, setDescription] = useState("");

  // const router = useRouter();

  const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (description.trim().length === 0) return;

    await addTodo(description);

    setDescription("");
  };

  // const deleteCompleted = async () => {
  //   await todoApi.deleteCompleteTodos();
  //   router.refresh();
  // };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full items-center gap-3 bg-gray-800/50 p-4 rounded-xl border border-gray-700/50"
    >
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        className="flex-1 bg-gray-900/50 border border-gray-600 rounded-lg px-4 py-3 text-gray-200 placeholder-gray-500 outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-5 py-3 rounded-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/25"
      >
        <IoAddOutline size={20} />
        Crear
      </button>

      <button
        onClick={() => deleteCompleted()}
        type="button"
        className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 hover:text-red-300 px-4 py-3 rounded-lg border border-red-500/30 transition-all hover:scale-105 active:scale-95"
      >
        <IoTrashOutline size={18} />
        <span className="hidden sm:inline">Limpiar</span>
      </button>
    </form>
  );
};
