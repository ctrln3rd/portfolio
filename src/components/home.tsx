'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
      <motion.main
       initial={{opacity: 0, y: 20}}
       animate={{opacity: 1, y: 0}}
       transition={{duration: 0.8, ease: 'easeOut'}}
       className="relative flex flex-col w-full h-full items-center justify-between bg-cover bg-center  pb-10 px-5">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-center w-full h-full rounded-lg
        bg-[url('/hero-background.jpg')] bg-contain bg-no-repeat ">
          {/*<CoverImageNo src='/back1.jpg' alt='background image'/>*/}
        </div>
        <div className='z-10 mt-[10%] self-start max-sm:mt-[35%] ml-[10%]'>
        <h2 className="text-3xl max-sm:text-xl">SMART WEB <br/> AND APPS</h2>
        <p className="opacity-70">Web apps, bots, softwares, fun</p>
        </div>
        <div className='fixed z-50 bottom-0 left-0 pl-20 pb-8 text-base max-sm:pl-3'>
          <h3>Hello Buddy....<br/> I'm <span className='text-primary'>Austine</span></h3>
        </div>
      
      </motion.main>
  );
}

//w-[480px] h-[410px] max-sm:w-[300px] max-sm:h-[250px] shadow-primary shadow-2xl rounded-3xl