import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: Props) {
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
  return NextResponse.json(todo);
}
