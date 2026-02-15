import { audioSubliminalForm } from "./audioSubliminal";
import { magiaSanadoraForm } from "./magiaSanadora";
import { sesionAuaForm } from "./sesionAua";

export const formsMap = {
  "magia-sanadora": magiaSanadoraForm,
  "sesiones-aua": sesionAuaForm,
   "audios-personalizados": audioSubliminalForm,
  "ritual-personalizado": sesionAuaForm,
 


} as const;
export type FormKey = keyof typeof formsMap;
