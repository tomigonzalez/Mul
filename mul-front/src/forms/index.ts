import { magiaSanadoraForm } from "./magiaSanadora";
import { sesionAuaForm } from "./sesionAua";

export const formsMap = {
  "magia-sanadora": magiaSanadoraForm,
  "ritual-personalizado": sesionAuaForm,
  "cartografia-sintoma": magiaSanadoraForm,
  "sesiones-aua": sesionAuaForm,

} as const;
export type FormKey = keyof typeof formsMap;
