import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products Page",
  description: "Products Page",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col">
        <span className="text-3xl mb-10 block text-center">Products</span>
      </div>
    </div>
  );
}
