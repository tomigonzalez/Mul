"use client";

export default function FieldRenderer({ field, register }: any) {
  const base = {
    className: "border p-2 rounded",
    ...register(field.name),
  };

  switch (field.type) {
    case "textarea":
      return <textarea {...base} placeholder={field.placeholder} />;

    case "select":
      return (
        <select {...base}>
          <option value="">Seleccionar</option>
          {field.options.map((opt: string) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );

    case "checkbox":
      return <input type="checkbox" {...register(field.name)} />;

    case "range":
      return (
        <input
          type="range"
          min={field.min}
          max={field.max}
          {...register(field.name, { valueAsNumber: true })}
        />
      );

    case "file":
      return <input type="file" {...register(field.name)} />;

    default:
      return (
        <input type={field.type} {...base} placeholder={field.placeholder} />
      );
  }
}
