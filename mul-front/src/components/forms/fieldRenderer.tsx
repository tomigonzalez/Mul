"use client";
type Props = {
  field: any;
  value: any;
  onChange: (name: string, value: any) => void;
};
export default function FieldRenderer({ field, value, onChange }: Props) {
  const commonProps = {
    name: field.name,
    required: field.required,
    className: "border p-2 rounded",
  };
  switch (field.type) {
    case "textarea":
      return (
        <textarea
          {...commonProps}
          placeholder={field.placeholder}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      );
    case "select":
      return (
        <select
          {...commonProps}
          onChange={(e) => onChange(field.name, e.target.value)}
        >
          {" "}
          <option value="">Seleccionar</option>{" "}
          {field.options.map((opt: string) => (
            <option key={opt} value={opt}>
              {" "}
              {opt}{" "}
            </option>
          ))}{" "}
        </select>
      );
    case "checkbox":
      return (
        <input
          type="checkbox"
          onChange={(e) => onChange(field.name, e.target.checked)}
        />
      );
    case "range":
      return (
        <input
          type="range"
          min={field.min}
          max={field.max}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      );
    case "file":
      return (
        <input
          type="file"
          onChange={(e) => onChange(field.name, e.target.files?.[0])}
        />
      );
    default:
      return (
        <input
          type={field.type}
          {...commonProps}
          placeholder={field.placeholder}
          onChange={(e) => onChange(field.name, e.target.value)}
        />
      );
  }
}
