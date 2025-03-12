'use client';
import Loader from "@/components/loader";
/*import Index from "@/components";
import About from "@/components/about"
import Projects from "@/components/projects"
import Connect from "@/components/connect"*/
import { AnimatePresence, motion } from "framer-motion";
import Nav from "@/components/nav";
import { ReactElement, useState, useEffect } from "react";
import GlitchText from "@/components/glitch";
import dynamic from "next/dynamic";


const sections ={
  INDEX: dynamic(()=> import("@/components/index")),
  CREATIONS: dynamic(()=> import("@/components/projects")),
  ABOUT: dynamic(()=> import("@/components/about")),
  CONNECT: dynamic(()=> import("@/components/connect")),
}


export default function HomePage() {
  const [activeSection, setActiveSection] = useState('INDEX')
  const [isLoading, setIsloading] = useState(true)
  const [loadedSections, setLoadedSections] = useState(new Set(['index']))

  const handleComplete = ()=>{
    setIsloading(false)
  }
  useEffect(()=>{
    setLoadedSections((prev)=> new Set(prev).add(activeSection))
  }, [activeSection])
  return (
    <div className="w-[97dvw] h-[97dvh] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
    rounded-lg bg-background_secondary flex">

    {isLoading && <Loader onComplete={handleComplete}/>}


    {!isLoading && <>
    <header className="fixed inset-0 flex flex-row items-center justify-between w-full h-fit px-4 z-50">
        <h1 className="font-semibold text-3xl">AM</h1>
        {activeSection === 'INDEX' && <div className="flex items-center gap-1"> 
          <span className="text-4xl m-0 p-0 w-2 h-2 bg-primary rounded-full"></span>
          <h2>CTRL <GlitchText text="N3RD"/></h2>
        </div>}
        {activeSection === 'ABOUT' && <div className="flex items-center gap-1"> 
          <span className="text-4xl m-0 p-0 w-2 h-2 bg-primary rounded-full"></span>
          <h2>ABOUT <GlitchText text="ME"/></h2>
        </div>}
        {activeSection === 'CONNECT' && <div className="flex items-center gap-1"> 
          <span className="text-4xl m-0 p-0 w-2 h-2 bg-primary rounded-full"></span>
          <h2>CONNECT <GlitchText text="WITH"/> ME</h2>
        </div>}
        {activeSection === 'CREATIONS' && <div className="flex items-center gap-1"> 
          <span className="text-4xl m-0 p-0 w-2 h-2 bg-primary rounded-full"></span>
          <h2>MY CREATI<GlitchText text="ONS"/></h2>
        </div>}
    </header>
      <main className="flex-auto w-full h-[90%] relative max-sm:h-[95%]">
      <AnimatePresence mode="wait">
      {Array.from(loadedSections).map((section)=>{
        const SectionComponent = sections[section as keyof typeof sections];
        return section === activeSection ? (
        <motion.section
        key={activeSection}
        initial= {{opacity: 0, scale: 0.9}}
        animate= {{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0.9}}
        transition={{duration: 0.5}}
        className="w-full h-full flex flex-col items-center justify-center"
        >
          <SectionComponent/>
        </motion.section>
        ): null;
      })}
      </AnimatePresence>
      </main>
      <Nav setActiveSection={setActiveSection}/>
      </>}
  </div>)
}
