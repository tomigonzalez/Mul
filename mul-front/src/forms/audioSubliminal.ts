export const audioSubliminalForm = {
  id: "audio_subliminal",
  title: "Audio Subliminal Personalizado",
  description:
    "Formulario para solicitar un Audio Subliminal Personalizado.",

  sections: [
    // -------------------------
    // Servicio
    // -------------------------
    {
      id: "servicio",
      title: "Servicio",
      fields: [
        {
          name: "servicio",
          label: "Servicio",
          type: "text",
          required: true,
          defaultValue: "Audio Subliminal Personalizado",
          readOnly: true,
        },
      ],
    },

    // -------------------------
    // Contacto
    // -------------------------
    {
      id: "contacto",
      title: "Datos de contacto",
      fields: [
        { name: "nombre", label: "Nombre", type: "text", required: true },
        { name: "apellido", label: "Apellido", type: "text", required: true },

        {
          name: "email",
          label: "Email",
          type: "email",
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

    // -------------------------
    // Preferencias guion
    // -------------------------
    {
      id: "preferencias",
      title: "Preferencias del guion (opcional)",
      fields: [
        {
          name: "palabras_clave_tono",
          label: "Palabras clave de tono/estilo",
          type: "text",
          placeholder: "sereno, directo, minimalista",
          required: false,
        },

        {
          name: "evitar_temas",
          label: "Frases o temas a evitar",
          type: "textarea",
          required: false,
          maxLength: 400,
        },
      ],
    },

    // -------------------------
    // Objetivo
    // -------------------------
    {
      id: "objetivo",
      title: "Tu objetivo",
      fields: [
        {
          name: "objetivo_principal",
          label: "Objetivo principal (en afirmativo)",
          type: "textarea",
          required: true,
          minLength: 20,
          maxLength: 400,
          placeholder:
            "Fortalecer mi autoestima serena y sostener hábitos ordenados.",
        },

        {
          name: "situaciones_actuales",
          label: "2–3 situaciones concretas",
          type: "textarea",
          required: true,
          minLength: 30,
          maxLength: 600,
          placeholder:
            "Me critico al terminar el día; postergo entrenar; me cuesta decir que no.",
        },

        {
          name: "estado_deseado",
          label: "Cómo querés sentirte (en presente)",
          type: "textarea",
          required: true,
          minLength: 30,
          maxLength: 600,
          placeholder:
            "Me hablo con respeto cada día. Sostengo hábitos simples que me ordenan.",
        },
      ],
    },

    // -------------------------
    // Salud
    // -------------------------
    {
      id: "salud",
      title: "Salud y consideraciones (opcional)",
      fields: [
        {
          name: "aclaraciones_salud",
          label: "Aclaraciones relevantes",
          type: "textarea",
          required: false,
          help: "medicación, embarazo, terapia actual, etc.",
        },
      ],
    },

    // -------------------------
    // Paquete
    // -------------------------
    {
      id: "paquete",
      title: "Selección de paquete",
      fields: [
        {
          name: "paquete_principal",
          label: "Personalizado 60'",
          type: "checkbox",
          required: true,
        },

        {
          name: "addon_pocket",
          label: "Add-on Pocket 10'",
          type: "checkbox",
          required: false,
        },

        {
          name: "addon_booster",
          label: "Add-on Booster 3'",
          type: "checkbox",
          required: false,
        },
      ],
    },

    // -------------------------
    // Entrega
    // -------------------------
    {
      id: "entrega",
      title: "Formato de entrega",
      fields: [
        {
          name: "formato_mp3",
          label: "MP3",
          type: "checkbox",
          required: false,
        },
        {
          name: "formato_youtube",
          label: "Link YouTube privado",
          type: "checkbox",
          required: false,
        },
      ],
    },

    // -------------------------
    // Precios
    // -------------------------
    {
      id: "precios",
      title: "Precios",
      fields: [
        {
          name: "precio_base",
          label: "Precio Personalizado 60'",
          type: "number",
          required: true,
          defaultValue: 0,
        },
        {
          name: "precio_pocket",
          label: "Add-on Pocket",
          type: "number",
          required: false,
          defaultValue: 0,
        },
        {
          name: "precio_booster",
          label: "Add-on Booster",
          type: "number",
          required: false,
          defaultValue: 0,
        },
      ],
    },

    // -------------------------
    // Políticas
    // -------------------------
    {
      id: "politicas",
      title: "Compromisos y políticas",
      fields: [
        {
          name: "uso_datos",
          label:
            "Acepto el uso de mis datos para crear y entregarme el audio solicitado.",
          type: "checkbox",
          required: true,
        },

        {
          name: "tecnica_subliminal",
          label:
            "Comprendo las características técnicas del subliminal.",
          type: "checkbox",
          required: true,
        },

        {
          name: "politica_digital",
          label:
            "Acepto política de entregables digitales (sin reembolso).",
          type: "checkbox",
          required: true,
        },

        {
          name: "no_reemplazo",
          label:
            "Comprendo que no sustituye atención médica o psicológica.",
          type: "checkbox",
          required: true,
        },
      ],
    },
  ],

  submitLabel: "Pagar ahora",
};
