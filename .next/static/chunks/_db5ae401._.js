(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/game/game1/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Game1)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ErrorContext.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;
function Game1() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const image2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])();
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [localXs, setLocalXs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // 用來儲存 O 和 X 的標記
    const { errorCount, incrementError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useError"])();
    const debug = false;
    // 畫面縮放與置中
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game1.useEffect": ()=>{
            const resize = {
                "Game1.useEffect.resize": ()=>{
                    const container = containerRef.current;
                    const scaleX = window.innerWidth / BASE_WIDTH;
                    const scaleY = window.innerHeight / BASE_HEIGHT;
                    const newScale = Math.min(scaleX, scaleY);
                    const offsetX = (window.innerWidth - BASE_WIDTH * newScale) / 2;
                    const offsetY = (window.innerHeight - BASE_HEIGHT * newScale) / 2;
                    container.style.transform = `scale(${newScale})`;
                    container.style.left = `${offsetX}px`;
                    container.style.top = `${offsetY}px`;
                    setScale(newScale);
                }
            }["Game1.useEffect.resize"];
            resize();
            window.addEventListener('resize', resize);
            return ({
                "Game1.useEffect": ()=>window.removeEventListener('resize', resize)
            })["Game1.useEffect"];
        }
    }["Game1.useEffect"], []);
    // 三次錯誤跳轉 BE
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Game1.useEffect": ()=>{
            if (errorCount >= 3) {
                router.push('/game/be');
            }
        }
    }["Game1.useEffect"], [
        errorCount
    ]);
    // 播放音效
    const playSound = (sound)=>{
        const audio = new Audio(`/${sound}.mp3`); // 直接使用 `/` 路徑載入音效
        audio.play();
    };
    // 正確點擊處理
    const handleCorrectClick = (e)=>{
        e.stopPropagation();
        // 在正確區域顯示 O 圖片
        const id = Date.now(); // 使用時間戳作為唯一 ID
        const clickX = e.clientX;
        const clickY = e.clientY;
        const containerRect = containerRef.current.getBoundingClientRect();
        const x = (clickX - containerRect.left) / scale;
        const y = (clickY - containerRect.top) / scale;
        // 將 O 圖片加入到標記中
        setLocalXs((prev)=>[
                ...prev,
                {
                    id,
                    x,
                    y,
                    type: 'O'
                }
            ]);
        // 播放正確音效
        playSound('correct');
        // 停留一段時間後跳轉
        setTimeout(()=>{
            setLocalXs((prev)=>prev.filter((mark)=>mark.id !== id)); // 清除 O 圖片
            router.push('/game/game2'); // 跳轉頁面
        }, 800); // 停留時間設為 800 毫秒
    };
    // 錯誤點擊處理
    const handleWrongClick = (e)=>{
        if (!image2Ref.current) return;
        const imageRect = image2Ref.current.getBoundingClientRect();
        const clickX = e.clientX;
        const clickY = e.clientY;
        if (clickX >= imageRect.left && clickX <= imageRect.right && clickY >= imageRect.top && clickY <= imageRect.bottom) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const x = (clickX - containerRect.left) / scale;
            const y = (clickY - containerRect.top) / scale;
            const id = Date.now();
            setLocalXs((prev)=>[
                    ...prev,
                    {
                        id,
                        x,
                        y,
                        type: 'X'
                    }
                ]);
            // 播放錯誤音效
            playSound('error');
            // 自動清除 0.8 秒後 ❌
            setTimeout(()=>{
                setLocalXs((prev)=>prev.filter((mark)=>mark.id !== id));
            }, 800);
            incrementError();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-screen h-screen relative overflow-hidden",
        style: {
            backgroundColor: 'black'
        },
        onClick: handleWrongClick,
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
                    src: "/photo/bg2.png",
                    alt: "背景",
                    className: "absolute",
                    style: {
                        top: '-17%',
                        left: '-45%',
                        width: '100%',
                        height: 'auto',
                        zIndex: 0
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/game/game1/page.js",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "/photo/1-1.png",
                    alt: "裝飾1",
                    className: "absolute",
                    style: {
                        top: '3%',
                        left: '14%',
                        width: '540px',
                        height: 'auto',
                        zIndex: 1
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/game/game1/page.js",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    ref: image2Ref,
                    src: "/photo/1-2.png",
                    alt: "裝飾2",
                    className: "absolute",
                    style: {
                        top: '0%',
                        right: '4%',
                        width: 'auto',
                        height: '100%',
                        zIndex: 1,
                        cursor: 'pointer'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/game/game1/page.js",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: handleCorrectClick,
                    style: {
                        position: 'absolute',
                        top: '73%',
                        left: '74.5%',
                        width: '110px',
                        height: '110px',
                        backgroundColor: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : 'transparent',
                        borderRadius: '50%',
                        zIndex: 5,
                        cursor: 'pointer'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/game/game1/page.js",
                    lineNumber: 168,
                    columnNumber: 9
                }, this),
                localXs.map(({ id, x, y, type })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: type === 'X' ? '/photo/X.png' : '/photo/O.png',
                        alt: type,
                        className: "absolute pointer-events-none",
                        style: {
                            top: `${y}px`,
                            left: `${x}px`,
                            transform: 'translate(-50%, -50%)',
                            width: '120px',
                            height: 'auto',
                            zIndex: 999
                        }
                    }, id, false, {
                        fileName: "[project]/src/app/game/game1/page.js",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/game/game1/page.js",
            lineNumber: 117,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/game/game1/page.js",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(Game1, "9V15v+PwFNeMxKbWw+BpLNWXWPI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ErrorContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useError"]
    ];
});
_c = Game1;
var _c;
__turbopack_context__.k.register(_c, "Game1");
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

//# sourceMappingURL=_db5ae401._.js.map