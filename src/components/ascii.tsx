'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const ASCII_CHARS = '+.*",=-';
type Props = {
  imageUrl: string;
  width?: number;
  className?: string;
};

type GlitchBar = {
  id: string;
  top: string;
  height: string;
  color: string;
  left: string;
  width: string;
};

export default function AsciiArt({ imageUrl, className = '' }: Props) {
  const [ascii, setAscii] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dynamicWidth, setDynamicWidth] = useState<number | null>(null);
  const controls = useAnimation();
  const [glitches, setGlitches] = useState<GlitchBar[]>([]);

  // Responsive Width
  useEffect(() => {
    const calculateWidth = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 400) setDynamicWidth(80);
      else if (screenWidth < 768) setDynamicWidth(100);
      else if (screenWidth < 1024) setDynamicWidth(140);
      else setDynamicWidth(160);
    };
    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

  // Load ASCII
  useEffect(() => {
    if (!dynamicWidth || !imageUrl) return;
    const img = new Image();
    img.src = `/${imageUrl}.webp`;
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      const container = containerRef.current!;
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;

      const containerWidth = container.offsetWidth || 100;
      const width = Math.min(containerWidth, dynamicWidth);
      const scale = img.height / img.width;
      const height = Math.floor(width * scale * 0.55);

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);
      const data = ctx.getImageData(0, 0, width, height).data;

      let ascii = '';
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const i = (y * width + x) * 4;
          const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];

          if (a < 10) {
            ascii += ' ';
            continue;
          }

          const brightness = (r + g + b) / 3;
          if (brightness > 160) {
            ascii += ' ';
          } else {
            const index = Math.floor((brightness / 255) * (ASCII_CHARS.length - 1));
            ascii += ASCII_CHARS[index];
          }
        }
        ascii += '\n';
      }

      setAscii(ascii);
    };
  }, [imageUrl, dynamicWidth]);

  // Glitch Effect (shake + glitch bars)
  const triggerGlitch = () => {
    controls.start({
      x: [0, 3, -3, 2, -2, 0],
      y: [0, -2, 2, -1, 1, 0],
      transition: {
        duration: 0.5,
        repeat: 0,
      },
    });

    // Generate glitch bars
    const colors = ['#f0f', '#0ff', '#ff0', '#f00', '#0f0', '#00f'];
    const bars: GlitchBar[] = Array.from({ length: 10 }).map(() => ({
      id: uuidv4(),
      top: `${Math.random() * 100}%`,
      height: `${Math.random() * 1.5}px`,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: `${Math.random() * 100}%`,
      width: `${40 + Math.random() * 30}%`,
    }));
    setGlitches(bars);

    setTimeout(() => setGlitches([]), 400); // Remove after flicker
  };

    useEffect(() => {
      let glitchCount = 0;
      let glitchTimeout: NodeJS.Timeout;
      let loopTimeout: NodeJS.Timeout;

      const glitchCycle = () => {
        triggerGlitch();
        glitchCount++;

        if (glitchCount < 3) {
          glitchTimeout = setTimeout(glitchCycle, 300); // time between individual glitches
        } else {
          glitchCount = 0;
          loopTimeout = setTimeout(glitchCycle, 2000); // wait 2s after 3 glitches
        }
      };

      glitchCycle(); // start on mount

      return () => {
        clearTimeout(glitchTimeout);
        clearTimeout(loopTimeout);
      };
    }, []);


  return (
    <motion.div
    ref={containerRef}
    animate={controls}
    onHoverStart={() => triggerGlitch()} // ✅ Triggers your glitch function
    whileHover={{ scale: 1.02 }} // optional: add subtle animation
    className={`relative overflow-hidden cursor-pointer flex items-center justify-center font-mono text-xs leading-tight p-2 w-full max-w-full max-h-full h-full text-gray-400/80 opacity-80 ${className}`}
  >

      <canvas ref={canvasRef} className="hidden" />
      <pre className="whitespace-pre break-words">{ascii}</pre>

      {/* GLITCH LINES */}
      {glitches.map((glitch) => (
        <motion.div
          key={glitch.id}
          className="absolute z-50"
          style={{
            top: glitch.top,
            left: glitch.left,
            height: glitch.height,
            width: glitch.width,
            backgroundColor: glitch.color,
            opacity: 0.8,
            mixBlendMode: 'screen',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </motion.div>
  );
}
