"use client";

import { get13Moon, getLunarPhase } from "../utils/Sincronario";
import React from "react";

interface SincronarioData {
  diaNombre: string;
  diaNumero: number;
  moon: number | null;
  special: string | null;
  fase: string;
}

export default function SincronarioCard() {
  const [data] = React.useState<SincronarioData>(() => {
    const today = new Date();
    const dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];

    const { moon, day, special } = get13Moon(today);
    const fase = getLunarPhase(today);

    return {
      diaNombre: dias[today.getDay()],
      diaNumero: day ?? 0,
      moon: moon ?? 0,
      special: special || null,
      fase,
    };
  });

  return (
    <div className="sm:w-80 w-66 rounded-lg border-2 border-neutral-600 p-3 text-center">
      <h3 className="mb-4 text-base font-bold">Sincronario de 13 Lunas</h3>

      {/* Tabla */}
      <div className="grid grid-cols-3 gap-1 text-sm">
        {/* Headers */}
        <div className="border border-neutral-700 font-bold">Día</div>
        <div className="border border-neutral-700 font-bold">Num</div>
        <div className="border border-neutral-700 font-bold">Luna</div>

        {/* Values */}
        <div className="border border-neutral-700">{data.diaNombre}</div>
        <div className="border border-neutral-700">{data.diaNumero}</div>
        <div className="border border-neutral-700">{data.moon}</div>
      </div>

      <p className="mt-4 font-bold">Fase Lunar: {data.fase}</p>
    </div>
  );
}
