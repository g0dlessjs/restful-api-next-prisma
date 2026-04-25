import { TabBar } from "@/components";
import { Metadata } from "next";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};

export default async function CookiesPage() {
  const cookieStore = await cookies();
  const cookieTab = cookieStore.get("tab-selected")?.value ?? "1";

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <span className="text-3xl mb-10 block text-center">Cookies</span>

        <TabBar currentTab={Number(cookieTab)} />
      </div>
    </div>
  );
}
