(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/utils/Sincronario.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// --- 13 LUNAS ---
/**
 * Calcula la fecha en el calendario de 13 Lunas/28 Días.
 * @param date La fecha para calcular.
 * @returns Un objeto con 'moon' (number | null) y 'day' (number | null), 
 * o un objeto con una propiedad 'special' si es el Día Fuera del Tiempo.
 */ __turbopack_context__.s([
    "get13Moon",
    ()=>get13Moon,
    "getLunarPhase",
    ()=>getLunarPhase
]);
function get13Moon(date) {
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
        return {
            day: null,
            moon: null,
            special: "Día Fuera del Tiempo"
        };
    }
    // El calendario tiene 13 Lunas de 28 días (13 * 28 = 364)
    const moon = Math.floor(diff / 28) + 1;
    const day = diff % 28 + 1;
    return {
        moon,
        day
    };
}
function getLunarPhase(date) {
    // Duración promedio del ciclo lunar sinódico en segundos
    const lp = 2551443;
    // La referencia es la Luna Nueva del 1 de enero de 2001 (en segundos Unix).
    const newMoonRef = new Date("2001-01-01T00:00:00Z").getTime() / 1000;
    // Tiempo actual en segundos Unix.
    const now = date.getTime() / 1000;
    // Calcula la proporción (0.0 a 1.0) del ciclo lunar completado.
    const phase = (now - newMoonRef) % lp / lp;
    if (phase < 0.03) return "Luna Nueva";
    if (phase < 0.22) return "Creciente";
    if (phase < 0.28) return "Cuarto Creciente";
    if (phase < 0.47) return "Gibosa Creciente";
    if (phase < 0.53) return "Luna Llena";
    if (phase < 0.72) return "Gibosa Menguante";
    if (phase < 0.78) return "Cuarto Menguante";
    return "Menguante";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/SincronarioCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SincronarioCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$Sincronario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utils/Sincronario.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SincronarioCard() {
    _s();
    const [data] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "SincronarioCard.useState": ()=>{
            const today = new Date();
            const dias = [
                "Domingo",
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado"
            ];
            const { moon, day, special } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$Sincronario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get13Moon"])(today);
            const fase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$Sincronario$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLunarPhase"])(today);
            return {
                diaNombre: dias[today.getDay()],
                diaNumero: day ?? 0,
                moon: moon ?? 0,
                special: special || null,
                fase
            };
        }
    }["SincronarioCard.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: 320,
            border: "2px solid #555",
            padding: 10,
            borderRadius: 8,
            fontFamily: "Arial, sans-serif",
            textAlign: "center"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                style: {
                    marginBottom: 15
                },
                children: "Sincronario de 13 Lunas"
            }, void 0, false, {
                fileName: "[project]/app/components/SincronarioCard.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 5
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: headerStyle,
                        children: "Día"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SincronarioCard.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: headerStyle,
                        children: "Num"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SincronarioCard.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: headerStyle,
                        children: "Luna"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SincronarioCard.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cellStyle,
                        children: data.diaNombre
                    }, void 0, false, {
                        fileName: "[project]/app/components/SincronarioCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cellStyle,
                        children: data.diaNumero
                    }, void 0, false, {
                        fileName: "[project]/app/components/SincronarioCard.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: cellStyle,
                        children: data.moon
                    }, void 0, false, {
                        fileName: "[project]/app/components/SincronarioCard.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SincronarioCard.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginTop: 15,
                    fontWeight: "bold"
                },
                children: [
                    "Fase Lunar: ",
                    data.fase
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SincronarioCard.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SincronarioCard.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(SincronarioCard, "o4SUj4Zip9rCfUdbQD9i5joy/hI=");
_c = SincronarioCard;
// --- Estilos reutilizables ---
const headerStyle = {
    border: "1px solid #333",
    padding: "5px 0",
    fontWeight: "bold",
    background: "#000"
};
const cellStyle = {
    border: "1px solid #333",
    padding: "6px 0"
};
var _c;
__turbopack_context__.k.register(_c, "SincronarioCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_7f3df4dc._.js.map