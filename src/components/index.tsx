'use client';

import React from 'react';
import GlitchText from './glitch';
import { motion } from 'framer-motion';

export default function Index() {
 
  return (
      <>
        <motion.div className={`absolute inset-0 bg-center flex items-center justify-center w-full h-full
         bg-contain bg-no-repeat 
       `}
        initial={{opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        >
         <motion.img
         src='/hero-background.webp'
         className='w-full h-full object-contain cursor-pointer'
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
         />

        </motion.div>
        <div className='z-10 absolute top-[30%] left-[10%] max-sm:top-[20%]'>
        <h2 className="text-xl uppercase">SM<GlitchText text='AR' effect='one-time'/>T <GlitchText text='WE' effect='continuous' stopDuration={3}/>B<br/> AND <GlitchText text='AP' effect='continuous' stopDuration={3}/>PS</h2>
        <p className="opacity-70">Web apps, bots, softwares, fun</p>
        </div>
        <div className='fixed flex flex-col items-start gap-2 z-50 bottom-0 left-0 pl-20 pb-8 text-base max-sm:pl-3'>
          <h3>Hello Buddy....<br/> I'm <span className='text-primary'><GlitchText text='Austine' effect='one-time'/></span></h3>
          <p className='opacity-70 uppercase'>{'['} De<GlitchText text='velo' effect='continuous' stopDuration={3}/>per {']'}</p>
        </div>
      
      </>
  );
}

//w-[480px] h-[410px] max-sm:w-[300px] max-sm:h-[250px] shadow-primary shadow-2xl rounded-3xl

//absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]