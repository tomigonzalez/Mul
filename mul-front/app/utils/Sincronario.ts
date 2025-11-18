// --- 13 LUNAS ---

/**
 * Calcula la fecha en el calendario de 13 Lunas/28 Días.
 * @param date La fecha para calcular.
 * @returns Un objeto con 'moon' (number | null) y 'day' (number | null), 
 * o un objeto con una propiedad 'special' si es el Día Fuera del Tiempo.
 */
export function get13Moon(date: Date): { moon: number | null, day: number | null, special?: string } {
  // El año del Calendario de 13 Lunas comienza el 26 de julio (Mes 7 es índice 6 en JS)
  const yearStart = new Date(date.getFullYear(), 6, 26); 
  
  // Calcula la diferencia en días desde el 26 de julio.
  // 86400000 es el número de milisegundos en un día.
  let diff = Math.floor((date.getTime() - yearStart.getTime()) / 86400000);

  // Si el cálculo es negativo, significa que estamos antes del 26 de julio de este año,
  // así que calculamos la diferencia respecto al inicio del año anterior.
  if (diff < 0) {
    const prevStart = new Date(date.getFullYear() - 1, 6, 26);
    diff = Math.floor((date.getTime() - prevStart.getTime()) / 86400000);
  }

  // El día número 364 es el "Día Fuera del Tiempo"
  if (diff === 364) {
    return { day: null, moon: null, special: "Día Fuera del Tiempo" };
  }

  // El calendario tiene 13 Lunas de 28 días (13 * 28 = 364)
  const moon = Math.floor(diff / 28) + 1;
  const day = (diff % 28) + 1;

  return { moon, day };
}

// --- FASE LUNAR REAL ---

/**
 * Calcula la fase lunar real para una fecha dada.
 * @param date La fecha y hora para calcular la fase.
 * @returns La fase lunar como una cadena de texto.
 */
export function getLunarPhase(date: Date): string {
  // Duración promedio del ciclo lunar sinódico en segundos
  const lp: number = 2551443; 
  // La referencia es la Luna Nueva del 1 de enero de 2001 (en segundos Unix).
  const newMoonRef: number = new Date("2001-01-01T00:00:00Z").getTime() / 1000;

  // Tiempo actual en segundos Unix.
  const now: number = date.getTime() / 1000;
  
  // Calcula la proporción (0.0 a 1.0) del ciclo lunar completado.
  const phase: number = ((now - newMoonRef) % lp) / lp;

  if (phase < 0.03) return "Luna Nueva"; 
  if (phase < 0.22) return "Creciente";
  if (phase < 0.28) return "Cuarto Creciente"; 
  if (phase < 0.47) return "Gibosa Creciente";
  if (phase < 0.53) return "Luna Llena"; 
  if (phase < 0.72) return "Gibosa Menguante";
  if (phase < 0.78) return "Cuarto Menguante"; 
  return "Menguante"; 
}