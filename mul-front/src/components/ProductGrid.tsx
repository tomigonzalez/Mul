import type { Product } from "../lib/products";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 text-center">
          {product.name}
        </div>
      ))}
    </div>
  );
}
