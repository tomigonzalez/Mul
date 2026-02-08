import { audioSubliminalForm } from "./audioSubliminal";
import { magiaSanadoraForm } from "./magiaSanadora";
import { sesionAuaForm } from "./sesionAua";

export const formsMap = {
  "magia-sanadora": magiaSanadoraForm,
  "ritual-personalizado": sesionAuaForm,
  "audios-personalizados": audioSubliminalForm,
  "sesiones-aua": sesionAuaForm,

} as const;
export type FormKey = keyof typeof formsMap;
