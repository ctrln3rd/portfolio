'use client';
import { motion } from "framer-motion"
import React, { useEffect, useState, useRef } from "react";
import GlitchText from "./glitch";


interface NavItem{
    name: string;
    x: number;
    y: number;
}

const navItems: NavItem[] = [
    {name: 'connect', x: 0, y: 1},
    {name: 'index', x: -1, y: 0 },
    {name: 'creations', x: 0, y: -1},
    {name: 'about', x: 1, y: 0},
]

export default function Nav({setActiveSection,}: {setActiveSection: (section: string)=>void}){
    const navcontainerRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<{[key: string]: HTMLButtonElement | null}>({})
    const [size, setSize] = useState(80);
    const [activeIndex, setActiveIndex]= useState<number>(1);
    const [trans, setTrans] = useState<{[key: string]: {xt: number; yt: number}}>({})
    useEffect(()=> {
        const updateSize = ()=> {
            let psize = size
            if(navcontainerRef.current){
                psize = navcontainerRef.current.offsetWidth / 2
                setSize(psize)
            }
            const translations: {[key: string]: {xt: number; yt: number}} = {}
            navItems.forEach((item)=>{
                let x = item.x * psize
                let y = item.y * psize
                if(x < 0) x = x - (itemRefs.current[item.name]!.offsetWidth /2 + 5)
                if(x > 0) x = x + (itemRefs.current[item.name]!.offsetWidth /2 +5)
                if(y < 0) y = y - (itemRefs.current[item.name]!.offsetHeight / 2 +5)
                if(y > 0) y = y + (itemRefs.current[item.name]!.offsetHeight /2 +5)
                //console.log(`item: ${item.name}, of width: ${itemRefs.current[item.name]!.offsetWidth}, and height:${itemRefs.current[item.name]!.offsetHeight}  has x: ${x} and y: ${y}`)
                translations[item.name] = {
                    xt: x, 
                    yt: y
                }
            })
            setTrans(translations)
        };
        updateSize()
        window.addEventListener('resize', updateSize)
        return ()=>window.removeEventListener('resize', updateSize)
    }, [])

    const handleNavClick = (index: number)=>{
        setActiveIndex(index)
        setActiveSection(navItems[index].name.toUpperCase())
    }


    return(
        <footer className={`fixed bottom-0 right-0 flex justify-center items-center z-40 h-auto px-16 py-8 min-w-[30%]`}>
            <motion.div
            className="relative flex items-center justify-center w-32 h-32 max-sm:w-20 max-sm:h-20  border border-gray-500 rounded-full"
            ref={navcontainerRef}
            id="center"
            >
               <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%]
                border border-gray-500 rounded-full max-sm:w-[40%] max-sm:h-[40%]"></div>
                <motion.div className="absolute translate-x-[-50%] translate-y-[-50%] w-2 h-2 bg-primary rounded-full max-sm:w-[5px] max-sm:h-[5px]"
                animate={{x: navItems[activeIndex]?.x  * size *0.9, y: navItems[activeIndex]?.y  * size *0.9}}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                }}
                ></motion.div>
                <motion.div className="absolute translate-x-[-50%] translate-y-[-50%] w-2 h-2 bg-secondary rounded-full max-sm:w-[5px] max-sm:h-[5px]"
                animate={{x: navItems[activeIndex]?.x  * size *0.3, y: navItems[activeIndex]?.y * size *0.3}}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 10
                }}
                ></motion.div>
                {navItems.map((item, index)=>(
                    <motion.button key={index} ref={(el)=> {(itemRefs.current as {[key: string]: HTMLButtonElement | null})[item.name] = el}}
                    className="absolute text-xs flex flex-col justify-center font-semibold items-center px-1 cursor-pointer outline-none"
                    animate={{x: trans[item.name]?.xt || 0, y: trans[item.name]?.yt || 0}}
                    onClick={()=>handleNavClick(index)}
                    role="link"
                    aria-label={`Navigate to ${item.name} section`}
                    >
                    <GlitchText text={item.name.toUpperCase()} effect="triggered" triggerOn="hover" duration={0.5}/>
                    {activeIndex === index && <motion.span
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-text"
                    initial= {{scaleX: 0}}
                    animate= {{scaleX: 1}}
                    exit={{scaleX: 0}}
                    transition={{duration: 0.3, ease: 'easeInOut'}}
                    >
                    </motion.span>}
                    </motion.button>
                    )
                    )}
            </motion.div>
        </footer>
    )
}
