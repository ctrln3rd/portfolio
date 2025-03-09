'use client';

import React, {useState} from "react";
import useTestimonials from "@/store/testimonials";
import { MediumIcon, SmallIcon } from "./images";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  link?: string;
}
interface Tech{
  src: string;
  name: string;
}
const technlogies: Tech[] = [
  {src: 'typescript', name: 'typescript'},
  {src: 'next', name: 'next'},
  {src: 'tailwind', name: 'tailwindcss'},
  {src: 'node', name: 'node.js'},
  {src: 'python', name: 'python'},
  {src: 'tensorflow', name: 'tensorflow'},
] 

export default function About (){
  const testimonials = useTestimonials;
  const [hoveredTestim, setHoveredTestim] = useState<Testimonial | null>(null)

  return (
    <>
    <div className="flex flex-col gap-4 max-w-[60%] max-md:max-w-[80%] max-sm:max-w-[98%] px-7 py-5 max-sm:px-2 bg-card rounded-xl">
      {!hoveredTestim && <div>
            <p>
              Hi, I'm Austine Mark, a developer based in Kenya but work worldwide.
              Passionate about building intelligent solutions that enhance user experience and automate processes.
            </p>
            <div className="flex  flex-col items-start gap-3">
              I specialize in:
              <ul className="flex flex-col gap-4 items-start">
              <li className="opacity-80 flex gap-1 items-center"><MediumIcon src="web" alt="icon"/> WEB DEVELOPMENT</li> 
              <li className="opacity-80 flex gap-1 items-center"><MediumIcon src="ml" alt="icon"/> MACHINE LEARNING</li>
              <li className="opacity-80 flex gap-1 items-center"><MediumIcon src="cloud" alt="icon"/> CLOUD COMPUTING</li>
              </ul>
              <div className="self-end flex gap-4 flex-wrap">
                {technlogies.map((tech, index)=>(
                  <button key={index} className="flex p-1 shadow-sm rounded shadow-primary">
                    <SmallIcon src={tech.src} alt={tech.name} />
                  </button>
                ))}
              </div>
              I bring innovative ideas to life.
            </div>
      </div>}
      <div className="flex flex-col gap-3">
        <h4 className="text-muted_text text-base font-bold">WHAT THEY SAY: </h4>
        <div className="flex gap-5 flex-wrap max-sm:gap-2">
          {testimonials.map((t, i)=>(
            <button key={i} className={`bg-background_secondary px-3 py-1 rounded cursor-pointer 
              ${hoveredTestim?.id === t.id && 'text-secondary' }`} onClick={()=>setHoveredTestim(t)}>{t.name}</button>
          ))}
        </div>
        {hoveredTestim && <div className="flex flex-col gap-2 w-full max-sm:self-center mt-2
        px-3 py-1 rounded border border-borders">
            <p className='z-10 relative self-end flex gap-1 '>{hoveredTestim.title} | 
              <span className='text-muted_text'>{hoveredTestim.company}</span></p>
            <p className="mt-4 z-10 relative">{hoveredTestim.content}</p>
          </div>}
      </div>
      {hoveredTestim && 
      <button onClick={()=>setHoveredTestim(null)} className="self-start px-3 py-1 border border-borders border-opacity-70">close</button>}
    </div>
    <div className="fixed left-7 bottom-5 w-36 h-36 rounded-full bg-[url('/me.jpg')] 
    bg-center bg-cover max-md:w-28 max-md:h-28 max-sm:left-2 max-sm:w-24 max-sm:h-24"></div>

  </>
  );
};

