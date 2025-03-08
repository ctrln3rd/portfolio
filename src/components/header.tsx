'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(){
    const pathname = usePathname();
    return(
        <header className={`fixed top-0 left-0 flex flex-row items-center justify-between w-full z-50 px-10 py-0
       max-sm:px-2`}>
            <h1 className="text-3xl font-semibold"> <Link href={'/'}>A.M</Link></h1>
            {pathname === '/' && <div className="flex items-center gap-1"> 
                <span className="text-4xl m-0 p-0 w-2 h-2 bg-primary rounded-full"></span>
            <h2>DEVELOPER</h2></div>}
            {pathname === '/about' && <div className="flex items-center gap-1"> 
                <span className="text-4xl w-2 h-2 bg-secondary  rounded-full"></span>
            <h2>ABOUT ME</h2></div>}
            {pathname === '/contact' && <div className="flex items-center gap-1"> 
                <span className="text-4xl w-2 h-2 bg-secondary rounded-full"></span>
            <h2>CONNECT WITH ME</h2></div>}
            {pathname === '/projects' && <div className="flex items-center gap-1"> 
                <span className="text-4xl w-2 h-2 bg-primary rounded-full"></span>
            <h2>MY CREATIONS</h2></div>}
        </header>
    )
}

