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
        <div className='z-10 absolute top-[25%] left-[5%] max-sm:top-[15%] max-w-[30%] max-sm:max-w-[70%]'>
        <h2 className="text-lg font-semibold uppercase">Creating futur<GlitchText text='i' effect='continuous' stopDuration={3}/>stic digital exper<GlitchText text='i' effect='continuous' stopDuration={3}/>ences that feel like 
        th<GlitchText text='e' effect='continuous' stopDuration={3}/>y’re from the next dec<GlitchText text='a' effect='continuous' stopDuration={3}/>de.
          </h2>
        </div>
        <div className='fixed flex flex-col items-start gap-2 z-50 bottom-0 left-0 pl-20 pb-8 text-base max-sm:pl-3 max-w-[30%] max-sm:max-w-[40%]'>
          <p className='opacity-70 uppercase'>{'['} De<GlitchText text='velo' effect='continuous' stopDuration={3}/>per {']'}</p>
          <p className='text-teal-400 uppercase text-xs font-medium'>Ready to work together? Let’s build something futuristic. Connect with me</p>
        </div>
      
      </>
  );
}

//w-[480px] h-[410px] max-sm:w-[300px] max-sm:h-[250px] shadow-primary shadow-2xl rounded-3xl

//absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]