'use client';

import React from 'react';
import GlitchText from './glitch';

export default function Home() {
  return (
      <>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-center w-full h-full rounded-lg
        bg-[url('/hero-background.jpg')] bg-contain bg-no-repeat ">
          {/*<CoverImageNo src='/back1.jpg' alt='background image'/>*/}
        </div>
        <div className='z-10 absolute top-[30%] left-[10%] max-sm:top-[20%]'>
        <h2 className="text-xl uppercase">SM<GlitchText text='AR' effect='one-time'/>T <GlitchText text='WE' stopDuration={3}/>B<br/> AND <GlitchText text='AP' stopDuration={3}/>PS</h2>
        <p className="opacity-70">Web apps, bots, softwares, fun</p>
        </div>
        <div className='fixed z-50 bottom-0 left-0 pl-20 pb-8 text-base max-sm:pl-3'>
          <h3>Hello Buddy....<br/> I'm <span className='text-primary'><GlitchText text='Austine' effect='one-time'/></span></h3>
        </div>
      
      </>
  );
}

//w-[480px] h-[410px] max-sm:w-[300px] max-sm:h-[250px] shadow-primary shadow-2xl rounded-3xl