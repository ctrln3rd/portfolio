'use client';
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";
import { SmallIcon } from "./images";
import TechCarousel from "./techAnime";

type NavInputs = {
    href: string;
    label: string;
    angle: number;
}

export default function Footer(){
    const pathname = usePathname()
    const scrollskillsLeft = ()=>{
        document.getElementById('skills')?.scrollBy({left: -200, behavior: 'smooth'})
    }
    const scrollskillsRight = ()=>{
        document.getElementById('skills')?.scrollBy({left: 200, behavior: 'smooth'})
    }
    const scrollprojectsLeft = ()=>{
        document.getElementById('projects')?.scrollBy({left: -200, behavior: 'smooth'})
    }
    const scrollprojectsRight = ()=>{
        document.getElementById('projects')?.scrollBy({left: 200, behavior: 'smooth'})
    }
    
    return(
        <footer className={`fixed bottom-0 z-40 left-0 w-full flex justify-between items-center px-20 py-4 max-sm:px-3 max-sm:pr-6
            bg-gradient-to-tl from-primary/25 via-background/60 to-transparent backdrop-blur-sm`}>
            {pathname === '/' && <div>
                <h3>I'm <span className='text-primary'>Austine</span></h3>
                        <button className='flex items-center gap-2'><span className='opacity-70'>resume</span> <SmallIcon src='forward' alt='click'/></button>
                </div>}
            {pathname === '/about' && <div>
                <TechCarousel/>
                </div>}
            {pathname === '/projects' && <div className="flex gap-3">
            <button onClick={scrollprojectsLeft}
                className="flex gap-1 items-center rotate-180 px-3 py-1 border border-primary border-opacity-50"><SmallIcon src="forward" alt="right>"/></button>
            <button onClick={scrollprojectsRight}
            className="flex gap-1 items-center px-3 py-1  border border-primary border-opacity-50"><SmallIcon src="forward" alt="right>"/></button>
            </div>}
            {pathname === '/skills' && <div className="flex gap-3">
            <button onClick={scrollskillsLeft}
                className="flex gap-1 items-center rotate-180 px-3 py-1 border border-primary border-opacity-50"><SmallIcon src="forward" alt="right>"/></button>
            <button onClick={scrollskillsRight}
            className="flex gap-1 items-center px-3 py-1  border border-primary border-opacity-50"><SmallIcon src="forward" alt="right>"/></button>
            </div>}
            
            <motion.div
            className="relative w-32 h-32 rounded-full border border-gray-500 flex items-center justify-around max-sm:w-16 max-sm:h-16"
            whileHover={{scale: 1.1}}
            >
                <NavItem href="/" label="home" angle={288} />
                <NavItem href="/skills" label="skills" angle={0} />
                <NavItem href="/projects" label="work" angle={72} />
                <NavItem href="/about" label="about" angle={144}/>
                <NavItem href="/contact" label="connect" angle={216} />
            </motion.div>
        </footer>
    )
}


function NavItem({href, label, angle}: NavInputs){
    const pathname = usePathname();

    return(
        <motion.div
        className={`absolute text-xs p-0 m-0 transition-all ${
            (pathname === href) ? 'text-primary font-semibold': 'text-text'
        } hover:text-base`}
        style={{left: '50%', top: '50%', transform: `translate(-50%, -50%) rotate(${angle}deg) translate(100%) rotate(-${angle}deg)`}}
        >
        <Link href={href}>{label}</Link>
        </motion.div>
    )
}