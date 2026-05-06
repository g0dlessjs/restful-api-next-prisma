import { WidgetItem } from "@/components";
import { auth } from "@/helpers/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
      <WidgetItem title="Usuario desde Server Side">
        <div className="flex flex-col items-center">
          <p className="font-bold">{session.user?.name}</p>
          <p className="text-slate-300">{session.user?.email}</p>
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-2xl hover:cursor-pointer">
          Logout
        </button>
      </WidgetItem>
    </div>
  );
}
