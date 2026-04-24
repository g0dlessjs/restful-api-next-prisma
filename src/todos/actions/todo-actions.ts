"use server";

import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const sleep = async (seconds: number = 2) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

export const toggleTodo = async (
  id: string,
  completed: boolean,
): Promise<Todo> => {
  await sleep(3);

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

export const addTodo = async (description: string) => {
  try {
    const todo = await prisma.todo.create({
      data: { description },
    });
    revalidatePath("/dashboard/rest-todos");

    return todo;
  } catch (error) {
    return {
      message: "Error creando el TODO",
      error,
    };
  }
};

export const deleteCompleted = async (): Promise<void> => {
  await prisma.todo.deleteMany({ where: { completed: true } });

  revalidatePath("/dashboard/rest-todos");
};
