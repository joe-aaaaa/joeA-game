'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useError } from '@/contexts/ErrorContext';

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

export default function HomePage() {
  const router = useRouter();
  const containerRef = useRef();
  const { resetError } = useError();
  const fullText = "好失望！\n你還是回去練練吧";

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
          src="/photo/joeA_be.png"
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

        {/* Play Again 按鈕 */}
        <div
          className="scale-in hover-scale"
          style={{
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
            transform: 'scale(0)',
          }}
          onClick={() => {
            resetError(); // ✅ 重置錯誤次數
            router.push('/game/game1');
          }}
        >
          <img
            src="/photo/playAgain.png"
            alt="Play Again"
            style={{
              height: '180px',
              width: 'auto',
              display: 'block',
            }}
          />
        </div>

        {/* Home 按鈕 */}
        <div
          className="scale-in hover-scale"
          style={{
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
            transform: 'scale(0)',
          }}
          onClick={() => router.push('/home')}
        >
          <a href="https://classroomdaydream.vercel.app" target="_blank" rel="noopener noreferrer">
            <img
              src="/photo/homePage.png"
              alt="Home"
              style={{
                height: '180px',
                width: 'auto',
                display: 'block',
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
