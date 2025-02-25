import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(){
    const {pathname, hash} = useLocation();

    useEffect(()=>{
        if(hash){
            setTimeout(()=>{
                const element = document.getElementById(hash.replace('#',''))
                if(element){
                    element.scrollIntoView({behavior: 'smooth'})
                }
            },0);
        }else{
            window.scrollTo(0, 0)
        }
    }, [pathname, hash])
    return null;
}