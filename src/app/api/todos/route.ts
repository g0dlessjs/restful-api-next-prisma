import { NextResponse, NextRequest } from "next/server";
import { getUserServerSession } from "@/auth/actions/auth-actions";
import prisma from "@/lib/prisma";
import * as yup from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(skip))
    return NextResponse.json(
      { message: "Skip tiene que ser un número" },
      { status: 400 },
    );

  if (isNaN(take))
    return NextResponse.json(
      { message: "Take tiene que ser un número" },
      { status: 400 },
    );

  const todos = await prisma.todo.findMany({
    take,
    skip,
  });
  return NextResponse.json(todos);
}

const postSchema = yup.object({
  description: yup.string().required(),
  completed: yup.boolean().optional().default(false),
});

export async function POST(request: Request) {
  const user = await getUserServerSession();
  if (!user) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }

  try {
    const { description, completed } = await postSchema.validate(
      await request.json(),
    );

    const todo = await prisma.todo.create({
      data: { description, completed, userId: user.id },
    });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(
      {
        message:
          "Error creando el TODO. Asegúrate de enviar { description: '...' }",
        error,
      },
      { status: 400 },
    );
  }
}

export async function DELETE(request: Request) {
  try {
    await prisma.todo.deleteMany({
      where: { completed: true },
    });

    return NextResponse.json("Todos completados eliminados");
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error al eliminar los TODOs completados",
        error,
      },
      { status: 400 },
    );
  }
}
