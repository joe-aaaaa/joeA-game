(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/game/he/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ErrorContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;
function HomePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const { resetError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useError"])();
    const fullText = "做得好！\n你就是下一任風紀";
    // 畫面縮放與置中
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const resize = {
                "HomePage.useEffect.resize": ()=>{
                    const container = containerRef.current;
                    const scaleX = window.innerWidth / BASE_WIDTH;
                    const scaleY = window.innerHeight / BASE_HEIGHT;
                    const scale = Math.min(scaleX, scaleY);
                    const offsetX = (window.innerWidth - BASE_WIDTH * scale) / 2;
                    const offsetY = (window.innerHeight - BASE_HEIGHT * scale) / 2;
                    container.style.transform = `scale(${scale})`;
                    container.style.left = `${offsetX}px`;
                    container.style.top = `${offsetY}px`;
                }
            }["HomePage.useEffect.resize"];
            resize();
            window.addEventListener('resize', resize);
            return ({
                "HomePage.useEffect": ()=>window.removeEventListener('resize', resize)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    // 注入動畫樣式
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const style = document.createElement('style');
            style.innerHTML = `
      @keyframes softBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      .soft-bounce {
        animation: softBounce 1.8s ease-in-out infinite;
      }
      .hover-scale {
        transition: transform 0.2s ease-out;
      }
      .hover-scale:hover {
        transform: scale(1.05);
      }
      .fade-in {
        animation: fadeIn 0.4s ease-out forwards;
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .scale-in {
        animation: scaleIn 0.4s ease-out forwards;
      }
      @keyframes scaleIn {
        0% { transform: scale(0); opacity: 0; }
        60% { transform: scale(1.1); opacity: 1; }
        100% { transform: scale(1); opacity: 1; }
      }
    `;
            document.head.appendChild(style);
        }
    }["HomePage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: '100vw',
            height: '100vh',
            backgroundColor: 'black',
            overflow: 'hidden',
            margin: 0,
            padding: 0,
            position: 'relative'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            style: {
                width: `${BASE_WIDTH}px`,
                height: `${BASE_HEIGHT}px`,
                position: 'absolute',
                transformOrigin: 'top left',
                backgroundColor: '#feeac5',
                overflow: 'hidden'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/photo/bg1.png",
                    alt: "背景",
                    style: {
                        position: 'absolute',
                        top: -730,
                        left: 30,
                        width: 1400,
                        height: 'auto',
                        objectFit: 'cover',
                        zIndex: 0
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/game/he/page.js",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/photo/joeA_he.png",
                    alt: "風紀股長",
                    className: "fade-in",
                    style: {
                        position: 'absolute',
                        bottom: -700,
                        right: 50,
                        width: 1000,
                        opacity: 0,
                        animationDelay: '0.3s',
                        animationFillMode: 'forwards',
                        zIndex: 1
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/game/he/page.js",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scale-in",
                    style: {
                        position: 'absolute',
                        top: 50,
                        left: 100,
                        width: 800,
                        opacity: 0,
                        transform: 'scale(0)',
                        animationDelay: '0.6s',
                        animationFillMode: 'forwards',
                        animationDuration: '0.4s',
                        animationTimingFunction: 'ease-out',
                        zIndex: 2
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/photo/cc.png",
                            alt: "對話框",
                            style: {
                                width: '100%',
                                height: 'auto',
                                transform: 'scaleX(-1)',
                                display: 'block'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/game/he/page.js",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: 'absolute',
                                top: '25%',
                                left: '0%',
                                width: '100%',
                                fontSize: 40,
                                fontFamily: 'Lifang',
                                color: '#333',
                                lineHeight: 1.6,
                                whiteSpace: 'pre-wrap',
                                zIndex: 3,
                                textAlign: 'center'
                            },
                            children: fullText
                        }, void 0, false, {
                            fileName: "[project]/src/app/game/he/page.js",
                            lineNumber: 152,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/game/he/page.js",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scale-in hover-scale",
                    style: {
                        position: 'absolute',
                        bottom: 300,
                        left: 180,
                        height: '200px',
                        width: 'fit-content',
                        cursor: 'pointer',
                        zIndex: 10,
                        animationDelay: '1s',
                        animationFillMode: 'forwards',
                        animationDuration: '0.4s',
                        animationTimingFunction: 'ease-out',
                        opacity: 0,
                        transform: 'scale(0)'
                    },
                    onClick: ()=>{
                        resetError();
                        router.push('/');
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/photo/playAgain.png",
                        alt: "Play Again",
                        style: {
                            height: '180px',
                            width: 'auto',
                            display: 'block'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/game/he/page.js",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/game/he/page.js",
                    lineNumber: 172,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "scale-in hover-scale",
                    style: {
                        position: 'absolute',
                        bottom: 300,
                        left: 630,
                        height: '200px',
                        width: 'fit-content',
                        cursor: 'pointer',
                        zIndex: 10,
                        animationDelay: '1s',
                        animationFillMode: 'forwards',
                        animationDuration: '0.4s',
                        animationTimingFunction: 'ease-out',
                        opacity: 0,
                        transform: 'scale(0)'
                    },
                    onClick: ()=>window.location.href = 'https://classroomdaydream.vercel.app',
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/photo/homePage.png",
                        alt: "Home",
                        style: {
                            height: '180px',
                            width: 'auto',
                            display: 'block'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/game/he/page.js",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/game/he/page.js",
                    lineNumber: 206,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/game/he/page.js",
            lineNumber: 82,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/game/he/page.js",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(HomePage, "o4x1oFxgi7PbocSL8D5KBPmpQh8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useError"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_bb74674f._.js.map