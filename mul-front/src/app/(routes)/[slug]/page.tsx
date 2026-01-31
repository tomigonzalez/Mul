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
    <>
      <h1>{service.title}</h1>
      <DynamicForm form={form} />
    </>
  );
}
