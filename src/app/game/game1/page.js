'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useError } from '@/contexts/ErrorContext';

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

export default function Game1() {
  const router = useRouter();
  const containerRef = useRef();
  const image2Ref = useRef();

  const [scale, setScale] = useState(1);
  const [localXs, setLocalXs] = useState([]);  // 用來儲存 O 和 X 的標記
  const { errorCount, incrementError } = useError();
  const debug = false;

  // 畫面縮放與置中
  useEffect(() => {
    const resize = () => {
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
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // 三次錯誤跳轉 BE
  useEffect(() => {
    if (errorCount >= 3) {
      router.push('/game/be');
    }
  }, [errorCount]);

  // 正確點擊處理
  const handleCorrectClick = (e) => {
    e.stopPropagation();

    // 在正確區域顯示 O 圖片
    const id = Date.now();  // 使用時間戳作為唯一 ID
    const clickX = e.clientX;
    const clickY = e.clientY;
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = (clickX - containerRect.left) / scale;
    const y = (clickY - containerRect.top) / scale;

    // 將 O 圖片加入到標記中
    setLocalXs((prev) => [...prev, { id, x, y, type: 'O' }]);

    // 停留一段時間後跳轉
    setTimeout(() => {
      setLocalXs((prev) => prev.filter((mark) => mark.id !== id));  // 清除 O 圖片
      router.push('/game/game2');  // 跳轉頁面
    }, 800);  // 停留時間設為 1500 毫秒（1.5 秒）
  };

  // 錯誤點擊處理
  const handleWrongClick = (e) => {
    if (!image2Ref.current) return;

    const imageRect = image2Ref.current.getBoundingClientRect();
    const clickX = e.clientX;
    const clickY = e.clientY;

    if (
      clickX >= imageRect.left &&
      clickX <= imageRect.right &&
      clickY >= imageRect.top &&
      clickY <= imageRect.bottom
    ) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const x = (clickX - containerRect.left) / scale;
      const y = (clickY - containerRect.top) / scale;

      const id = Date.now();
      setLocalXs((prev) => [...prev, { id, x, y, type: 'X' }]);

      // 自動清除 0.8 秒後 ❌
      setTimeout(() => {
        setLocalXs((prev) => prev.filter((mark) => mark.id !== id));
      }, 800);

      incrementError();
    }
  };

  return (
    <div
      className="w-screen h-screen relative overflow-hidden"
      style={{ backgroundColor: 'black' }}
      onClick={handleWrongClick}
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
        <img
          src="/photo/bg2.png"
          alt="背景"
          className="absolute"
          style={{
            top: '-17%',
            left: '-45%',
            width: '100%',
            height: 'auto',
            zIndex: 0,
          }}
        />

        <img
          src="/photo/1-1.png"
          alt="裝飾1"
          className="absolute"
          style={{
            top: '3%',
            left: '14%',
            width: '540px',
            height: 'auto',
            zIndex: 1,
          }}
        />
        <img
          ref={image2Ref}
          src="/photo/1-2.png"
          alt="裝飾2"
          className="absolute"
          style={{
            top: '0%',
            right: '4%',
            width: 'auto',
            height: '100%',
            zIndex: 1,
            cursor: 'pointer',
          }}
        />

        <div
          onClick={handleCorrectClick}
          style={{
            position: 'absolute',
            top: '73%',
            left: '74.5%',
            width: '110px',
            height: '110px',
            backgroundColor: debug ? 'rgba(255, 0, 0, 0.3)' : 'transparent',
            borderRadius: '50%',
            zIndex: 5,
            cursor: 'pointer',
          }}
        />

        {/* 即時 O 和 X 標記，會在點擊處顯示並自動消失 */}
        {localXs.map(({ id, x, y, type }) => (
          <img
            key={id}
            src={type === 'X' ? '/photo/X.png' : '/photo/O.png'}  // 根據類型顯示 O 或 X
            alt={type}
            className="absolute pointer-events-none"
            style={{
              top: `${y}px`,
              left: `${x}px`,
              transform: 'translate(-50%, -50%)',
              width: '120px',
              height: 'auto',
              zIndex: 999,
            }}
          />
        ))}
      </div>
    </div>
  );
}
