'use client';

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';

const techStack = [
    {id: 1, src: 'typescript', name: 'typescript'},
    {id: 2, src: 'next', name: 'next js'},
    {id: 3, src: 'tailwind', name: 'tailwind css'},
    {id: 4, src: 'node', name: 'node js'},
    {id: 5, src: 'python', name: 'python'},
    {id: 6, src: 'tensorflow', name: 'tensorflow'},
]

export default function TechCarousel(){
    const radius = 150;
    const [angle, setAngle] = useState<number>(0);
    const [hoveredTech, setHoveredTech] = useState<string | null>(null)
    const [paused, setPuased] = useState<boolean>(false);

    useEffect(()=>{
        if(paused) return
        const interval = setInterval(()=>{
            setAngle((prev)=> prev + 0.02);
        }, 16);
        return ()=> clearInterval(interval)
    }, [paused])
    return(
        <motion.div className='relative w-[50vw] h-[200px] flex items-center justify-center'
        animate={{rotateY: paused ? 0 : angle * (180/Math.PI)}}
        transition={{duration: 1}}
        onMouseEnter={()=>setPuased(true)}
        onMouseLeave={()=>{
            setPuased(false);
            setHoveredTech(null)
        }}
        >
            {techStack.map((tech, i) =>{
                const theta = (i / techStack.length)* Math.PI * 2 + angle;
                const x = radius * Math.cos(theta)
                const z = radius * Math.sin(theta)

                return(
                    <motion.div key={tech.id}
                    className='absolute flex flex-col items-center cursor-pointer shadow-primary shadow-2xl'
                    animate= {{x, z, scale: z >0 ? 1 : 0.8, opacity: z> 0 ? 1: 0.5}}
                    transition={{duration: 0.5}}
                    onMouseEnter={()=>setHoveredTech(tech.name)}
                    >
                     <img src={`/icons/${tech.src}.svg`} alt={tech.name} className='w-[50px] h-[50px] max-sm:w-8 max-sm:h-8'/>
                    </motion.div>
                )
            })}
            {hoveredTech && (
                <motion.div className='absolute bottom-[-50px] bg-background px-3 py-1 rounded-md tex-sm'
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.8}}
                transition={{duration: 0.3}}
                >
                   {hoveredTech}
                </motion.div>
            )}
        </motion.div>
    )
}