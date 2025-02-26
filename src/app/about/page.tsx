import About from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Austine',
    description: 'all you need to know about me'
}

export default function AboutPage(){
    return <About/>
}