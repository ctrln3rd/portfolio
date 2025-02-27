'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header(){
    const pathname = usePathname();
    return(
        <header className={`fixed top-0 left-0 flex flex-row items-center justify-between w-full py-3 z-50 px-10
        bg-gradient-to-br from-primary/20 via-background/60 to-transparent backdrop-blur-md max-sm:px-2 max-sm:py-1`}>
            <h1 className="text-3xl font-semibold"> <Link href={'/'}>AM</Link></h1>
            {/*<nav className="flex flex-row items-center justify-start gap-10 max-sm:flex-col max-sm:gap-2">
                {!(pathname === '/') && <Link href={'/'}><span>home</span></Link>}
                {!(pathname === '/about') && <Link href={'/about'}><span>about me</span></Link>}
                {!(pathname === '/contact') &&<Link href={'/contact'}><span>connect</span></Link>}
            </nav>*/}
            <p>developer</p>
        </header>
    )
}

