import { TabBar } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};

export default function CookiesPage() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <span className="text-3xl mb-10 block text-center">Cookies</span>

        <TabBar tabOptions={[1, 2, 3, 4]} />
      </div>
    </div>
  );
}
