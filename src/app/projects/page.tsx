import Projects from "@/components/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'austine projects',
    description: 'some of the cool projects i have created'
}

export default function ProjectsPage(){
    return <Projects/>
}