import React from 'react'
import hero from '../assets/hero.png'
import logoOutline from '../assets/logo-outline.svg'
import dotcircles from '../assets/dotcircles.svg'
import { Terminal, github, linkedIn, mail, DevTo } from "./index"
import TimeLine from './timeLine'
import FloatingTags from './floatingTags'
import SkillSet from './skillSet'
import Contact from './contact'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

function MainContainer() {
    return (
        <>
            {/* Hero Banner start */}
            <section className='w-full'>
                {/* Social media bar */}
                <div className='socialmedia__bar ml-[1.3rem] fixed top-[40%] flex md:flex-col flex-col gap-6 w-[32px]'>
                    <a><img src={github} /></a>
                    <a><img src={linkedIn} /></a>
                    <a><img src={DevTo} /></a>
                    <a><img src={mail} /></a>
                </div>
                {/* Social media bar */}
                <div className='hero__banner h-screen flex items-center justify-around px-[5rem] py-[3rem] md:flex flex-wrap gap-4'>
                    <div className='banner__content w-3/5'>
                        <h4 className='text-2xl font-semibold'>Hello! 👋</h4>
                        <h2 className='text-4xl mb-4 font-bold'>I'm <span className='border-b-2 border-[#2eb89c]'>Niranjan Govinthan</span></h2>
                        <h1 className='text-6xl mb-6 font-bold bg-gradient-to-r from-[#2eb89c] to-[#1d2734] text-transparent bg-clip-text'>FULLSTACK-DEVELOPER</h1>
                        <p className='text-xl mb-10 font-semibold'>Focused on  <span className='text-[#713cdd] font-bold'>React</span>,  <span className='text-[#713cdd] font-bold'>Svelte</span>, <span className='text-[#713cdd] font-bold'>JavaScript</span>, <span className='text-[#713cdd] font-bold'>TypeScript</span>, and <span className='text-[#713cdd] font-bold'>Node.js</span>. I craft fast, accessible interfaces and build scalable, maintainable backend systems.</p>
                        <button className='py-4 px-6 bg-[#2eb89c] hover:bg-[#79cdb9] rounded-[12px] text-white text-base font-bold'>MORE ABOUT ME</button>
                    </div>
                    <Terminal />
                </div>
            </section>
            {/* Hero Banner end */}

            {/* About me */}
            <section className=' about__me flex bg-[#f1f5f9]'>
                <div className='about__container w-full py-[7rem] flex items-center justify-around'>
                    <div className='profile'>
                        <div className='p-20 rounded-full bg-emerald-400'></div>
                    </div>
                    <div className='about__content w-1/2'>
                        <h4 className='text-xl font-bold text-[#2eb89c] mb-6'>— ABOUT ME</h4>
                        <h2 className='text-5xl text-[#2eb89c] mb-6 font-bold'><span className='text-black'>I'm</span> Niranjan</h2>
                        <p className='text-xl font-[600]'>I am a 4 years experienced Fullstack developer focused on React, TypeScript, and Node.js. I specialize in building robust React frontends and scalable Node.js APIs that simplify complex data operations. Outside of coding, I play electric guitar, enjoy video games, and love exploring new technologies.</p>
                    </div>
                </div>

            </section>
            <TimeLine />
            {/* About me */}
            {/* My Skills */}
            <section className="relative overflow-hidden py-20">
                <FloatingTags />
                <div className="relative z-10">
                   <SkillSet/>
                </div>
            </section>
            {/* My Skills */}
            {/* Contact */}
             <Contact/>
             {/* Contact */}
        </>
    )
}

export default MainContainer
