'use client';

import React, {useState} from "react";
import useTestimonials from "@/store/testimonials";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  link?: string;
}

export default function About (){
  const testimonials = useTestimonials;
  const [hoveredTestim, setHoveredTestim] = useState<Testimonial | null>(null)

  return (
    <motion.main
       initial={{opacity: 0, y: 20}}
       animate={{opacity: 1, y: 0}}
       transition={{duration: 0.8, ease: 'easeOut'}} className="flex flex-col justify-center items-center h-dvh px-10 max-sm:px-2 max-h-[90dvh]">
    <section className="flex flex-col gap-4 max-w-[60%] max-md:max-w-[80%] max-sm:max-w-[98%] px-7 py-5 max-sm:px-2 bg-card">
      <div>
            <p className="text-sm/7">
              Hi, I'm Austine Mark, a developer based in Kenya but work worldwide.
              Passionate about building intelligent solutions that enhance user experience and automate processes.
            </p>
            <div className="flex  flex-col items-start gap-3">
              I specialize in:
              <ul className="flex flex-col gap-4 items-start">
              <li className="opacity-80">{'>>>'} WEB DEVELOPMENT</li> 
              <li className="opacity-80">{'>>>'} MACHINE LEARNING</li>
              <li className="opacity-80">{'>>>'} CLOUD COMPUTING</li>
              </ul>
              I bring innovative ideas to life.
            </div>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-primary text-base font-bold">WHAT THEY SAY: </h4>
        <ul className="flex gap-5 flex-wrap max-sm:gap-2">
          {testimonials.map((t, i)=>(
            <li key={i} className={`bg-background px-3 py-1 rounded cursor-pointer 
              ${hoveredTestim?.id === t.id && 'text-secondary' }`} onClick={()=>setHoveredTestim(t)}>{t.name}</li>
          ))}
        </ul>
        {hoveredTestim && <div className="flex flex-col gap-2 max-w-[70%] max-sm:self-center max-sm:max-w-[90%] text-xs mt-2
        px-3 py-1 rounded shadow-sm shadow-primary">
            <p className='z-10 relative self-start flex gap-1 '>{hoveredTestim.title} | 
              <span className='text-primary'>{hoveredTestim.company}</span></p>
            <p className="mt-4 z-10 relative self-end text-end ">{hoveredTestim.content}</p>
          </div>}

      </div>
    </section>
    <div className="fixed left-7 bottom-5 w-36 h-36 rounded-full bg-[url('/me.jpg')] 
    bg-center bg-cover max-md:w-28 max-md:h-28 max-sm:left-2 max-sm:w-24 max-sm:h-24"></div>

    </motion.main>
  );
};

