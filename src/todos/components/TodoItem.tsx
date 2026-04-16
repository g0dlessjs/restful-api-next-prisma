"use client";

import { Todo } from "@/generated/prisma";
import styles from "./TodoItem.module.css";
import { IoCheckbox, IoCheckboxOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const { id, description, completed } = todo;
  return (
    <div className={completed ? styles.todoDone : styles.todoPending}>
      <div className="flex items-center gap-4">
        <div
          onClick={() => toggleTodo(id, !completed)}
          className="flex p-2 rounded-md cursor-pointer hover:bg-cyan-500/20 transition-colors"
        >
          {completed ? (
            <IoCheckbox size={30} className="text-cyan-400" />
          ) : (
            <IoCheckboxOutline size={30} className="text-slate-400" />
          )}
        </div>
        <span
          className={`text-slate-200 ${completed ? "line-through text-slate-500" : ""}`}
        >
          {description}
        </span>
      </div>
    </div>
  );
};
