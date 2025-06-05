import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GlitchText from "./glitch";

function Loader({onComplete}: {onComplete: ()=> void}){
    const [progress, setProgress] = useState(0);
    const [svgWidth, setSvgWidth] = useState(150);
    const textref = useRef<HTMLDivElement>(null)

    useEffect(()=>{

    },[])

    useEffect(()=> {
        if(textref.current){
            const textWidth = textref.current.offsetWidth
            setSvgWidth(Math.max(150, textWidth + 150))
        }
        let interval = setInterval(()=> {
            setProgress((prev)=>{
                if(prev >= 100) {
                    clearInterval(interval)
                    setTimeout(onComplete, 500)
                    return 100;
                }
                return prev + 2
            })
        }, 50)
        return ()=> clearInterval(interval)
    }, [onComplete])

    return(
        <motion.div
         className="fixed inset-0 flex flex-col items-center justify-center"
        >
            <motion.svg width={svgWidth} height={svgWidth} viewBox={'0 0 100 100'}>
                <motion.circle 
                cx={50} cy={50} r={40} stroke={'#ededed99'} 
                strokeWidth={0.5} fill={'none'}
                strokeDasharray={251.2} strokeDashoffset={(1- progress / 100) * 251.2}
                animate={{strokeDashoffset: (1- progress / 100) * 251.2}}
                />

            </motion.svg>
         <motion.div className="absolute flex flex-col gap-1 items-center text-xs text-nowrap uppercase" ref={textref}>
            <div className="text-teal-500">
                C:&#47; U<GlitchText text="SE" effect='continuous'  stopDuration={0.3}/>R &#47; ctrln3rd &#62;
                </div>
            <div>
               &#91; GETTING Y<GlitchText text="OU" effect='continuous' intensity={15} duration={0.5} stopDuration={0.3}/> R 
               <GlitchText text="EA" effect='continuous' intensity={15} duration={0.5} stopDuration={0.3}/>DY... &#93;
                </div>
         </motion.div>
        </motion.div>
    )

}

export default Loader;