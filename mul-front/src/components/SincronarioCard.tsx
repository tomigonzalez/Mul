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
    <div
      style={{
        width: 320,
        border: "2px solid #555",
        padding: 10,
        borderRadius: 8,
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: 15 }}>Sincronario de 13 Lunas</h3>

      {/* --- Tabla --- */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 5,
        }}
      >
        {/* Cabeceras */}
        <div style={headerStyle}>Día</div>
        <div style={headerStyle}>Num</div>
        <div style={headerStyle}>Luna</div>

        {/* Valores del día */}
        <div style={cellStyle}>{data.diaNombre}</div>
        <div style={cellStyle}>{data.diaNumero}</div>
        <div style={cellStyle}>{data.moon}</div>
      </div>

      {/* Fase lunar */}
      <p style={{ marginTop: 15, fontWeight: "bold" }}>
        Fase Lunar: {data.fase}
      </p>
    </div>
  );
}

// --- Estilos reutilizables ---
const headerStyle: React.CSSProperties = {
  border: "1px solid #333",
  padding: "5px 0",
  fontWeight: "bold",
  background: "#000",
};

const cellStyle: React.CSSProperties = {
  border: "1px solid #333",
  padding: "6px 0",
};
