'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ASCII_CHARS = '@%#*+=-:. ';
type Props = {
  imageUrl: string;
  width?: number; // Optional: override width
  className?: string; // Optional: override wrapper styles
};


export default function AsciiArt({ imageUrl, className = '' }: Props) {
  const [ascii, setAscii] = useState('');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dynamicWidth, setDynamicWidth] = useState<number | null>(null);
    useEffect(() => {
      const calculateWidth = () => {
        const screenWidth = window.innerWidth;
    
        if (screenWidth < 400) {
          setDynamicWidth(80); // mobile
        } else if (screenWidth < 768) {
          setDynamicWidth(100); // tablet
        } else if (screenWidth < 1024) {
          setDynamicWidth(140); // small laptop
        } else {
          setDynamicWidth(160); // desktop
        }
      };
      calculateWidth(); // run on mount
  
      window.addEventListener('resize', calculateWidth);
      return () => window.removeEventListener('resize', calculateWidth);
    }, []);
   

  useEffect(() => {
    if(!dynamicWidth) return; // Wait for dynamicWidth to be set
    if (!imageUrl) return; // Ensure imageUrl is provided
    const img = new Image();
    img.src = `/${imageUrl}.jpg`; // Replace with your image path
    img.crossOrigin = 'Anonymous';

    img.onload = () => {
      const container = containerRef.current!;
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;

      const containerWidth = container.offsetWidth || 100;
      const width = Math.min(containerWidth, dynamicWidth); // Optional max width
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
  }, [imageUrl, dynamicWidth]);

  return (
    <motion.div
        initial={{filter: 'none'}}
         animate={{
          filter: ['none', 'blur(2px)', 'none'],
          x: [0, 4, -4, 2, -2, 0],
          y: [0, -3, 3, -2, 2, 0],

        }}
        transition={{duration: 0.3, repeat: 5, repeatType: 'mirror'}}
         whileHover={{
          filter: ['none', 'blur(2px)', 'none'],
          x: [0, 4, -4, 2, -2, 0],
          y: [0, -3, 3, -2, 2, 0],
          transition: {
            repeat: 3,
            duration: 0.3,
            repeatType: 'mirror'
          }
         }}
        ref={containerRef}
        className={`overflow-hidden cursor-pointer flex items-center justify-center bg-transparent font-mono text-xs leading-tight p-2 text-teal-400 opacity-50 w-full max-w-full max-h-full h-full ${className}`}
        >
      <canvas ref={canvasRef} className="hidden" />
      <pre className="whitespace-pre break-words">{ascii}</pre>
    </motion.div>
  );
}
