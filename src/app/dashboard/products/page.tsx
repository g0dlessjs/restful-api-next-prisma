import { ProductCard } from "@/products";
import { products } from "@/products/data/products";
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
