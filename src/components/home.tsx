'use client';

import React from 'react';
import { CoverImage, CoverImageNo, SmallIcon } from './images';
import Link from 'next/link';
export default function Home() {
  
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-dvh flex flex-col items-center justify-between bg-cover bg-center pt-[15vh] pb-10 px-5">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-cover bg-center bg-opacity-50  w-[480px] h-[410px]
        max-sm:w-[300px] max-sm:h-[250px] shadow-primary shadow-2xl rounded-3xl">
          <CoverImageNo src='/backgrounds/back9.png' alt='background image'/>
        </div>
        <div className='z-10 self-start'>
        <h2 className="text-3xl max-sm:text-">SMART WEB <br/> AND APPS</h2>
        <p className="opacity-70">Web apps, bots, software, innovation, coffee, fun</p>
        </div>
       {/*<div className='z-10 w-full flex flex-row justify-between max-sm:flex-col'>
        <div><h3>I'm <span className='text-primary'>Austine</span></h3>
        <button className='flex items-center gap-2'><span className='opacity-70'>resume</span> <SmallIcon src='forward' alt='click'/></button>
        </div>
        <div className="flex gap-4 items-center mt-4 max-sm:self-end">
          <Link href="/skills" className="px-2 py-1 rounded-lg border-x-2 bg-gradient-to-br from-primary to-transparent to-15%">expertise</Link>
          <Link href="/projects" className="px-4 py-2 rounded-lg border-y-2 bg-gradient-to-tl from-primary to-transparent to-15%">creations</Link>
        </div>
        </div>*/}
      </section>
    </main>
  );
}
