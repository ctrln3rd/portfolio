'use client';

import React, {useState} from "react";
import { useRouter } from "next/navigation";
import useTestimonials from "@/store/testimonials";
import { SmallIcon } from "./images";
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
  const router = useRouter();
  const testimonials = useTestimonials;
  const [testimIndex, setTestimIndex] = useState(0);
  const [hoveredTestim, setHoveredTestim] = useState<Testimonial | null>(testimonials[0])

  const handleNextTestimonial = () => {
    if (testimIndex < testimonials.length - 1){
      setTestimIndex(testimIndex + 1);
    }else{
      setTestimIndex(0)
    }   
  };


  return (
    <motion.main
       initial={{opacity: 0, y: 20}}
       animate={{opacity: 1, y: 0}}
       transition={{duration: 0.8, ease: 'easeOut'}} className="flex flex-col justify-center items-center h-dvh px-10 max-sm:px-2">
    <section className="flex flex-col gap-4 max-w-[60%] max-md:max-w-[80%] max-sm:max-w-[98%] px-7 py-5 max-sm:px-2 bg-card">
      <div>
            <p className="text-sm/7">
              Hi, I'm Austine Mark, a developer based in Kenya but work worldwide.
              Passionate about building intelligent solutions that enhance user experience and automate processes.
            </p>
            <div className="flex  flex-col items-start gap-3">
              I specialize in:
              <ul className="flex flex-col gap-4 items-start">
              <li className="font-bold">WEB DEVELOPMENT</li> 
              <li className="font-bold">MACHINE LEARNING</li>
              <li className="font-bold">CLOUD COMPUTING</li>
              </ul>
              I bring innovative ideas to life.
            </div>
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-primary text-base font-bold">WHAT THEY SAY: </h4>
        <ul className="flex gap-5 flex-wrap max-sm:gap-2">
          {testimonials.map((t, i)=>(
            <li key={i} className="bg-background px-3 py-1 rounded cursor-pointer" onMouseOver={()=>setHoveredTestim(t)}>{t.name}</li>
          ))}
        </ul>
        {hoveredTestim && <div className="flex flex-col gap-2 max-w-[70%] rounded shadow-md shadow-primary">
            <p className='z-10 relative self-start '>{hoveredTestim.title} | 
              <span className='text-primary'>{hoveredTestim.company}</span></p>
            <p className="mt-4 z-10 relative self-end text-end">{hoveredTestim.content}</p>
          </div>}

      </div>
    </section>
    {/* Testimonials Section 
          <section className="py-10 text-center px-7 rounded-xl bg-card max-sm:px-1 max-sm:py-2">
            <h3 className="text-xl text-end max-sm:text-lg font-semibold">WHAT PEOPLE ARE SAY</h3>
            <div className="mt-6">
              {testimonials.length > 0 && (
                <div className="relative py-5 px-7 rounded-lg mx-auto max-w-4xl flex flex-col shadow-lg shadow-primary max-sm:px-1 max-sm:py-1">
                  <h4 className="font-semibold relative z-10 self-end">{testimonials[testimIndex].name}</h4>
                  <p className='z-10 relative self-start '>{testimonials[testimIndex].title} | <span className='text-primary'>{testimonials[testimIndex].company}</span></p>
                  <p className="mt-4 z-10 relative self-end text-end">{testimonials[testimIndex].content}</p>
                </div>
              )}
              <div className="mt-4 flex justify-center gap-4">
                {/*<button onClick={handlePrevTestimonial} disabled={testimIndex === 0} className="flex gap-2 items-center">
                  <div className="rotate-180"><SmallIcon src='forward' alt='bt'/></div> <span className='opacity-70'>prev</span></button>*
                <button onClick={handleNextTestimonial} className="flex gap-2 items-center">
                  <span className='opacity-70'>next</span> <SmallIcon src='forward' alt='bt'/></button>
              </div>
            </div>
          </section>*/}
    </motion.main>
  );
};

