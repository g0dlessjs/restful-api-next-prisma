"use server";

import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (
  id: string,
  completed: boolean,
): Promise<Todo> => {
  const todo = await prisma?.todo.findFirst({ where: { id } });

  if (!todo) {
    throw `Todo con is ${id} no encontrado`;
  }

  const updateTodo = await prisma?.todo.update({
    where: { id },
    data: {
      completed: completed,
    },
  });

  revalidatePath("/dashboard/rest-todos");

  return updateTodo;
};
