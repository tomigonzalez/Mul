export const sesionAuaForm = {
  id: "sesion_aua",
  title: "Reservar Sesión AUA",
  description:
    "Formulario para reservar una sesión de Armonía Universal Alquímica (AUA). Todos los campos son obligatorios salvo los marcados como opcionales.",

  sections: [
    {
      id: "servicio",
      title: "Servicio",
      fields: [
        {
          name: "servicio",
          label: "Servicio",
          type: "text",
          required: true,
          defaultValue: "Armonía Universal Alquímica (AUA)",
          readOnly: true,
        },
      ],
    },

    {
      id: "datos",
      title: "Datos personales",
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
          name: "whatsapp",
          label: "WhatsApp",
          type: "text",
          placeholder: "+54 9 11...",
          required: true,
        },

        { name: "pais", label: "País", type: "text", required: true },
        { name: "ciudad", label: "Ciudad", type: "text", required: true },
      ],
    },

    {
      id: "sesion",
      title: "Sobre la sesión",
      fields: [
        {
          name: "intencion",
          label: "Intención en 1 frase",
          type: "text",
          placeholder: "Ej: Dormir mejor",
          required: true,
        },

        {
          name: "motivo",
          label: "Motivo / Descripción breve",
          type: "textarea",
          required: true,
        },

        {
          name: "info_adicional",
          label: "Información adicional (opcional)",
          type: "textarea",
          required: false,
          help: "Antecedentes, medicación, embarazo, etc.",
        },
      ],
    },

    {
      id: "consentimientos",
      title: "Consentimientos",
      fields: [
        {
          name: "consentimiento_aua",
          label:
            "Confirmo que deseo recibir una sesión AUA y comprendo que no sustituye atención médica o psicológica.",
          type: "checkbox",
          required: true,
        },

        {
          name: "privacidad",
          label:
            "Acepto el uso de mis datos para coordinar esta sesión.",
          type: "checkbox",
          required: true,
        },
      ],
    },
  ],

  priceLabel: "Sesión: $",
  submitLabel: "Pagar ahora",
};
