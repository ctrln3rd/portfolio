'use client';
import Link from "next/link";
import GlitchText from "@/components/glitch";
export default function NotFound(){
    return(
        <div className="absolute inset-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex items-center flex-col gap-4">
            <h3>Page <GlitchText text="doesn't"/> exist</h3>
            <Link href={'/'} className="px-3 py-1 border border-borders border-opacity-70">Go to index  &#8594;</Link>
        </div>
    )
}