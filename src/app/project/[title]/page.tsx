'use client';
import { useParams } from "next/navigation";
import Project from "@/components/project";

export default function ProjectPage(){
    const params = useParams();
    const projectTitle : string = String(params.title)
    const formattedUrl = projectTitle.replace(/-/g, ' ')

    return <Project title={formattedUrl}/>
}