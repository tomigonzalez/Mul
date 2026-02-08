"use client";

export default function FieldRenderer({ field, register }: any) {
  const base = {
    className: "border p-2 rounded",
    placeholder: field.placeholder,
    defaultValue: field.defaultValue,
    readOnly: field.readOnly,
  };

  switch (field.type) {
    case "textarea":
      return <textarea {...base} {...register(field.name)} />;

    case "select":
      return (
        <select {...base} {...register(field.name)}>
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

    case "number":
      return (
        <input
          type="number"
          {...base}
          {...register(field.name, { valueAsNumber: true })}
        />
      );

    case "file":
      return <input type="file" {...register(field.name)} />;

    default:
      return <input type={field.type} {...base} {...register(field.name)} />;
  }
}
