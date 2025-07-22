'use client';

import React from 'react';
import GlitchText from './glitch';
import { motion } from 'framer-motion';
import AsciiArt from './ascii';
import { useEffect, useState } from 'react';

export default function Index() {
 
  return (
      <>
        
       <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center z-0">
          <AsciiArt imageUrl="saturn"/>
        </div>
        <div className='z-10 absolute top-[30%] left-[10%] max-sm:top-[15%]'>
        <h2 className="text-xl uppercase">SM<GlitchText text='AR' effect='one-time'/>T <GlitchText text='WE' effect='continuous' stopDuration={3}/>B<br/> AND <GlitchText text='AP' effect='continuous' stopDuration={3}/>PS</h2>
        <p className="opacity-70">Web apps, bots, softwares, fun</p>
        </div>
        <div className='fixed flex flex-col items-start gap-2 z-50 bottom-0 left-0 pl-20 pb-8 text-base max-sm:pl-3'>
          <h3>Hello Buddy....<br/> I'm <span className='text-teal-600'><GlitchText text='Austine' effect='one-time'/></span></h3>
          <p className='opacity-70 uppercase'>{'['} De<GlitchText text='velo' effect='continuous' stopDuration={3}/>per {']'}</p>
        </div>
      
      </>
  );
}

//w-[480px] h-[410px] max-sm:w-[300px] max-sm:h-[250px] shadow-primary shadow-2xl rounded-3xl

//absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]