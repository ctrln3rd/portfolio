import Image from "next/image";

interface Input{
    src: string;
    alt: string;
    className?: string;
}

export function SocialIcon({src, alt}: Input){
  return(
    <img className="w-7 h-7" src={`/socials/${src}.svg`} alt={alt}/>
  )
} 


export function CoverImage({src, alt, className}: Input){
    return(
        <Image src={`${src}.webp`} fill={true} alt={alt} sizes="100%" className={className}/>
    )
}
export function CoverImageNo({src, alt}: Input){
  return(
      <Image src={`${src}`} fill={true} alt={alt} sizes="100%"/>
  )
}
