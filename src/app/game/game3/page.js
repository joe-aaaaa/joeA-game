'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useError } from '@/contexts/ErrorContext';

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

export default function Game3() {
  const router = useRouter();
  const containerRef = useRef();
  const image2Ref = useRef();

  const [scale, setScale] = useState(1);
  const [localXs, setLocalXs] = useState([]);
  const [localOs, setLocalOs] = useState([]);
  const { errorCount, incrementError } = useError();
  const debug = false;

  // 播放音效
  const playSound = (sound) => {
    const audio = new Audio(`/${sound}.mp3`);
    audio.play();
  };

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

  useEffect(() => {
    if (errorCount >= 3) {
      router.push('/game/be');
    }
  }, [errorCount]);

  const handleCorrectClick = (e) => {
    e.stopPropagation();

    const id = Date.now();
    const clickX = e.clientX;
    const clickY = e.clientY;
    const containerRect = containerRef.current.getBoundingClientRect();
    const x = (clickX - containerRect.left) / scale;
    const y = (clickY - containerRect.top) / scale;

    setLocalOs((prev) => [...prev, { id, x, y }]);

    playSound('correct');

    setTimeout(() => {
      setLocalOs((prev) => prev.filter((mark) => mark.id !== id));
      router.push('/game/he');
    }, 800);
  };

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
      setLocalXs((prev) => [...prev, { id, x, y }]);

      playSound('error');

      setTimeout(() => {
        setLocalXs((prev) => prev.filter((mark) => mark.id !== id));
      }, 800);

      incrementError({ x, y });
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
          className="absolute"
          style={{ top: '-17%', left: '-45%', width: '100%', height: 'auto', zIndex: 0 }}
        />
        <img
          src="/photo/3-1.png"
          className="absolute"
          style={{ top: '3%', left: '14%', width: '540px', height: 'auto', zIndex: 1 }}
        />
        <img
          ref={image2Ref}
          src="/photo/3-2.png"
          className="absolute"
          style={{ top: '0%', right: '4%', width: 'auto', height: '100%', zIndex: 1, cursor: 'pointer' }}
        />

        <div
          onClick={handleCorrectClick}
          style={{
            position: 'absolute',
            top: '29%',
            left: '74.5%',
            width: '150px',
            height: '150px',
            backgroundColor: debug ? 'rgba(255, 0, 0, 0.3)' : 'transparent',
            borderRadius: '50%',
            zIndex: 5,
            cursor: 'pointer',
          }}
        />

        {localXs.map(({ id, x, y }) => (
          <img
            key={id}
            src="/photo/X.png"
            alt="X"
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

        {localOs.map(({ id, x, y }) => (
          <img
            key={id}
            src="/photo/O.png"
            alt="O"
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
