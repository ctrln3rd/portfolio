'use client';

import React, {useState} from "react";
import useTestimonials from "@/store/testimonials";
import { motion } from "framer-motion";
import GlitchText from "./glitch";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  link?: string;
}

const skills: string[] = ['web development', 'machine learning', 'cloud computing']

export default function About (){
  const testimonials = useTestimonials;
  const [istestims, settestims] = useState(false)
  const [hoveredTestim, setHoveredTestim] = useState<Testimonial>(testimonials[0])

  return (
    <>
    <div className="flex flex-col gap-4 max-w-[60%] max-md:max-w-[80%] max-sm:max-w-[98%] px-7 py-5 max-sm:px-2 bg-card rounded-xl">
      {!istestims && <div>
            <p>
              Hi, I'm Austine Mark <span className="opacity-70">&#91; ctrlN3rd &#93;</span>, a developer based in Kenya but work worldwide.
              Passionate about building intelligent solutions that enhance user experience and automate processes.
            </p>
            <div className="flex  flex-col items-start gap-3">
              I specialize in:
              <div className="flex flex-col gap-4 items-stretch">
              {/*<p className="opacity-70 px-3 py-1 border border-borders uppercase"> &#8594; Web Dev<GlitchText text="elo"intensity={5}/>pment</p>
               <p className="opacity-70 px-3 py-1 border border-borders uppercase">&#8594; Cl<GlitchText text="ou" intensity={5}/>d Computing</p>
               <p className="opacity-70 px-3 py-1 border border-borders uppercase">&#8594; Machine Le<GlitchText text="arn" intensity={5}/>ing</p>*/}
               {skills.map((skill, index)=>(
                <div className="relative px-4 py-2 overflow-hidden" key={index}>
                <motion.div
                className="absolute inset-0 border border-borders rounded-md"
                initial={{rotate: 0}}
                animate={{rotate: 360}}
                transition={{repeat: Infinity, duration: 3, ease: 'linear', delay: 1}}
                />

                {/*<motion.div className="absolute inset-0 border border-borders"
                animate={{
                  borderImageSource: 'linear-gradient(45deg, rgb(187, 134, 252, 0.5), rgb(255, 255, 255, 0.2))',
                  borderImageSlice: 1
                }}
                transition={{
                  repeat: Infinity, repeatType: 'mirror', duration: 2
                }}
                />*/}
                <span className="relative opacity-60 uppercase">{skill}</span>
                </div>
               ))}
              </div>
              I bring innovative ideas to life.
            </div>
      </div>}
      <button className="text-muted_text self-start uppercase" onClick={()=>settestims(true)}>
        what <GlitchText text="they" effect="triggered"/> say  &#8594;</button>
      {istestims && <div className="flex flex-col gap-3">
        <div className="flex gap-5 flex-wrap max-sm:gap-2">
          {testimonials.map((t, i)=>(
            <div key={i} className='relative bg-background_secondary px-3 py-1 rounded cursor-pointer' onClick={()=>setHoveredTestim(t)}>
                {hoveredTestim?.id === t.id &&<motion.div
                  className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-text"
                  initial= {{scaleX: 0}}
                  animate= {{scaleX: 1}}
                  exit={{scaleX: 0}}
                  transition={{duration: 0.3, ease: 'easeInOut'}}
                  >
                  </motion.div>}
                {t.name}</div>
          ))}
        </div>
        {hoveredTestim && <div className="flex flex-col gap-2 w-full max-sm:self-center mt-2
        px-3 py-1 rounded border border-borders">
            <p className='z-10 relative self-end flex gap-1 '>{hoveredTestim.title} | 
              <span className='text-muted_text'>{hoveredTestim.company}</span></p>
            <p className="mt-4 z-10 relative">{hoveredTestim.content}</p>
          </div>}
      </div>}
      {istestims && 
      <button onClick={()=>settestims(false)} className="self-start px-3 py-1 border border-borders border-opacity-70">close</button>}
    </div>
    <div className="fixed left-7 bottom-5 w-36 h-36 rounded-full bg-[url('/me.jpg')] 
    bg-center bg-cover max-md:w-28 max-md:h-28 max-sm:left-2 max-sm:w-24 max-sm:h-24"></div>

  </>
  );
};

