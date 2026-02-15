import { FormKey } from "@/forms";

export type Service = {
  slug: string;
  title: string;
  description: string;

  formKey: FormKey;

  active: boolean;
  showInMenu: boolean;

  order: number;

  seoTitle?: string;
  seoDescription?: string;
};
export const services: Service[] = [
  {
    slug: "magia-sanadora",
    title: "Magia Sanadora",
    description:
      "Un espacio de acompañamiento energético orientado a la armonización profunda. A través de prácticas simbólicas y rituales personalizados, se busca liberar bloqueos y restaurar el equilibrio interno.",

    formKey: "magia-sanadora",

    active: true,
    showInMenu: true,
    order: 1,

    seoTitle: "Magia Sanadora | Sesión energética",
    seoDescription: "Servicio de armonización energética y liberación de bloqueos.",
  },
{
  slug: "audios-personalizados",
  title: "Audios Subliminales Personalizados",
  description:
    "Audios subliminales creados específicamente según tu objetivo, intención y contexto personal.",

  formKey: "audios-personalizados",

  active: true,
  showInMenu: true,
  order: 5,

  seoTitle: "Audio Subliminal Personalizado",
  seoDescription: "Audio subliminal diseñado a medida según tu intención.",
},
  {
    slug: "ritual-personalizado",
    title: "Ritual Personalizado",
    description:
      "Rituales creados de manera única según tu intención y momento vital.",

    formKey: "ritual-personalizado",

    active: true,
    showInMenu: true,
    order: 2,
  },

  {
    slug: "cartografia-sintoma",
    title: "Cartografía del Síntoma",
    description:
      "Lectura profunda del síntoma como mensaje simbólico y energético.",

    formKey: "cartografia-sintoma",

    active: true,
    showInMenu: true,
    order: 3,
  },

  {
    slug: "sesiones-aua",
    title: "Sesiones AUA",
    description:
      "Encuentros de acompañamiento energético y consciente.",

    formKey: "sesiones-aua",

    active: true,
    showInMenu: false, // ejemplo
    order: 4,
  },
];


export function getService(slug: string) {
  return services.find(s => s.slug === slug && s.active);
}
