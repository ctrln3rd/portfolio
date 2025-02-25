import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const About: React.FC = () => {
  const router = useRouter();

  return (
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
          <div className="about-image">
            <Image 
              src="/images/profile.jpg" 
              alt="Austine Mark" 
              width={300} 
              height={300} 
              className="profile-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
