import Contact from "@/components/contact";
import { Metadata } from "next";

export const  metadata: Metadata = {
    title: 'connect with Austine',
    description: 'connect with me for collaboration and project work'
}

export default function ContactPage(){
    return <Contact/>
}