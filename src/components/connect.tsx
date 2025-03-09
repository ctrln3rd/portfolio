'use client';

import React from "react";
import { SmallIcon } from "./images";
import { motion } from "framer-motion";
//import axios from "axios";

export default function Connect() {
  return (
      <div className="bg-card flex flex-col items-start gap-3 py-5 px-8 rounded-lg max-sm:px-5">
      <h3 className="font-bold">Active on these : </h3>
      <div className="flex flex-col gap-3 items-stretch">
        <a href="https://www.linkedin.com/in/austine-mark-abb7282aa"  className="flex  px-4 py-1 border  gap-1 justify-center
          border-primary border-opacity-30 items-center hover:underline">LINKEDIN
       <SmallIcon src="in" alt="icon"/></a>
          <div className="flex gap-4  justify-stretch">
        <a href="https://www.instagram.com/lil_musk101?igsh=YzljYTk1ODg3Zg==" className="flex px-4 py-1 border gap-2
          border-secondary border-opacity-30 items-center hover:underline">INSTAGRAM
           <SmallIcon src="ig" alt="icon"/>
         </a>
        <a href="https://github.com/austinemark001" className="flex px-4 py-1 border gap-2
          border-secondary border-opacity-30 items-center hover:underline">GITHUB
          <SmallIcon src="gt" alt="icon"/></a>
        </div>
        </div>
        </div>
  );
}
