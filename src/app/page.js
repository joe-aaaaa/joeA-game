'use client';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

export default function HomePage() {
  const router = useRouter();
  const containerRef = useRef();
  const [startButtonVisible, setStartButtonVisible] = useState(false);

  const fullText = "我是三年三班的風紀股長\n你能幫我抓出同學的違規之處嗎？";

  // 延遲顯示 Start 按鈕
  useEffect(() => {
    const timeout = setTimeout(() => {
      setStartButtonVisible(true);
    }, 800); // 0.8 秒後出現
    return () => clearTimeout(timeout);
  }, []);

  // 畫面縮放與置中
  useEffect(() => {
    const resize = () => {
      const container = containerRef.current;
      const scaleX = window.innerWidth / BASE_WIDTH;
      const scaleY = window.innerHeight / BASE_HEIGHT;
      const scale = Math.min(scaleX, scaleY);
      const offsetX = (window.innerWidth - BASE_WIDTH * scale) / 2;
      const offsetY = (window.innerHeight - BASE_HEIGHT * scale) / 2;

      container.style.transform = `scale(${scale})`;
      container.style.left = `${offsetX}px`;
      container.style.top = `${offsetY}px`;
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // 注入動畫樣式
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes scaleIn {
        0% { transform: scale(0); opacity: 0; }
        60% { transform: scale(1.1); opacity: 1; }
        100% { transform: scale(1); opacity: 1; }
      }
      @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0); }
      }
      @keyframes popIn {
        0% { transform: scale(0); opacity: 0; }
        80% { transform: scale(1.1); opacity: 1; }
        100% { transform: scale(1); opacity: 1; }
      }
      .fade-in {
        animation: fadeIn 0.4s ease-out forwards;
      }
      .scale-in {
        animation: scaleIn 0.3s ease-out forwards;
      }
      .float-anim {
        animation: float 1s ease-in-out infinite;
      }
      .hover-scale {
        transition: transform 0.2s ease-out;
      }
      .hover-scale:hover {
        transform: scale(1.03);
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        position: 'relative',
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: `${BASE_WIDTH}px`,
          height: `${BASE_HEIGHT}px`,
          position: 'absolute',
          transformOrigin: 'top left',
          backgroundColor: '#feeac5',
          overflow: 'hidden',
        }}
      >
        {/* 背景 */}
        <img
          src="/photo/bg1.png"
          alt="背景"
          style={{
            position: 'absolute',
            top: -730,
            left: 30,
            width: 1400,
            height: 'auto',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />

        {/* 人物圖 */}
        <img
          src="/photo/joeA.png"
          alt="風紀股長"
          className="fade-in"
          style={{
            position: 'absolute',
            bottom: -700,
            right: 50,
            width: 1000,
            opacity: 0,
            animationDelay: '0.3s',
            animationFillMode: 'forwards',
            zIndex: 1,
          }}
        />

        {/* 對話框 */}
        <div
          className="scale-in"
          style={{
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
            zIndex: 2,
          }}
        >
          <img
            src="/photo/cc.png"
            alt="對話框"
            style={{
              width: '100%',
              height: 'auto',
              transform: 'scaleX(-1)',
              display: 'block',
            }}
          />
          <div
            style={{
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
              textAlign: 'center',
            }}
          >
            {fullText}
          </div>
        </div>

        {/* Start 按鈕（彈出+float） */}
        {startButtonVisible && (
          <div
            style={{
              position: 'absolute',
              bottom: 300,
              left: 110,
              width: 500,
              zIndex: 10,
              opacity: 0,
              transform: 'scale(0)',
              animation: 'popIn 0.4s ease-out 0.5s forwards',
            }}
          >
            <div className="float-anim" style={{ height: '100%' }}>
              <img
                src="/photo/start.png"
                alt="START"
                className="hover-scale"
                style={{
                  width: '100%',
                  height: 'auto',
                  cursor: 'pointer',
                  display: 'block',
                }}
                onClick={() => router.push('/game/game1')}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
