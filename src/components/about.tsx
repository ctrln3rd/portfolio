'use client';

import React, {useState} from "react";
import { useRouter } from "next/navigation";
import useTestimonials from "@/store/testimonials";
import { SmallIcon } from "./images";
import { motion } from "framer-motion";

export default function About (){
  const router = useRouter();
  const testimonials = useTestimonials;
  const [testimIndex, setTestimIndex] = useState(0);

  const handleNextTestimonial = () => {
    if (testimIndex < testimonials.length - 1) setTestimIndex(testimIndex + 1);
  };

  const handlePrevTestimonial = () => {
    if (testimIndex > 0) setTestimIndex(testimIndex - 1);
  };

  return (
    <motion.main
       initial={{opacity: 0, y: 20}}
       animate={{opacity: 1, y: 0}}
       transition={{duration: 0.8, ease: 'easeOut'}} className="pt-[15vh] px-10">
    <section id="about" className="px-[10vw]">
            <h2 className="text-3xl">About Me</h2>
            <p>
              Hi, I'm Austine Mark, a web developer, machine learning engineer, and cloud enthusiast.
              Passionate about building intelligent solutions that enhance user experience and automate processes.
            </p>
            <p>
              With expertise in frontend and backend technologies, AI, and scalable cloud architectures,
              I bring innovative ideas to life.
            </p>
    </section>
    <section className="py-10 text-center">
            <h3 className="text-3xl max-sm:text-xl font-semibold">SOME OF THE TECHNOLOGIES I USE</h3>
          </section>
    
    {/* Testimonials Section */}
          <section className="py-10 text-center w-full px-7 max-sm:px-3">
            <h3 className="text-2xl text-end max-sm:text-xl font-semibold">WHAT OTHER PEOPLE ARE SAYING ABOUT ME</h3>
            <div className="mt-6">
              {testimonials.length > 0 && (
                <div className="relative bg-[url('/backgrounds/back2.jpg')] py-5 px-7 rounded-lg mx-auto max-w-4xl flex flex-col">
                  <div className='absolute inset-0 bg-background bg-opacity-70 z-0'></div>
                  <h4 className="font-semibold relative z-10 self-end">{testimonials[testimIndex].name}</h4>
                  <p className='z-10 relative self-start '>{testimonials[testimIndex].title} | <span className='text-primary'>{testimonials[testimIndex].company}</span></p>
                  <p className="mt-4 z-10 relative self-end text-end">{testimonials[testimIndex].content}</p>
                </div>
              )}
              <div className="mt-4 flex justify-center gap-4">
                <button onClick={handlePrevTestimonial} disabled={testimIndex === 0} className="flex gap-2 items-center">
                  <SmallIcon src='forward' alt='bt'/> <span className='opacity-70'>prev</span></button>
                <button onClick={handleNextTestimonial} disabled={testimIndex >= testimonials.length - 1} className="flex gap-2 items-center">
                  <span className='opacity-70'>next</span> <SmallIcon src='forward' alt='bt'/></button>
              </div>
            </div>
          </section>
    </motion.main>
  );
};

