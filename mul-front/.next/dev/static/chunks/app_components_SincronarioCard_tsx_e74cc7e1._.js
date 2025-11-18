(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/SincronarioCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sincronario
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const lunaNames = [
    "Luna Magnética",
    "Luna Lunar",
    "Luna Eléctrica",
    "Luna Autoexistente",
    "Luna Entonada",
    "Luna Rítmica",
    "Luna Resonante",
    "Luna Galáctica",
    "Luna Solar",
    "Luna Planetaria",
    "Luna Espectral",
    "Luna Cristal",
    "Luna Cósmica"
];
function Sincronario() {
    _s();
    const [sync, setSync] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        dayOfYear: 0,
        lunaNum: 0,
        dayInLuna: 0,
        lunaName: ""
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sincronario.useEffect": ()=>{
            const today = new Date();
            // Día del año (1–365)
            const start = new Date(today.getFullYear(), 0, 0);
            const diff = today.getTime() - start.getTime();
            const oneDay = 1000 * 60 * 60 * 24;
            const dayOfYear = Math.floor(diff / oneDay);
            // Cada luna tiene exactamente 28 días
            const lunaNumRaw = Math.ceil(dayOfYear / 28);
            const lunaNum = lunaNumRaw > 13 ? 13 : lunaNumRaw;
            const dayInLuna = (dayOfYear - 1) % 28 + 1;
            const lunaName = lunaNames[lunaNum - 1];
            setSync({
                dayOfYear,
                lunaNum,
                dayInLuna,
                lunaName
            });
        }
    }["Sincronario.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: styles.card,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Sincronario de 13 Lunas"
            }, void 0, false, {
                fileName: "[project]/app/components/SincronarioCard.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.row,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Luna:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SincronarioCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    " ",
                    sync.lunaNum,
                    " – ",
                    sync.lunaName
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SincronarioCard.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.row,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Día en la Luna:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SincronarioCard.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    " ",
                    sync.dayInLuna,
                    " / 28"
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SincronarioCard.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.row,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Día del Año:"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SincronarioCard.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    " ",
                    sync.dayOfYear
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SincronarioCard.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SincronarioCard.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(Sincronario, "JpDSRkyrwJQ6xvmeeNb142fzXeM=");
_c = Sincronario;
const styles = {
    card: {
        background: "#111",
        padding: "20px",
        borderRadius: "12px",
        color: "white",
        width: "300px",
        border: "1px solid #333",
        fontFamily: "sans-serif"
    },
    row: {
        marginBottom: "10px"
    }
};
var _c;
__turbopack_context__.k.register(_c, "Sincronario");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_SincronarioCard_tsx_e74cc7e1._.js.map