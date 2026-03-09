"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FieldRenderer from "./FieldRenderer";
import { buildZodFromForm } from "./buildZodFromForm";

export default function DynamicForm({ form }: { form: any }) {
  const schema = useMemo(() => buildZodFromForm(form), [form]);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [step, setStep] = useState(0);

  const section = form.sections[step];

  const nextStep = async () => {
    const fields = section.fields.map((f: any) => f.name);

    const valid = await trigger(fields);

    if (!valid) return;

    if (step < form.sections.length - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) setStep(step - 1);
  };

  const onSubmit = (data: any) => {
    console.log("FORM DATA:", data);
    alert("Formulario válido ✅");
  };

  const progress = ((step + 1) / form.sections.length) * 100;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-10 p-10 max-w-2xl mx-auto"
    >
      {/* Título */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">{form.title}</h1>
        <p className="text-xl text-gray-600">{form.description}</p>
      </div>

      {/* Barra progreso */}
      <div className="space-y-2">
        <div className="text-sm font-medium">
          Paso {step + 1} de {form.sections.length}
        </div>

        <div className="w-full bg-gray-200 h-2 rounded">
          <div
            className="bg-black h-2 rounded transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Sección */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">{section.title}</h2>

        {section.fields.map((field: any) => (
          <div key={field.name} className="flex flex-col gap-2">
            <label className="font-medium text-lg">{field.label}</label>

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

      {/* Botones */}
      <div className="flex justify-between pt-6">
        {step > 0 ? (
          <button
            type="button"
            onClick={prevStep}
            className="border px-6 py-3 rounded hover:bg-gray-100"
          >
            Anterior
          </button>
        ) : (
          <div />
        )}

        {step < form.sections.length - 1 ? (
          <button
            type="button"
            onClick={nextStep}
            className="bg-black text-white px-6 py-3 rounded hover:opacity-90"
          >
            Siguiente
          </button>
        ) : (
          <button className="bg-black text-white px-6 py-3 rounded hover:opacity-90">
            {form.submitLabel}
          </button>
        )}
      </div>
    </form>
  );
}
