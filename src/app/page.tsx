'use client';
import Home from "@/components/home"
import About from "@/components/about"
import Projects from "@/components/projects"
import Connect from "@/components/connect"
import { motion } from "framer-motion";
import Nav from "@/components/nav";
import { ReactElement, useState } from "react";

const sections: {[key: string]: ReactElement}={
  INDEX: <Home/>,
  CREATIONS: <Projects/>,
  ABOUT: <About/>,
  CONNECT: <Connect/>,
}


export default function HomePage() {
  const [activeSection, setActiveSection] = useState('INDEX')
  return (
    <div className="w-[97dvw] h-[97dvh] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
    rounded-lg bg-background_secondary flex">
    <header className="fixed inset-0 flex flex-row items-center justify-between w-full max-h-[10%]  pt-1 px-4 z-50 ">
        <h1 className="font-semibold">AM</h1>
        {activeSection === 'INDEX' && <div className="flex items-center gap-1"> 
          <span className="text-4xl m-0 p-0 w-2 h-2 bg-primary rounded-full"></span>
          <h2>LIL MUSK</h2>
        </div>}
        {activeSection === 'ABOUT' && <div className="flex items-center gap-1"> 
          <span className="text-4xl m-0 p-0 w-2 h-2 bg-primary rounded-full"></span>
          <h2>ABOUT ME</h2>
        </div>}
        {activeSection === 'CONNECT' && <div className="flex items-center gap-1"> 
          <span className="text-4xl m-0 p-0 w-2 h-2 bg-primary rounded-full"></span>
          <h2>CONNECT WITH ME</h2>
        </div>}
        {activeSection === 'CREATIONS' && <div className="flex items-center gap-1"> 
          <span className="text-4xl m-0 p-0 w-2 h-2 bg-primary rounded-full"></span>
          <h2>MY CREATIONS</h2>
        </div>}
    </header>
      <main className="flex-auto w-full h-[90%] relative max-sm:h-[95%]">
      <motion.section
      key={activeSection}
      initial= {{opacity: 0, y: 20}}
      animate= {{opacity: 1, y: 0}}
      exit={{opacity: 0, y: -20}}
      transition={{duration: 0.5}}
      className="w-full h-full flex flex-col items-center justify-center"
      >
      {sections[activeSection]}
      </motion.section>
      </main>
      <Nav setActiveSection={setActiveSection}/>
  </div>)
}
