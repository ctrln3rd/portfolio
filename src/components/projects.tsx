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
    const handlescroll = (event: React.UIEvent<HTMLDivElement>)=>{
        const currentDiv = event.currentTarget;
        const {scrollLeft, scrollWidth, clientWidth} = currentDiv
        if(scrollLeft <= 0){
            currentDiv.scrollLeft = scrollWidth
        }else if(scrollLeft + clientWidth >= scrollWidth){
            currentDiv.scrollLeft = 0
        }
    }
    const scrollRight = ()=>{
        const currentDiv = document.getElementById('projects')
            currentDiv?.scrollBy({left: 200, behavior: 'smooth'})
    }
    const scrollLeft = ()=>{
        const currentDiv = document.getElementById('projects')
            currentDiv?.scrollBy({left: -200, behavior: 'smooth'})
    }
    return(
        <motion.div
               initial={{opacity: 0, y: 20}}
               animate={{opacity: 1, y: 0}}
               transition={{duration: 0.8, ease: 'easeOut'}} className="flex items-center px-5 h-[80dvh] max-sm:px-2">
            <div className="w-full flex justify-center items-center">
           <div className="noscrollbar flex flex-row gap-10 items-center overflow-x-auto overflow-y-hidden" id="projects">
                {projects.map((project, index)=> (
                    <div key={index}>
                    <ProjectDiv project={project}/>
                    </div>
                ))}
            </div>
            </div>
            {/*<AnimatePresence>
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
            </AnimatePresence>*/}
        <div className="fixed z-50 bottom-0 left-0 pl-20 pb-8 flex gap-3 max-sm:pl-3">
            <button onClick={scrollLeft}
                className="flex gap-1 items-center rotate-180 px-3 py-1 border border-primary border-opacity-50 rounded"><SmallIcon src="forward" alt="right>"/></button>
            <button onClick={scrollRight}
            className="flex gap-1 items-center px-3 py-1  border border-primary border-opacity-50 rounded"><SmallIcon src="forward" alt="right>"/></button>
            </div>
            
        </motion.div>
    )
}

function ProjectDiv({project}: Project | any){
    const [ishoved, setishoved] = useState<boolean>(false);
    return(
        <div key={project.id} onMouseOver={()=>setishoved(true)}  onMouseOut={()=>setishoved(false)} 
        className="flex flex-col gap-2 px-7 py-4 bg-card max-sm:px-4 max-sm:py-2 rounded-xl">
            <div className="relative w-80 h-44 max-sm:w-64 max-sm:h-40"><CoverImage src={`/projects/${project.image}`} alt="project image"/></div>
            <div className="flex flex-col gap-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <div className="flex items-center justify-between">
                <a  className="text-xs" href={project.github}>github</a>
                <a className="text-xs flex items-center border border-primary border-opacity-30 px-3 py-1 max-sm:px-2 rounded" href={project.link}>
                    live project <SmallIcon src="visit" alt="go"/></a>
                </div>
            </div>
            {ishoved && <div className="max-w-60 pt-2 px-1 border-t-2 border-primary">
                <p className="text-wrap">{project.description}</p>
            </div>}
        </div>

    )
}