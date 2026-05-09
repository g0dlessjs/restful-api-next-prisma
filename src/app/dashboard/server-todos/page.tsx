export const dynamic = "force-dynamic";
export const revalidate = 0;

import { auth } from "@/app/api/auth/[...nextauth]/route";

import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";
import { getUserServerSession } from "@/auth/actions/auth-actions";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Listado de todos",
  description: "Listado de todos",
};

export default async function ServerTodosPage() {
  const user = await getUserServerSession();

  if (!user) {
    redirect("/api/auth/signin");
  }

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: "asc" },
  });

  return (
    <>
      <span className="text-3xl mb-10 block text-center">Server Actions</span>
      <div className="pb-10">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
