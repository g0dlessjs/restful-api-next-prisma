import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata: Metadata = {
  title: "Listado de todos",
  description: "Listado de todos",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <div className="pb-10">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
