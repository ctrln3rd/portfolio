'use client';
import Link from "next/link"
import { motion, useAnimationControls } from "framer-motion"
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";

type NavInputs = {
    href: string;
    label: string;
    angle: number;
}
interface NavItem{
    name: string;
    path: string;
    angle: number;
}

const navItems: NavItem[] = [
    {name: 'home', path: '/', angle: -90},
    {name: 'about', path: '/about', angle: 0},
    {name: 'connect', path: '/contact', angle: 90},
    {name: 'creations', path: '/projects', angle: 180},
]

export default function Footer(){
    const pathname = usePathname();
    const navRef = useRef<HTMLDivElement>(null);
    const [positions, setPositions] = useState<{x: number; y: number}[]>([]);
    const [dotPosition, setDotPosition]= useState<{x: number; y: number} | null>(null);
    const itemWidth = 96
    const itemHeight = 22
    useEffect(()=>{
        if(!navRef.current) return;
        const parentRect = navRef.current.getBoundingClientRect();
        const centerX = parentRect.width / 2
        const centerY = parentRect.height / 2
        const radius = centerX
        const angleStep = (2 * Math.PI) / navItems.length

        let newPositions = navItems.map((_, index)=>{
            const angle = index * angleStep -Math.PI / 2;
            return {
                x: centerX + radius * Math.cos(angle) - itemWidth / 2,
                y: centerY + radius * Math.sin(angle) - itemHeight / 2
            }
        })
        setPositions(newPositions)
        const activeIndex = navItems.findIndex((item)=> item.path === pathname)
        if(activeIndex !== -1){
            setDotPosition(newPositions[activeIndex])
        }
    }, [pathname])
    return(
        <footer className={`fixed bottom-0 flex justify-between items-end z-40 left-0 w-full h-auto px-20 py-4 max-sm:px-3 max-sm:pr-6
            bg-gradient-to-tl from-primary/25 via-background/60 to-transparent backdrop-blur-sm`}>
            <div></div>
            <motion.div
            className="relative w-32 h-32 max-sm:w-24 max-sm:h-24"
            ref={navRef}
            id="center"
            >
               <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%]
                border border-gray-500 rounded-full max-sm:w-[40%] max-sm:h-[40%]"></div>
                {dotPosition && <div className="absolute w-2 h-2 bg-primary rounded-full w-"
                style={{left: `${dotPosition.x}px`,
                 top: `${dotPosition.y}px`}as React.CSSProperties}
                ></div>}
                {navItems.map((item, i)=>(
                    <div key={i}
                    className="absolute font-bold text-xs w-24 h-5 text-center"
                    style={{transform: `translate(${positions[i]?.x}px, ${positions[i]?.y}px)`}}
                    >
                    <Link href={item.path}  
                    >{item.name}</Link>
                    </div>
                ))}
            </motion.div>
        </footer>
    )
}