import Image from "next/image";

interface Input{
    src: string;
    alt: string;
}

export function SmallIcon({src, alt}: Input){
  return(
    <img className="w-7 h-7" src={`/icons/${src}.svg`} alt={alt}/>
  )
} 

export function MediumIcon({src, alt}:Input){
  return(
    <img className="w-10 h-10" src={`/icons/${src}.svg`} alt={alt}/>
  )
}

export function BigIcon({src, alt}:Input){
    return(
      <img className="w-20 h-20" src={`/icons/${src}.svg`} alt={alt}/>
    )
  }

export function CoverImage({src, alt}: Input){
    return(
        <Image src={`${src}.jpg`} fill={true} alt={alt} sizes="100%"/>
    )
}
export function CoverImageNo({src, alt}: Input){
  return(
      <Image src={`${src}`} fill={true} alt={alt} sizes="100%"/>
  )
}
