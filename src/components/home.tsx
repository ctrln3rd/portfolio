'use client';

import React from 'react';
import { CoverImageNo, SmallIcon } from './images';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
      <motion.main
       initial={{opacity: 0, y: 20}}
       animate={{opacity: 1, y: 0}}
       transition={{duration: 0.8, ease: 'easeOut'}}
       className="relative h-dvh flex flex-col items-center justify-between bg-cover bg-center pt-[15dvh] max-sm:pt-[10dvh] pb-10 px-5">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-cover bg-center bg-opacity-50  w-[480px] h-[410px]
        max-sm:w-[300px] max-sm:h-[250px] shadow-primary shadow-2xl rounded-3xl">
          <CoverImageNo src='/hero-background.png' alt='background image'/>
        </div>
        <div className='z-10 self-start'>
        <h2 className="text-3xl max-sm:text-xl">SMART WEB <br/> AND APPS</h2>
        <p className="opacity-70">Web apps, bots, softwares, fun</p>
        </div>
        <div className='fixed z-50 bottom-0 left-0 pl-20 pb-8 text-base max-sm:pl-3'>
          <h3>I'm <span className='text-primary'>Austine</span></h3>
          <Link href={'/projects'} className='flex gap-1 items-center max-sm:text-sm'><span className='opacity-70'>lil musk</span><SmallIcon src='forward' alt='click'/></Link>

        </div>
      
      </motion.main>
  );
}
