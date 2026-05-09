import { getUserServerSession } from "@/auth/actions/auth-actions";
import { Todo } from "@/generated/prisma";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

interface Props {
  params: Promise<{ id: string }>;
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const user = await getUserServerSession();
  if (!user) {
    return null;
  }

  const todo = await prisma.todo.findFirst({ where: { id } });
  if (todo?.userId !== user.id) {
    return null;
  }
  return todo;
};

export async function GET(request: Request, { params }: Props) {
  const { id } = await params;

  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `Todo con id: ${id} no encontrado` },
      { status: 404 },
    );
  }
  return NextResponse.json(todo);
}

const putSchema = yup.object({
  description: yup.string().optional(),
  completed: yup.boolean().optional(),
});

export async function PUT(request: Request, { params }: Props) {
  const { id } = await params;
  const todo = await prisma.todo.findFirst({
    where: {
      id,
    },
  });
  if (!todo) {
    return NextResponse.json(
      { message: `Todo con id: ${id} no encontrado` },
      { status: 404 },
    );
  }

  try {
    const { completed, description } = await putSchema.validate(
      await request.json(),
    );

    const updateTodo = await prisma.todo.update({
      where: { id },
      data: {
        completed,
        description,
      },
    });
    return NextResponse.json(updateTodo);
  } catch (error) {
    return NextResponse.json(
      { message: "Error al actualizar el todo" },
      { status: 400 },
    );
  }
}
