'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(){
    const pathname = usePathname();
    return(
        <header className={`fixed top-0 left-0 flex flex-row items-center justify-between w-full py-3 z-50 px-10
        bg-gradient-to-br from-primary/20 via-background/60 to-transparent backdrop-blur-md max-sm:px-2 max-sm:py-1`}>
            <h1 className="text-3xl font-semibold"> <Link href={'/'}>AM</Link></h1>
            {pathname === '/' && <h2 className="flex items-center gap-1"> <span className="text-4xl m-0 p-0 text-primary">.</span>DEVELOPER</h2>}
            {pathname === '/about' && <h2 className="flex items-center gap-1"> <span className="text-4xl text-primary">.</span>ABOUT ME</h2>}
            {pathname === '/contact' && <h2 className="flex items-center gap-1"> <span className="text-4xl text-primary">.</span>CONTACT ME</h2>}
            {pathname === '/projects' && <h2 className="flex items-center gap-1"> <span className="text-4xl text-primary">.</span>MY CREATIONS</h2>}
        </header>
    )
}

