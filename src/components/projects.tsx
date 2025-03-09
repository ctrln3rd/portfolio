'use client';
import useProjects from "@/store/projects"
import { useState, useRef, useEffect } from "react"
import { CoverImage, SmallIcon } from "./images";
import { motion , AnimatePresence} from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation'

interface Project {
    id: number;  
    title: string;  
    image: string;  
    description: string;  
    date?: string;  
    link?: string;  
    github?: string; 
    client?: string[];   
}

export default function Projects(){
    const projects = useProjects
    const swiperRef = useRef<any>(null)
    const [selectedProject, setselectedProject] = useState<Project | null>(null)
    const [spaceBetween, setSpaceBetween] = useState(-3); // Default value
    const [initialSlide, setInitialSide] = useState(1)

    useEffect(() => {
        if (typeof window !== "undefined") {
          setSpaceBetween(window.innerWidth > 768 ? -10 : -3);
        }
      }, []);
    

    const handleSeclect =(id: number, index: number)=>{
        setselectedProject(null)
        setselectedProject(projects.find(p =>p.id === id) || null)
        setInitialSide(index)
    }
    return(
        <>
            {!selectedProject && <Swiper
               modules={[Navigation]}
               initialSlide={initialSlide}
               spaceBetween={spaceBetween}
               slidesPerView={'auto'}
               centeredSlides
              onSwiper={(swiper)=>(swiperRef.current = swiper)}
               loop className="overflow-visible w-full"
             >
            {projects.map((project, index)=>(
                <SwiperSlide key={index} className="w-auto max-w-[40%] max-md:max-w-[60%] max-sm:max-w-[70%] flex justify-center">
                    {({isActive})=>(
                    <motion.div
                    initial={{opacity: 0, scale: 0.8}}
                    animate={isActive ? {opacity: 1, scale: 1} : {opacity: 0.5, scale: 0.9}}
                    transition={{duration: 0.5,ease: 'easeOut'}}
                    className="relative rounded-lg bg-card overflow-visible flex flex-col items-stretch px-3 py-4 w-auto"
                    >
                    <div className="self-center relative w-full h-[30vh] max-sm:h-[15vh] max-md:h-[22vh]">
                    <CoverImage src={`/projects/${project.image}`} alt="project image"/></div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-3">
                        <h3 className=" font-semibold text-lg max-sm:text-base">{project.title} </h3>
                            <button onClick={()=> handleSeclect(project.id, index)} className="opacity-80 cursor-pointer">{'[ '}details &#8594;{']'}
                        </button> 
                        </div>
                        <div className="flex items-center justify-between">
                        <a  className={`${!project.github && 'opacity-40'}`}href={project.github}>github</a>
                        <a className={`flex items-center border border-borders
                        border-opacity-70 px-3 py-1 max-sm:px-2 rounded ${!project.link && 'opacity-40'}`} href={project.link}>
                            live project {/*<SmallIcon src="visit" alt="go"/>*/} <span className="text-xl">&#8599;</span></a>
                        </div>
                    </div>
                    </motion.div>)}
                </SwiperSlide>
            ))}
             </Swiper>}


            <AnimatePresence>
            {selectedProject &&  <motion.div className={`self-center flex flex-col gap-4 
            items-start justify-center max-w-[50%] shadow-sm shadow-primary p-2 max-sm:max-w-[85%]`}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.8}}
                    > 
                        <h3>{selectedProject.title } | <span className="opacity-70">{selectedProject.date}</span></h3>
                        <p> {'>>'} {selectedProject.description}</p>
                        {selectedProject.client && <p> client: Austine</p>}
                        <button onClick={()=>setselectedProject(null)} className="px-3 py-1 border border-primary border-opacity-30">close</button>
                    </motion.div>
            }
            </AnimatePresence>
        <div className="fixed z-50 bottom-0 left-0 pl-20 pb-8 flex gap-3 max-sm:pl-3 text-lg">
            <button onClick={()=>swiperRef.current?.slidePrev()}
                className="flex gap-1 items-center px-3 py-1 border border-primary border-opacity-50 rounded">&#8592;</button>
            <button onClick={()=>swiperRef.current?.slideNext()}
            className="flex gap-1 items-center px-3 py-1  border border-primary border-opacity-50 rounded">&#8594;</button>
            </div>
            
        </>
    )
}
