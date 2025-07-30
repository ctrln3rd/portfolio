'use client';

import useProjects, { Project } from "@/store/projects";
import { useEffect, useMemo, useState } from "react";
import { CoverImage } from "./images";
import { motion } from "framer-motion";

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function Projects() {
  const projects: Project[] = useProjects;
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // how many projects visible

  // Update visibleCount on window resize
  useEffect(() => {
    const updateCount = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);       // mobile: 1
      else if (w < 1024) setVisibleCount(2); // tablet: 3
      else setVisibleCount(3);               // desktop: 5
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  const activeProject = useMemo(
    () => (projects?.length ? projects[mod(activeIndex, projects.length)] : null),
    [projects, activeIndex]
  );

  const goPrev = () => {
    if (!projects.length) return;
    setActiveIndex((idx) => mod(idx - 1, projects.length));
  };

  const goNext = () => {
    if (!projects.length) return;
    setActiveIndex((idx) => mod(idx + 1, projects.length));
  };

  if (!projects.length) {
    return (
      <div className="w-full text-center py-10 opacity-60">
        No projects yet.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="self-start text-sm max-sm:text-xs opacity-70 pl-[10%]">
        <span className="text-teal-500">{activeIndex + 1}/</span><span>{projects.length}</span>
      </div>
      {/* Top info */}
      <div className="flex items-center gap-10">
      {activeProject?.solution && <div className="flex flex-col gap-0 items-start">
        <span className="uppercase text-sm">Solution:</span>
        <p className="opacity-60">{activeProject?.solution}</p>
      </div>}
      {activeProject?.client && <div className="flex flex-col gap-0 items-start">
        <span className="uppercase text-sm">Client:</span>
        <p className="opacity-60">{activeProject?.client}</p>
      </div>}
      </div>

      {/* Carousel */}
      <div className="w-full flex justify-center overflow-hidden">
        <div className="flex items-stretch gap-4 transition-all duration-300">
          {Array.from({ length: visibleCount }).map((_, idx) => {
            const offset = idx - Math.floor(visibleCount / 2);
            const project = projects[mod(activeIndex + offset, projects.length)];
            const isActive = offset === 0;

            return (
              <motion.article
                key={project.id ?? `${project.title}-${offset}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isActive
                    ? { opacity: 1, scale: 1, filter: "none" }
                    : { opacity: 0.6, scale: 0.92, filter: "blur(1px)" }
                }
                transition={{ duration: 0.3 }}
                className="w-[80vw] sm:w-[40vw] lg:w-[22vw] max-w-[400px] 
                           bg-card/90 rounded-xl shadow-md border border-white/5 flex flex-col gap-3 p-3"
              >
                <div className="relative w-full rounded-lg overflow-hidden aspect-[16/9]">
                  <CoverImage
                    src={`/projects/${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-base">{project.title}</h3>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Bottom info */}
      <div className="flex items-center gap-10">
      <div className="flex items-center gap-4">
        <span className="uppercase text-sm">
          {activeProject?.link ? "Link:" : "Title:"}
        </span>
        {activeProject?.link ? (
          <a
            href={activeProject.link}
            target="_blank"
            className="text-teal-400"
          >
            {activeProject.title}
          </a>
        ) : (
          <span className="opacity-60">{activeProject?.title}</span>
        )}
      </div>
      <a href={activeProject?.github} className="bg-black px-3 py-0.5 uppercase font-semibold opacity-60">Github</a>
      </div>

      {/* Navigation buttons */}
      <div className="flex gap-3">
        <button
          onClick={goPrev}
          className="px-3 py-1 border border-teal-600/60 rounded text-xl"
        >
          &#8592;
        </button>
        <button
          onClick={goNext}
          className="px-3 py-1 border border-teal-600/60 rounded text-xl"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
