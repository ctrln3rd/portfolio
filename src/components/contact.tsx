'use client';

import React, { useState } from "react";
import { SmallIcon } from "./images";
import { motion } from "framer-motion";
//import axios from "axios";

export default function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /*try {
      const response = await axios.post("/api/send-message", contactData);
      
      if (response.status === 200) {
  
      } else {
        
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }*/
  };

  return (
    <motion.div
       initial={{opacity: 0, y: 20}}
       animate={{opacity: 1, y: 0}}
       transition={{duration: 0.8, ease: 'easeOut'}} className="p-6 max-w-3xl mx-auto">

      <form className="space-y-4  py-3 px-4 bg-[url('/backgrounds/back4.jpg')]" onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold">Leave a message</h3>
        <div className="flex gap-4">
        <input
          type="text"
          name="name"
          value={contactData.name}
          placeholder="Your name*"
          onChange={handleChange}
          className="w-full p-2 border rounded bg-transparent border-none border-b-2"
          required
        />
        <input
          type="text"
          name="contact"
          value={contactData.contact}
          placeholder="Your email*"
          onChange={handleChange}
          className="w-full p-2 border bg-transparent border-none border-b-2 rounded"
          required
        />
        </div>
        <textarea
          name="message"
          value={contactData.message}
          placeholder="Your message*"
          onChange={handleChange}
          className="w-full p-2 border  bg-transparent border-none  rounded"
          required
        ></textarea>
       <button type="submit">send<SmallIcon src="forward" alt="btn"/></button>
      </form>
      <div className="fixed z-50 bottom-0 left-0 pl-20 pb-8 flex flex-col gap-1 items-start">
        <a href="https://www.linkedin.com/in/austine-mark-abb7282aa"  className="flex  hover:underline">Linkedin
          <SmallIcon src="visit" alt="btn"/></a>
        <a href="https://wa.me/254111343665?text=Hello%20lil_musk%20" className="flex hover:underline">WhatsApp Me
          <SmallIcon src="visit" alt="btn"/></a>
        <a href="https://wa.me/254111343665?text=Hello%20lil_musk%20" className="flex hover:underline">instagram
          <SmallIcon src="visit" alt="btn"/></a>
        <a href="https://wa.me/254111343665?text=Hello%20lil_musk%20" className="flex hover:underline">github
          <SmallIcon src="visit" alt="btn"/></a>
        </div>
    </motion.div>
  );
}
