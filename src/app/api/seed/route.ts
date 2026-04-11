import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: NextRequest) {
  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: "Task 1", completed: true },
      { description: "Task 2", completed: true },
      { description: "Task 3", completed: true },
      { description: "Task 4" },
      { description: "Task 5" },
    ],
  });

  return NextResponse.json({ message: "Seed ejecutado correctamente" });
}
