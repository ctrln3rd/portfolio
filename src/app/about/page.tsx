import About from "@/components/about";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Me',
}

export default function AboutPage(){
    return <About/>
}