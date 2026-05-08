import { WidgetItem } from "@/components";
import { auth } from "@/app/api/auth/[...nextauth]/route";
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
      </WidgetItem>
      <div className="w-full max-w-4xl overflow-x-auto rounded-2xl border border-zinc-700 bg-zinc-900 p-4 shadow-lg">
        <pre className="text-sm leading-6 text-green-400">
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre>
      </div>
    </div>
  );
}
