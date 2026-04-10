import React from 'react'
import { Terminal, github, linkedIn, mail, DevTo } from "./index"
import TimeLine from './timeLine'
import FloatingTags from './floatingTags'
import SkillSet from './skillSet'
import Contact from './contact'
import useWindowSize from '../hooks/useWindowSize'
import ngAvatar from '../assets/avatar.svg'
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
                    <a href='https://github.com/Niranjan-webdev' target='_blank' rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
                    <a href='https://www.linkedin.com/in/niranjan-g2k/' target='_blank' rel="noopener noreferrer"><img src={linkedIn} alt="LinkedIn" /></a>
                   
                    <a href="mailto:niranjan.g2k@gmail.com" target="_blank" rel="noopener noreferrer"><img src={mail} alt="Mail" /></a>
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
                        <img src={ngAvatar} alt="NG" className='w-56 h-56 md:w-[36rem] md:h-[36rem]' />
                    </div>
                    <div className='about__content w-full md:text-left text-center md:w-1/2'>
                        <h4 className='text-lg md:text-xl font-bold text-[#2eb89c] mb-6'>— ABOUT ME</h4>
                        <h2 className='text-4xl md:text-5xl text-[#2eb89c] mb-6 font-bold'><span className='text-black'>I'm</span> Niranjan</h2>
                        <p className='text-base md:text-xl font-[600] mb-12'>Fullstack Developer with 4 years of experience specializing in React, TypeScript, and Node.js, with a strong focus on building scalable, user-focused web applications. Experienced in developing robust frontends and efficient backend APIs that simplify complex data operations. Proficient in creating interactive applications, reusable UI components, and performance-optimized applications using modern technologies such as React, Svelte, and Tailwind CSS. Strong problem-solving skills with a commitment to writing clean, maintainable code and collaborating effectively with cross-functional teams to deliver impactful digital products, while continuously exploring new technologies to enhance development practices.</p>
                       <a href='/Niranjan_Frontend_Developer.pdf' download={"Niranjan_Frontend_Developer.pdf"}> <button className='flex gap-2 items-center py-4 px-16 bg-[#2eb89c] hover:bg-[#79cdb9] rounded-[12px] text-white text-base font-bold'>RESUME <RiDownload2Line /></button></a>
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
