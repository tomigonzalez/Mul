import { magiaSanadoraForm } from "./magiaSanadora";

export const formsMap = {
  "magia-sanadora": magiaSanadoraForm,
  "ritual-personalizado": magiaSanadoraForm,
  "cartografia-sintoma": magiaSanadoraForm,
  "sesiones-aua": magiaSanadoraForm,

} as const;
export type FormKey = keyof typeof formsMap;
