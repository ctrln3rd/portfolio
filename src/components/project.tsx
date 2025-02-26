'use-client';

import useProjects from "@/store/projects";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CoverImage } from "./images";

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

type projectProps = {
    title: string
}


export default function Project({title}: projectProps){
    const [project, setProject] = useState<Project | null>(null)
    useEffect(()=>{
        const foundProject = useProjects.find((p)=>p.title.toLowerCase() === title)
        if(!foundProject){

        }else{
            setProject(foundProject)
        }
    }, [title, useProjects])
    if(!project)return null
    return(
        <div className="pt-[15vh] px-[10vw] flex flex-col gap-7">
            <h2 className="text-2xl font-semibold self-end">{project.title} | <span className="text-primary">{project.date}</span></h2>
            <div className="relative w-[50vw] h-[40vh] max-sm:w-[85vw] max-sm:h-[20vh]">
                <CoverImage src={`/projects/${project.image}`} alt="project image"/>
            </div>
          
            <p>{project.description}</p>
            <div className="flex gap-10">
            <a href={project.link} className="px-3 py-1 border-x-2 rounded">live project</a>
            <a href={project.github}  className="px-3 py-1 border-x-2 rounded">github</a>
            </div>
            <ul className="list-disc">
              {project.features.map((ft) => (
                <li>{ft}</li>
              ))}
            </ul>
            <div>
                {}
            </div>
        </div>
    )
}