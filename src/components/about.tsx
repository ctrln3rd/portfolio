'use client';

import React, {useState, useEffect} from "react";
import useTestimonials from "@/store/testimonials";
import { motion } from "framer-motion";
import GlitchText from "./glitch";
import AsciiArt from "./ascii";

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
  const [fullImage, setFullImage] = useState(false)

  return (
    <>
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <AsciiArt imageUrl="saturn" className="w-full h-full"/>
    </div>
    <div className="flex flex-col gap-4 max-w-[60%] max-md:max-w-[80%] max-sm:max-w-[98%] px-7 py-5 max-sm:px-2 bg-card rounded-xl z-10 relative bg-opacity-80">
      {!istestims && <div>
        <div className={`flex ${fullImage ? 'flex-col' : 'flex-row'} items-center gap-3`}>
          <img
          src="/me.webp"
          className={`rounded-full aspect-square 
            ${!fullImage ? 'w-[5dvw] max-md:w-[10dvw] max-sm:w-[15dvw]':'w-[30dvw] max-md:w-[45dvw] max-sm:w-[60dvw]'}`}
          />
            <button onClick={()=>setFullImage(!fullImage)} className="lowercase opacity-80 outline-none">
              &#91; {!fullImage ? (<span>Z<GlitchText text="OO"/>M</span>): 
            (<span>SH<GlitchText text="RI"/>NK</span>)} &#93;</button>
            </div>
            {!fullImage && <>
            <p className="mt-3">
              Hi, I'm Austine Mark <span className="opacity-70">&#91; ctrlN3rd &#93;</span>, a developer based in Kenya but work worldwide.
              Passionate about building intelligent solutions that enhance user experience and automate processes.
            </p>
            <div className="flex  flex-col items-start gap-3">
              I specialize in:
              <div className="flex flex-col gap-4 items-stretch">
               {skills.map((skill, index)=>(
                <div className="relative px-4 py-2 overflow-hidden" key={index}>
                <motion.div
                className="absolute inset-0 border border-borders rounded-md"
                initial={{rotate: 0}}
                animate={{rotate: 360}}
                transition={{repeat: Infinity, duration: 3, ease: 'linear', delay: 1}}
                />
                <span className="relative opacity-60 uppercase">{skill}</span>
                </div>
               ))}
              </div>
              I bring innovative ideas to life.
            </div>
            </>}
      </div>}
      {!fullImage && <button className="text-muted_text uppercase" onClick={()=>settestims(!istestims)}>
      &#91; {!istestims ? (<span>W<GlitchText text="ha"/>t th<GlitchText text="ey"/> say</span>) :
       (<span>c<GlitchText text="lo"/>se</span>)} &#93;</button>}
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
    </div>

  </>
  );
};

