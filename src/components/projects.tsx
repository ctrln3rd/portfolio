'use client';
import useProjects from "@/store/projects"
import { useState } from "react"
import { CoverImage } from "./images";
export default function Projects(){
    const projects = useProjects
    const [activeProject, setactiveProject] = useState<null | null>(null)
    return(
        <div>
            <h2>projects</h2>
            <div>
                {projects.map((project)=> (
                    <div key={project.id}>
                        <div className="relative w-80 h-56"><CoverImage src={`/projects/${project.image}`} alt="project image"/></div>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>live project</a>
                        <a href={project.github}>github</a>
                    </div>
                ))}
            </div>
        </div>
    )
}