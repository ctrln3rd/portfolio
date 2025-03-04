'use client';
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";


interface NavItem{
    name: string;
    path: string;
    x: number;
    y: number;
}

const navItems: NavItem[] = [
    {name: 'connect', path: '/contact', x: 0, y: 1},
    {name: 'home', path: '/', x: -1, y: 0 },
    {name: 'creations', path: '/projects', x: 0, y: -1},
    {name: 'about', path: '/about', x: 1, y: 0},
]

export default function Footer(){
    const pathname = usePathname();
    const navcontainerRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<{[key: string]: HTMLDivElement | null}>({})
    const [size, setSize] = useState(80);
    const [activeIndex, setActiveIndex]= useState<number>(0);
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
    useEffect(()=> {
        setActiveIndex(navItems.findIndex((item)=> item.path === pathname))
    }, [pathname])


    return(
        <footer className={`fixed bottom-0 right-0 flex justify-center items-center z-40 h-auto px-16 py-8 min-w-[30%]
            bg-gradient-to-tl from-primary/25 via-background/60 to-transparent backdrop-blur-sm`}>
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
                    <motion.div key={index} ref={(el)=> {(itemRefs.current as {[key: string]: HTMLDivElement | null})[item.name] = el}}
                    className="absolute text-xs flex justify-center font-semibold items-center max-sm:text-[0.6rem] hover:text-secondary"
                    animate={{x: trans[item.name]?.xt || 0, y: trans[item.name]?.yt || 0}}>
                    <Link href={item.path}
                    >{item.name.toUpperCase()}</Link>
                    </motion.div>
                    )
                    )}
            </motion.div>
        </footer>
    )
}
