import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/products";
import { categories } from "@/lib/categories";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;

  const category = categories.find((c) => c.slug === categoria);

  if (!category) notFound();

  const filteredProducts = products.filter(
    (p) => p.categorySlug === category.slug,
  );

  return (
    <div className="w-full px-10 py-10">
      <h1 className="text-2xl mb-2">{category.title}</h1>

      <p className="mb-6 text-sm opacity-70 max-w-xl">{category.description}</p>

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
