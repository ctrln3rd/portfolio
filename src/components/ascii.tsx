'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ASCII_CHARS = '@%#*+=-:. ';

export default function AsciiArt() {
  const [ascii, setAscii] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = '/ship.jpg'; // Replace with your image path
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      const container = containerRef.current!;
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;

      const containerWidth = container.offsetWidth || 100;
      const width = Math.min(containerWidth, 120); // Optional max width
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

          // Skip transparent pixels
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
  }, []);

  return (
    <motion.div
        initial={{ x: 0, y: 0 }}
        animate={{ 
            x: [0, -1, 1, -0.5, 0],
            y: [0, 1, -1, 0.5, 0],
            transition: { duration: 0.3, ease: 'easeInOut' },
        }}
        whileHover={{
            x: [0, -2, 2, -1, 0],
            y: [0, 2, -2, 1, 0],
            transition: { duration: 0.2, ease: 'easeInOut', repeat: 2 },
        }}
        ref={containerRef}
        className="overflow-hidden cursor-pointer flex items-center justify-center bg-transparent font-mono text-xs leading-tight p-2 text-teal-400 opacity-50 w-full max-w-full max-h-full h-full"
        >
      <canvas ref={canvasRef} className="hidden" />
      <pre className="whitespace-pre break-words">{ascii}</pre>
    </motion.div>
  );
}
