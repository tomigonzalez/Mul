import { notFound } from "next/navigation";
import DynamicForm from "@/components/forms/DynamicForm";

import { getService } from "@/lib/services";
import { formsMap } from "@/forms";

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = getService(slug);

  if (!service) return notFound();

  const form = formsMap[service.formKey];

  return (
    <div className="h-auto w-full max-w-6xl flex flex-col justify-center font-pompier-custom">
      <h1 className="text-4xl font-bold p-4">{service.title}</h1>
      <p className="text-3xl p-4">{service.description}</p>
      <DynamicForm form={form} />
    </div>
  );
}
