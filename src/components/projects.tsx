'use client';
import useProjects from "@/store/projects"
import { useState, useRef, useEffect } from "react"
import { CoverImage } from "./images";
import { motion , AnimatePresence} from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation'
import GlitchText from "./glitch";
import AsciiArt from "./ascii";


export default function Projects(){
    const projects = useProjects
    const swiperRef = useRef<any>(null)
    const [spaceBetween, setSpaceBetween] = useState(-3); // Default value

    useEffect(() => {
        if (typeof window !== "undefined") {
          setSpaceBetween(window.innerWidth > 768 ? -10 : -3);
        }
      }, []);
    

    return(
        <>
            <div className="absolute top-0 left-0 w-full h-full z-0">
                {/*<AsciiArt imageUrl="robot1" width={100} className="w-full h-full"/>*/}
            </div>
            <Swiper
               modules={[Navigation]}
               initialSlide={1}
               spaceBetween={spaceBetween}
               slidesPerView={'auto'}
               centeredSlides
              onSwiper={(swiper)=>(swiperRef.current = swiper)}
               loop className="overflow-visible w-full items-center"
             >
            {projects.map((project, index)=>(
                <SwiperSlide key={index} className="w-auto max-w-[40%] max-md:max-w-[60%] max-sm:max-w-[75%] flex justify-center relative z-10" >
                    {({isActive})=>(
                        <ProjectCard {...project} isActive={isActive}/>
                    )}
                </SwiperSlide>
            ))}
             </Swiper>


            
        <div className="fixed z-50 bottom-0 left-0 pl-20 pb-8 flex gap-3 max-sm:pl-3 text-xl">
            <button onClick={()=>swiperRef.current?.slidePrev()}
                className="flex gap-1 items-center px-3 py-1 border border-teal-600 border-opacity-60 rounded">&#8592;</button>
            <button onClick={()=>swiperRef.current?.slideNext()}
            className="flex gap-1 items-center px-3 py-1  border border-teal-600 border-opacity-60 rounded">&#8594;</button>
            </div>
            
        </>
    )
}

interface ProjectCardProps {
    id: number;  
    title: string;  
    image: string;  
    description: string;  
    date?: string;  
    link?: string;  
    github?: string; 
    client?: string;
    collabo?: string;
    problem?: string;
    isActive: boolean
      
}

function ProjectCard({id, title, image, description, date, link, github, client, collabo, problem, isActive}: ProjectCardProps){
    const [showDetails, setShowDetails] = useState(false);
    useEffect(()=>{
        if(!isActive)setShowDetails(false);
    },[isActive])
    return(
        <motion.div
            key={id}
            initial={{opacity: 0, scale: 0.8}}
            animate={isActive ? {opacity: 1, scale: 1, filter: 'none'} : {opacity: 0.5, scale: 0.9, filter: 'blur(1px)'}}
            transition={{duration: 0.5,ease: 'easeOut'}}
            className="relative rounded-lg bg-card overflow-visible flex flex-col gap-1 items-stretch px-8 py-5 max-sm:px-5 w-auto bg-opacity-95"
            >
            <div className="flex gap-3 pb-1">
                <h3 className=" font-semibold text-lg max-sm:text-base">{isActive ? (<GlitchText text={title} effect="one-time" duration={0.5}/>) 
                : <span>{title}</span>} </h3>
                   
            </div>
            <motion.div
            initial={{height: 0, opacity: 0}}
            animate= {!showDetails? {height: 'auto', opacity: 1}: {height: 0, opacity: 0}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            className="self-center relative w-full">
            <div className="relative h-[35vh] max-sm:h-[20vh] max-md:h-[25vh]">
            <CoverImage src={`/projects/${image}`} alt="project image"/>
            </div>
            </motion.div>
            <div className="flex flex-col gap-4">
                
                <div className="flex items-center justify-between">
                {!showDetails && <a  className={`${!github && 'opacity-40'}`}href={github}>github</a>}
                {isActive && <button onClick={()=>setShowDetails(!showDetails)}  className='opacity-80 cursor-pointer'>
                    {!showDetails ? (<span>&#91; det<GlitchText text="ai"/>ls &#93;</span>): (<span>&#91; hide <GlitchText text="de"/>tails &#93;</span>) }</button>} 
                <a className={`flex items-center border border-borders
                border-opacity-70 px-3 py-1 max-sm:px-2 rounded ${!link && 'opacity-40'}`} href={link}>
                    live project {/*<SmallIcon src="visit" alt="go"/>*/} <span className="text-xl">&#8599;</span></a>
                </div>
            </div>
            <motion.div
            initial={{height: 0, opacity: 0}}
            animate= {showDetails? {height: 'auto', opacity: 1}: {height: 0, opacity: 0}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
            className="flex flex-col items-start gap-2 max-sm:gap-3 overflow-hidden mt-2 px-1 pt-2 border-t-[1px] border-t-borders"
            >
                {showDetails && <>
                <p><span className="opacity-80 uppercase">D<GlitchText text="A"/>TE: </span>{date}</p>
                <p>{description}</p>
                <p><span className="opacity-80 uppercase">CL<GlitchText text="IE"/>NT: </span>{client}</p>
                <p><span className="opacity-80 uppercase">RR<GlitchText text="O"/>BLEM SOL<GlitchText text="V"/>ED: </span>{problem}</p>
                <p><span className="opacity-80 uppercase">COLLA<GlitchText text="BO"/>RATORS: </span>{collabo}</p>

                {github && <a href={`${github}#readme`} target="_blank"
                 className="opacity-80 border border-borders px-2 py-1 uppercase">
                    M<GlitchText text="o"/>re on gi<GlitchText text="t"/>hub re<GlitchText text="a"/>dme &#8599;</a>}
                </>}
            </motion.div>
        </motion.div>
)
}