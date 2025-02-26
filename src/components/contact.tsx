'use client';

import React, { useState } from "react";
//import axios from "axios";

export default function Contact() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
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
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center">TELL ME SOMETHING</h2>
      <div
        className="h-48 bg-cover bg-center mt-4"
        style={{ backgroundImage: "url(/images/back4.jpg)" }}
      ></div>

        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://www.linkedin.com/in/austine-mark-abb7282aa"
            className="text-blue-500 hover:underline"
          >
            Connect on LinkedIn
          </a>
          <a
            href="https://wa.me/254111343665?text=Hello%20lil_musk%20"
            className="text-green-500 hover:underline"
          >
            WhatsApp Me
          </a>
      </div>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold">Leave a message *required</h3>
        <input
          type="text"
          name="name"
          value={contactData.name}
          placeholder="Your name*"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={contactData.email}
          placeholder="Your email*"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          value={contactData.phone}
          placeholder="Your phone number"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          value={contactData.message}
          placeholder="Your message*"
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <input
          type="submit"
          value="Send"
          className="w-full p-2 bg-blue-500 text-white font-bold rounded cursor-pointer hover:bg-blue-600"
        />
      </form>
    </div>
  );
}
