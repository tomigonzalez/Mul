export const magiaSanadoraForm = {
  id: "magia_sanadora",
  title: "Pedir Magia Sanadora",
  description:
    "Formulario para solicitar la Magia Sanadora. Todos los campos son obligatorios salvo la foto.",

  sections: [
    {
      id: "datos",
      title: "A) Datos personales",
      fields: [
        { name: "nombre", label: "Nombre", type: "text", required: true },
        { name: "apellido", label: "Apellido", type: "text", required: true },
        {
          name: "email",
          label: "Email",
          type: "email",
          placeholder: "tu@email.com",
          required: true,
        },
        {
          name: "telefono",
          label: "Teléfono / WhatsApp",
          type: "text",
          placeholder: "+54 9 11...",
          required: true,
        },
        { name: "pais", label: "País", type: "text", required: true },
        { name: "ciudad", label: "Ciudad", type: "text", required: true },
        { name: "edad", label: "Edad", type: "number", required: true },
        {
          name: "genero",
          label: "Género",
          type: "select",
          options: ["Femenino", "Masculino", "Otro"],
          required: true,
        },
      ],
    },

    {
      id: "caso",
      title: "B) Tu caso a trabajar",
      fields: [
        {
          name: "zona",
          label: "Tema o zona del cuerpo",
          type: "text",
          required: true,
        },
        {
          name: "descripcion",
          label: "Descripción breve",
          type: "textarea",
          required: true,
        },
        {
          name: "intensidad",
          label: "Intensidad actual (0–10)",
          type: "range",
          min: 0,
          max: 10,
          required: true,
        },
        {
          name: "frecuencia",
          label: "Frecuencia",
          type: "select",
          options: ["Esporádico", "Semanal", "Diario"],
          required: true,
        },
        {
          name: "foto",
          label: "Adjuntar foto (opcional)",
          type: "file",
          required: false,
          help: "Solo si te sentís cómodo/a.",
        },
      ],
    },

    {
      id: "consentimiento",
      title: "C) Consentimiento",
      fields: [
        {
          name: "intencion",
          label: "Intención en una frase",
          type: "text",
          required: true,
        },
        {
          name: "consentimiento",
          label:
            "Confirmo que deseo recibir la Magia Sanadora y comprendo que no sustituye atención médica.",
          type: "checkbox",
          required: true,
        },
      ],
    },
  ],

  submitLabel: "Pagar ahora",
};
