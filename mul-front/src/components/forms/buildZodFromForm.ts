import { z } from "zod";

export function buildZodFromForm(form: any) {
  const shape: Record<string, any> = {};

  for (const section of form.sections) {
    for (const field of section.fields) {
      let schema: any;

      switch (field.type) {
        case "text":
        case "textarea":
          schema = z.string();
          if (field.minLength) schema = schema.min(field.minLength);
          if (field.maxLength) schema = schema.max(field.maxLength);

          if (field.required) schema = schema.min(1, "Requerido");
          break;

        case "email":
          schema = z.string().email("Email inválido");
          if (field.required) schema = schema.min(1, "Requerido");
          break;

        case "number":
        case "range":
          schema = z.coerce.number();
          if (field.min !== undefined) schema = schema.min(field.min);
          if (field.max !== undefined) schema = schema.max(field.max);
          break;

        case "select":
          schema = z.enum(field.options as [string, ...string[]]);
          break;

        case "checkbox":
          schema = field.required
            ? z.boolean().refine(v => v === true, {
                message: "Debes aceptar",
              })
            : z.boolean().optional();
          break;

        case "file":
          schema = z.any().optional();
          break;

        default:
          schema = z.string();
          if (field.required) schema = schema.min(1, "Requerido");
      }

      if (!field.required && field.type !== "checkbox") {
        schema = schema.optional();
      }

      shape[field.name] = schema;
    }
  }

  return z.object(shape);
}
