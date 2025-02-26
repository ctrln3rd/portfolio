'use client';

import React, {useState} from "react";
import { useRouter } from "next/navigation";
import useTestimonials from "@/store/testimonials";
import { SmallIcon } from "./images";

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
    <main className="pt-[15vh]">
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1>About Me</h1>
            <p>
              Hi, I'm Austine Mark, a web developer, machine learning engineer, and cloud enthusiast.
              Passionate about building intelligent solutions that enhance user experience and automate processes.
            </p>
            <p>
              With expertise in frontend and backend technologies, AI, and scalable cloud architectures,
              I bring innovative ideas to life.
            </p>
            <button onClick={() => router.push("/contact")} className="contact-btn">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
    {/*<section className="py-10 text-center">
            <h3 className="text-3xl max-sm:text-xl font-semibold">SOME OF THE TECHNOLOGIES I USE</h3>
            <ul className="flex justify-center gap-4 mt-6">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <button onClick={() => setActiveTech(index)} className={`px-4 py-2 ${activeTech === index ? 'bg-blue-600' : 'bg-gray-700'} rounded`}>{tech.title}</button>
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-6 mt-6">
              {technologies[activeTech].icons.map((tech, index) => (
                <div key={index} className="text-center">
                  <Image src={`/images/${tech.icon}`} width={50} height={50} alt={tech.name} />
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>
          </section>*/}
    
    {/* Testimonials Section */}
          <section className="py-10 text-center w-full px-7 max-sm:px-3">
            <h3 className="text-3xl text-end max-sm:text-xl font-semibold">WHAT OTHER PEOPLE ARE SAYING ABOUT ME</h3>
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
    </main>
  );
};

