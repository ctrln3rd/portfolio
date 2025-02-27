'use client';
import { BigIcon } from "./images"
export default function Skills(){
    return(
        <main className="pt-[15vh] text-center px-4">
                <h3 className="text-3xl font-semibold max-sm:text-xl text-start">WHAT I'M BEST IN</h3>
                <div className="noscrollbar flex justify-center gap-8 mt-6 items-stretch overflow-x-auto overflow-y-hidden" id="skills">
                  <div className="skill">
                    <div className='self-end flex flex-col items-end'>
                    <div className='absolute inset-0 bg-gradient-to-br from-primary to-30% to-transparent shadow-xl z-0'></div>
                    <h4 className="font-semibold text-lg ">Web Development</h4>
                    <p>Building user-friendly web applications with great UX.</p>
                    </div>
                    <BigIcon src='lg1' alt='image'/>
                  </div>
                  <div className="skill">
                    <div className='self-start flex flex-col items-start'>
                    <h4 className="font-semibold text-lg">Cloud Computing</h4>
                    <p>Optimizing scalable and secure cloud infrastructure.</p>
                    </div>
                    <BigIcon src='cloud1' alt='image'/>
                  </div>
                  <div className="skill">
                    <div className='self-end flex flex-col items-end'>
                    <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                    <p>Developing AI-driven solutions that continuously improve.</p>
                    </div>
                    <BigIcon src='ml1' alt='image'/>
                  </div>
                </div>
              </main>
        
    )
}