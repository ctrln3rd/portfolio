import Skills from "@/components/skills";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'austine best',
    description: 'things am best in'
}

export default function skillsPage(){
    return <Skills/>
}