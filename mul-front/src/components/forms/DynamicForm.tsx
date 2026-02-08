"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FieldRenderer from "./FieldRenderer";
import { buildZodFromForm } from "./buildZodFromForm";

export default function DynamicForm({ form }: { form: any }) {
  const schema = useMemo(() => buildZodFromForm(form), [form]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("FORM DATA:", data);
    alert("Formulario válido ✅");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-10 p-10 max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-bold">{form.title}</h1>
      <p>{form.description}</p>

      {form.sections.map((section: any) => (
        <div key={section.id} className="space-y-4">
          <h2 className="text-xl font-semibold">{section.title}</h2>

          {section.fields.map((field: any) => (
            <div key={field.name} className="flex flex-col gap-1">
              <label className="font-medium">{field.label}</label>

              <FieldRenderer field={field} register={register} />

              {errors[field.name] && (
                <small className="text-red-500">
                  {errors[field.name]?.message as string}
                </small>
              )}

              {field.help && (
                <small className="text-gray-500">{field.help}</small>
              )}
            </div>
          ))}
        </div>
      ))}

      <button className="bg-black text-white px-6 py-3 rounded">
        {form.submitLabel}
      </button>
    </form>
  );
}
