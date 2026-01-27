// app/productos/page.tsx
import ProductGrid from "../../components/ProductGrid";
import { products } from "../../lib/products";

export default function Page() {
  return (
    <div className="w-full px-10 py-10">
      <h1 className="text-2xl mb-6">Todos los productos</h1>

      <ProductGrid products={products} />
    </div>
  );
}
