import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

type GlitchTextProps = {
    text: string;
    effect?: 'continuous' | 'one-time'  | 'triggered';
    triggerOn?: 'hover' | 'click';
    duration?: number;
    intensity?: number;
    stopDuration?: number;
}
const getRandomChar = ()=> {
    const chars = '!@#$%^&()_+=-[]|'
    return chars[Math.floor(Math.random() * chars.length)]
}
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&()_+=-';

const generateGlitchText = (text: string)=>{
    return text
   .split('')
   .map((char)=> (Math.random() > 0.5 ? getRandomChar() : char))
   .join('')
}

function GlitchText({text, effect= 'continuous', 
    triggerOn = 'hover', duration = 1, intensity = 10, stopDuration = 2}:
    GlitchTextProps){
        const [glitchedText, setGlitchedText] = useState(text);
        const [isGlitching, setIsglitching] = useState(false)
        const controls = useAnimation();
        const interval = useRef<NodeJS.Timeout| null>(null);
        const cycleTimeout = useRef<NodeJS.Timeout| null>(null);
        const startGlitch = ()=>{
            let elapsed = 0;
            interval.current = setInterval(()=> {
                setGlitchedText(generateGlitchText(text))
                elapsed +=  1 / intensity;
                if(effect === 'one-time' && elapsed >= duration) stopGlitch() ;
                if(effect === 'triggered' && elapsed >= duration) stopGlitch() ;
            }, 1000 / intensity)
        }
        const stopGlitch = ()=> {
            if(interval.current) clearInterval(interval.current);
            setGlitchedText(text)
        }

        useEffect(()=> {
            if(effect === 'continuous') {
                const glitchLoop = ()=>{
                startGlitch();
               cycleTimeout.current = setTimeout(()=> {
                    stopGlitch()
                   cycleTimeout.current = setTimeout(glitchLoop, stopDuration * 1000)
                    
                }, duration * 1000)
            }
            glitchLoop()
            return ()=> {
                if(interval.current) clearInterval(interval.current)
                if(cycleTimeout.current) clearTimeout(cycleTimeout.current)
            }
            }
            if(effect === 'one-time'){
                startGlitch()
                //setTimeout(stopGlitch, duration * 1000)
            }
            return ()=> {
                if(interval.current) clearInterval(interval.current)
                if(cycleTimeout.current) clearTimeout(cycleTimeout.current)
            }
            
        }, [text])

        return(
            <motion.span
            key={text}
            onMouseEnter={triggerOn === 'hover' && effect === 'triggered' ? startGlitch : undefined}
            onClick={triggerOn === 'click' && effect === 'triggered' ? startGlitch: undefined}
            animate = {controls}
            >
                {glitchedText}
            </motion.span>
        )

    }

export default GlitchText;