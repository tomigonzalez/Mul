"use client";

import { useState } from "react";
import FieldRenderer from "./FieldRenderer";

export default function DynamicForm({ form }: { form: any }) {
  const [data, setData] = useState<Record<string, any>>({});

  const handleChange = (name: string, value: any) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("FORM DATA:", data);
    alert("Formulario enviado (ver consola)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10 p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{form.title}</h1>
      <p>{form.description}</p>

      {form.sections.map((section: any) => (
        <div key={section.id} className="space-y-4">
          <h2 className="text-xl font-semibold">{section.title}</h2>

          {section.fields.map((field: any) => (
            <div key={field.name} className="flex flex-col gap-1">
              <label className="font-medium">{field.label}</label>

              <FieldRenderer
                field={field}
                value={data[field.name]}
                onChange={handleChange}
              />

              {field.help && (
                <small className="text-gray-500">{field.help}</small>
              )}
            </div>
          ))}
        </div>
      ))}

      <button type="submit" className="bg-black text-white px-6 py-3 rounded">
        {form.submitLabel}
      </button>
    </form>
  );
}
