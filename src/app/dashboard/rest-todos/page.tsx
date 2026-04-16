import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

export const metadata: Metadata = {
  title: "Listado de todos",
  description: "Listado de todos",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  // useEffect(() => {
  //   fetch("/api/todos")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  console.log(todos);
  return (
    <div>
      {/* TODO: Formulario para agregar todos*/}
      <TodosGrid todos={todos} />
    </div>
  );
}
