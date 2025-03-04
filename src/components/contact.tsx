'use client';

import React from "react";
import { SmallIcon } from "./images";
import { motion } from "framer-motion";
//import axios from "axios";

export default function Contact() {
  return (
    <motion.main
       initial={{opacity: 0, y: 20}}
       animate={{opacity: 1, y: 0}}
       transition={{duration: 0.8, ease: 'easeOut'}} className="flex flex-col justify-center gap-7 h-[90dvh] items-center">
      <section className="bg-card flex flex-col items-start gap-3 py-5 px-8 rounded-lg max-sm:px-5">
      <p className="font-bold">Only active on these : </p>
      <div className="flex flex-col gap-3 items-stretch">
        <a href="https://www.linkedin.com/in/austine-mark-abb7282aa"  className="flex  px-4 py-1 border justify-center
          border-primary border-opacity-30 items-center hover:underline max-sm:text-xs">LINKEDIN
          <SmallIcon src="visit" alt="btn"/></a>
          <div className="flex gap-4">
        <a href="https://www.instagram.com/lil_musk101?igsh=YzljYTk1ODg3Zg==" className="flex px-4 py-1 border
          border-secondary border-opacity-30 items-center hover:underline max-sm:text-xs">INSTAGRAM
          <SmallIcon src="visit" alt="btn"/></a>
        <a href="https://github.com/austinemark001" className="flex px-4 py-1 border
          border-secondary border-opacity-30 items-center hover:underline max-sm:text-xs">GITHUB
          <SmallIcon src="visit" alt="btn"/></a>
        </div>
        </div>
        </section>
    </motion.main>
  );
}
