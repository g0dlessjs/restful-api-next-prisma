import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET(request: NextRequest) {
  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: "test1@google.com",
      password: bcrypt.hashSync("123456"),
      roles: ["admin", "client", "super-user"],
      todos: {
        create: [
          { description: "task 1", completed: true },
          { description: "task 2" },
          { description: "task 3" },
          { description: "task 4" },
          { description: "task 5" },
        ],
      },
    },
  });

  // await prisma.todo.createMany({
  //   data: [
  //     { description: "Task 1", completed: true },
  //     { description: "Task 2", completed: true },
  //     { description: "Task 3", completed: true },
  //     { description: "Task 4" },
  //     { description: "Task 5" },
  //   ],
  // });

  return NextResponse.json({ message: "Seed ejecutado correctamente" });
}
