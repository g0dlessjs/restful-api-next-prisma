"use client";

import { useOptimistic, startTransition } from "react";
import { Todo } from "@/generated/prisma";
import styles from "./TodoItem.module.css";
import { IoCheckbox, IoCheckboxOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      completed: newCompleteValue,
    }),
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.completed));
      await toggleTodo(todoOptimistic.id, !todoOptimistic.completed);
    } catch (error) {
      startTransition(() => toggleTodoOptimistic(!todoOptimistic.completed));
    }
  };

  const { id, description, completed } = todoOptimistic;
  return (
    <div className={completed ? styles.todoDone : styles.todoPending}>
      <div className="flex items-center gap-4">
        <div
          // onClick={() => toggleTodo(id, !completed)}
          onClick={onToggleTodo}
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
