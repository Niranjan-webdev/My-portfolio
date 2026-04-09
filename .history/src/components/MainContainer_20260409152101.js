import React from 'react'
import hero from '../assets/hero.png'
import logoOutline from '../assets/logo-outline.svg'
import dotcircles from '../assets/dotcircles.svg'
import { Terminal, github, linkedIn, mail, DevTo } from "./index"
import TimeLine from './timeLine'
import FloatingTags from './floatingTags'
import SkillSet from './skillSet'
import Contact from './contact'
import useWindowSize from '../hooks/useWindowSize'
import { RiDownload2Line, RiDownloadLine } from '@remixicon/react'

function MainContainer() {
    const { width, height } = useWindowSize()

    let handleAbout = () => {
        const section = document.getElementById("about")
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }
    return (
        <>
            <FloatingTags />
            {/* Hero Banner start */}
            <section id="home" className='w-full'>
                {/* Social media bar */}
                {width >= 768 ? (<div className='socialmedia__bar ml-[1.3rem] fixed top-[40%] flex md:flex-col flex-col gap-6 w-[32px]'>
                    <a><img src={github} /></a>
                    <a><img src={linkedIn} /></a>
                    <a><img src={DevTo} /></a>
                    <a><img src={mail} /></a>
                </div>) : ""}

                {/* Social media bar */}
                <div className='hero__banner min-h-screen flex flex-col md:flex-row items-center justify-around px-[3rem] py-[3rem] gap-8'>
                    <div className='banner__content w-full md:w-[55%] flex flex-col items-center md:items-start'>
                        <h4 className='text-xl md:text-2xl font-semibold'>Hello! 👋</h4>
                        <h2 className='text-2xl md:text-4xl mb-4 font-bold'>I'm <span className='border-b-2 border-[#2eb89c]'>Niranjan Govinthan</span></h2>
                        <h1 className='text-4xl md:text-6xl mb-6 font-bold bg-gradient-to-r from-[#2eb89c] to-[#1d2734] text-transparent bg-clip-text'>FULLSTACK-SOFTWARE DEVELOPER</h1>
                        <p className='text-base md:text-xl mb-10 font-semibold'>Focused on <span className='text-[#713cdd] font-bold'>React</span>, <span className='text-[#713cdd] font-bold'>Svelte</span>, <span className='text-[#713cdd] font-bold'>JavaScript</span>, <span className='text-[#713cdd] font-bold'>TypeScript</span>, and <span className='text-[#713cdd] font-bold'>Node.js</span>. I craft fast, accessible interfaces and build scalable, maintainable frontend systems.</p>
                        <button 
                        onClick={handleAbout}
                        className='py-4 px-6 bg-[#2eb89c] hover:bg-[#79cdb9] rounded-[12px] text-white text-base font-bold'>MORE ABOUT ME</button>
                    </div>
                    <div className='w-full md:w-[35%] flex justify-center'>
                        <Terminal />
                    </div>
                </div>
            </section>
            {/* Hero Banner end */}

            {/* About me */}
            <section id="about" className='about__me flex'>
                <div className='about__container w-full py-16 md:py-[4rem] px-6 md:px-16 flex flex-col md:flex-row items-center justify-around gap-10'>
                <div className='profile flex justify-center'>
  <div className='w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-[#1d2734] p-5 shadow-xl flex flex-col gap-2 font-mono text-sm'>
    {/* Title bar dots */}
    <div className='flex gap-1.5 mb-2'>
      <span className='w-3 h-3 rounded-full bg-red-500'></span>
      <span className='w-3 h-3 rounded-full bg-yellow-500'></span>
      <span className='w-3 h-3 rounded-full bg-green-500'></span>
    </div>
    {/* Code lines */}
    <p><span className='text-purple-400'>const</span> <span className='text-blue-300'>dev</span> <span className='text-white'>= {'{'}</span></p>
    <p className='pl-4'><span className='text-[#2eb89c]'>name</span><span className='text-white'>:</span> <span className='text-yellow-300'>"Niranjan"</span><span className='text-white'>,</span></p>
    <p className='pl-4'><span className='text-[#2eb89c]'>role</span><span className='text-white'>:</span> <span className='text-yellow-300'>"Fullstack Dev"</span><span className='text-white'>,</span></p>
    <p className='pl-4'><span className='text-[#2eb89c]'>exp</span><span className='text-white'>:</span> <span className='text-orange-300'>4</span><span className='text-white'>,</span></p>
    <p className='pl-4'><span className='text-[#2eb89c]'>loves</span><span className='text-white'>: [</span></p>
    <p className='pl-8'><span className='text-yellow-300'>"React"</span><span className='text-white'>,</span> <span className='text-yellow-300'>"Svelte"</span><span className='text-white'>,</span></p>
    <p className='pl-8'><span className='text-yellow-300'>"Node.js"</span><span className='text-white'>,</span></p>
    <p className='pl-4'><span className='text-white'>],</span></p>
    <p><span className='text-white'>{'}'}</span></p>
  </div>
</div>
                    <div className='about__content w-full md:text-left text-center md:w-1/2'>
                        <h4 className='text-lg md:text-xl font-bold text-[#2eb89c] mb-6'>— ABOUT ME</h4>
                        <h2 className='text-4xl md:text-5xl text-[#2eb89c] mb-6 font-bold'><span className='text-black'>I'm</span> Niranjan</h2>
                        <p className='text-base md:text-xl font-[600] mb-12'>I am a 4 years experienced Fullstack developer focused on React, TypeScript, and Node.js. I specialize in building robust React frontends and scalable Node.js APIs that simplify complex data operations. Outside of coding, I play electric guitar, enjoy video games, and love exploring new technologies.</p>
                    <button className='flex gap-2 items-center py-4 px-16 bg-[#2eb89c] hover:bg-[#79cdb9] rounded-[12px] text-white text-base font-bold'>RESUME <RiDownload2Line/></button>
                    </div>
                </div>
            </section>

           <section id="experience">
             <TimeLine />
            </section> 
            {/* About me */}
            {/* My Skills */}
            <section id="skills" className="relative overflow-hidden py-20">

                <div className="relative z-10">
                    <SkillSet />
                </div>
            </section>
            {/* My Skills */}
            {/* Contact */}
          <section id='contact'>
          <Contact />
            </section>  
            {/* Contact */}
        </>
    )
}

export default MainContainer
