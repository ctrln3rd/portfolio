'use client';

import React from "react";
import { SocialIcon } from "./images";
import AsciiArt from "./ascii";
//import axios from "axios";

export default function Connect() {
  return (
    <>
    <div className="absolute top-0 left-0 w-full h-full z-0">
          {/*<AsciiArt imageUrl="saturn1" className="w-full h-full"/>*/}
        </div>
    <div className="bg-card bg-opacity-90 flex flex-col items-start gap-3 py-5 px-8 rounded-lg max-sm:px-5 relative z-10">
    <h3 className="font-bold">Active on these : </h3>
    <div className="flex flex-col gap-3 items-stretch min-w-[300px]">
      <a href="https://www.linkedin.com/in/austine-mark-abb7282aa"  className="flex px-4 py-1 border  gap-1 justify-center font-semibold
        border-teal-400 border-opacity-30 items-center hover:underline"><SocialIcon src="in" alt="icon"/> LINKEDIN
      </a>
      <a href="https://github.com/ctrln3rd" className="flex px-4 py-1 border gap-2 justify-center font-semibold
        border-teal-400 border-opacity-30 items-center hover:underline">GITHUB
        <SocialIcon src="gt" alt="icon"/></a>
      </div>
      </div>
    </>
  );
}
