import { Metadata } from "next";
import { cookies } from "next/headers";
import { products, type Product } from "@/products/data/products";
import { ItemCart } from "@/shopping-cart";
import { WidgetItem } from "@/components";

export const metadata: Metadata = {
  title: "Carrito",
  description: "Carrito",
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductInCart = (cart: { [id: string]: number }): ProductInCart[] => {
  const productsInCart: ProductInCart[] = [];

  for (const id of Object.keys(cart)) {
    const product = products.find((product) => product.id === id);
    if (product) {
      productsInCart.push({ product: product, quantity: cart[id] });
    }
  }

  return productsInCart;
};

export default async function CartPage() {
  const cookieStore = await cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}") as {
    [id: string]: number;
  };

  const productsInCart = getProductInCart(cart);

  return (
    <div>
      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr className="mb-2" />

      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {productsInCart.map(({ product, quantity }) => (
            <ItemCart key={product.id} product={product} quantity={quantity} />
          ))}
        </div>
        <div className="flex flex-col w-full sm:w-4/12">
          {/* Widget */}
          <WidgetItem></WidgetItem>
        </div>
      </div>
    </div>
  );
}
