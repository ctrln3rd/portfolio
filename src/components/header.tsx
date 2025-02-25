'use-client';

import Link from "next/link";

export default function Header(){
    return(
        <header className={`fixed top-0 left-0 flex flex-row items-center justify-between w-full py-3 z-50 px-10
        bg-gradient-to-tl from-background from-80% to-primary backdrop-blur-lg backdrop-opacity-50 max-sm:px-2 max-sm:py-1`}>
            <h1 className="text-2xl"> <Link href={'/'}>AM</Link></h1>
            <nav className="flex flex-row items-center justify-start gap-10 max-sm:flex-col max-sm:gap-2">
               
                <Link href={'/about'}><span>about me</span></Link>
                <Link href={'/contact'}><span>connect</span></Link>
            </nav>
        </header>
    )
}