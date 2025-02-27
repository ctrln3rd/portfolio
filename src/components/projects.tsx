'use client';
import useProjects from "@/store/projects"
import { useState } from "react"
import { CoverImage, SmallIcon } from "./images";
import { motion , AnimatePresence} from "framer-motion";

interface Project {
    id: number;  
    title: string;  
    image: string;  
    description: string;  
    date?: string;  
    link?: string;  
    github?: string;  
    technologyUsed: string[];  
    features: string[];  // ✅ List of key features  
}

export default function Projects(){
    const projects = useProjects
    const [selectedProject, setselectedProject] = useState<Project | null>(projects[0])
    const handleMouseEnter =(id: number)=>{
        setselectedProject(null)
        setselectedProject(projects.find(p =>p.id === id) || null)
    }
    return(
        <div className="flex flex-col gap-5 pt-[15dvh] px-5">
            <h2>projects</h2>
            <div className="noscrollbar flex flex-row gap-10 items-center justify-center overflow-x-auto overflow-y-hidden" id="projects">
                {projects.map((project)=> (
                    <div key={project.id}onMouseOver={()=>handleMouseEnter(project.id)} className="relative w-full h-[300px]">
                        <div className="absolute inset-0"><CoverImage src={`/projects/${project.image}`} alt="project image"/></div>
                        <div className={`absolute bottom-0 w-full bg-[linear-gradient(to_bottom,rgb(18,18,18,0.4)_0%,rgb(18,18,18,0.8)_100%)]  
                            backdrop-blur-sm px-5 py-4  shadow-xl shadow-primary`}>
                        <h3 className="font-semibold">{project.title}</h3>
                        <div className="flex justify-between">
                        <a  className="text-sm" href={project.github}>github</a>
                        <a className="text-sm flex items-center" href={project.link}>live project <SmallIcon src="forward" alt="go"/></a>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            <AnimatePresence>
            {selectedProject &&  <motion.div className={`self-center flex flex-col gap-4 
            items-start justify-center max-w-[50%] shadow-sm shadow-primary p-2 max-sm:max-w-[85%]`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.8}}
                    >
                        <h3 className="text-primary">{selectedProject.title}</h3>
                        <p> {'>>'} {selectedProject.description}</p>
                        <h4 className="text-primary">features</h4>
                        <ul className="list-disc">
                          {selectedProject.features.map((item, i)=> (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                    </motion.div>
            }
            </AnimatePresence>
            
        </div>
    )
}