import Contact from "@/components/contact";
import { Metadata } from "next";

export const  metadata: Metadata = {
    title: 'Connect With',
}

export default function ContactPage(){
    return <Contact/>
}