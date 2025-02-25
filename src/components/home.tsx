'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import useProjects from '@/store/projects';
import useTestimonials from '@/store/testimonials';

export default function Home() {
  const router = useRouter();
  const projects = useProjects;
  const testimonials = useTestimonials;
  const [testimIndex, setTestimIndex] = useState(0);
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    { title: 'React', icons: [{ name: 'React', icon: 'react.png' }] },
    { title: 'Next.js', icons: [{ name: 'Next.js', icon: 'nextjs.png' }] },
    { title: 'Node.js', icons: [{ name: 'Node.js', icon: 'nodejs.png' }] },
  ];

  const handleNextTestimonial = () => {
    if (testimIndex < testimonials.length - 1) setTestimIndex(testimIndex + 1);
  };

  const handlePrevTestimonial = () => {
    if (testimIndex > 0) setTestimIndex(testimIndex - 1);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-between bg-cover bg-center pt-[15vh] pb-10 px-5">
        <div className="absolute inset-0 bg-[url('/backgrounds/back.jpg')] bg-cover bg-center bg-opacity-50"></div>
        <div className='z-10 self-start'>
        <h2 className="text-4xl font-bold max-sm:text-">SMART WEB <br/> AND APPS</h2>
        <p className="opacity-70">Web apps, bots, software, innovation, coffee, fun</p>
        </div>
        <div className='z-10 w-full flex flex-row justify-between'>
        <div><h3>I'm <span className='text-primary'>Austine</span></h3>
        <a>instagram</a>
        <a>linkedin</a>
        </div>
        <div className="flex gap-4 mt-4">
          <Link href="/about" className="px-4 py-2 rounded button-one shadow-[_4px_-4px_white, 4px_4px_white]">Who&apos;s this guy?</Link>
          <Link href="#projects" className="px-4 py-2 bg-green-600 rounded">View My Creations</Link>
        </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 text-center">
        <h3 className="text-3xl font-bold">WHAT I'M BEST IN</h3>
        <div className="flex  justify-center gap-8 mt-6 items-stretch max-sm:flex-col px-2">
          <div className="skill">
            <div className='self-end flex flex-col items-end'>
            <div className='absolute inset-0 bg-gradient-to-br from-primary to-30% to-transparent shadow-xl z-0'></div>
            <h4 className="font-semibold ">Web Development</h4>
            <p>Building user-friendly web applications with great UX.</p>
            </div>
            <Image src="/images/web-development.png" width={50} height={50} alt="Web Dev" className='self-start' />
          </div>
          <div className="skill">
            <div className='self-start flex flex-col items-start'>
            <h4 className="font-semibold">Cloud Computing</h4>
            <p>Optimizing scalable and secure cloud infrastructure.</p>
            </div>
            <Image src="/images/cloud-computing.png" width={50} height={50} alt="Cloud" className='self-end' />
          </div>
          <div className="skill">
            <div className='self-end flex flex-col items-end'>
            <h4 className="font-semibold">AI & Machine Learning</h4>
            <p>Developing AI-driven solutions that continuously improve.</p>
            </div>
            <Image src="/images/machine-learning.png" width={50} height={50} alt="AI" className='self-start'/>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 text-center">
        <h3 className="text-3xl font-bold">COOL THINGS I HAVE CREATED</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {projects.map((project: any) => (
            <div key={project.id} className="bg-gray-800 p-4 rounded-lg">
              <Image src={`/images/projects/${project.image}`} width={300} height={200} alt={project.title} className="rounded" />
              <h4 className="mt-2 font-semibold">{project.title}</h4>
              <p>{project.description}</p>
              <Link href={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`} className="text-blue-400">View Details</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-10 text-center">
        <h3 className="text-3xl font-bold">SOME OF THE TECHNOLOGIES I USE</h3>
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
      </section>

      {/* Testimonials Section */}
      <section className="py-10 text-center">
        <h3 className="text-3xl font-bold">WHAT OTHER PEOPLE ARE SAYING ABOUT ME</h3>
        <div className="mt-6">
          {testimonials.length > 0 && (
            <div className="bg-gray-800 p-4 rounded-lg mx-auto max-w-2xl">
              <h4 className="font-semibold">{testimonials[testimIndex].name}</h4>
              <p>{testimonials[testimIndex].title} | {testimonials[testimIndex].company}</p>
              <p className="mt-2">{testimonials[testimIndex].content}</p>
            </div>
          )}
          <div className="mt-4 flex justify-center gap-4">
            <button onClick={handlePrevTestimonial} disabled={testimIndex === 0} className="px-4 py-2 bg-gray-700 rounded">Prev</button>
            <button onClick={handleNextTestimonial} disabled={testimIndex >= testimonials.length - 1} className="px-4 py-2 bg-gray-700 rounded">Next</button>
          </div>
        </div>
      </section>
    </main>
  );
}
