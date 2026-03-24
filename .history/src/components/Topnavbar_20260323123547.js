import { useState } from 'react'
import React from 'react'
import logo from '../assets/logo.svg'
import useWindowSize from '../hooks/useWindowSize'

function Topnavbar() {

    const { width, height } = useWindowSize()
    const [activeTab, setActiveTab] = useState('Home')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = ['About', 'Portfolio', 'Home', 'Skills', 'Contact']

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
        console.log('Active tab changed to:', tabName)
    }
    const handleModal = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
        {width >= 768 ? ( <div className='topbar__wrapper  '>
                <nav className='topbar__content fixed shadow-2xl z-20'>
                    <ul className=''>
                        {navItems.map((item) => (
                            <li key={item}>
                                <a
                                    onClick={() => handleTabClick(item)}
                                    className={`cursor-pointer transition-colors duration-200 ${activeTab === item
                                            ? 'bg-[#2eb89c] text-white font-semibold px-4 py-2 rounded'
                                            : 'text-[#808080] hover:text-[#2eb89c] px-4 py-2'
                                        }`}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>) : (<div className='responsive__topbar fixed bg-white z-50'>
                <button className='burgerMenu fixed right-10 top-10 flex flex-col gap-[3px]'
                onClick={handleModal}>
                    <span className={`px-[12px] py-[2px] bg-black w-full rounded transition-transform duration-300 
                      ${  isMenuOpen? 'rotate-45 translate-y-1.5' : ''
                    }`}
                   ></span>
                    <span className={`px-[12px] py-[2px] bg-black w-full rounded
                         ${  isMenuOpen? 'opacity-0' : ''
                }`}></span>
                    <span className={`px-[12px] py-[2px] bg-black w-full rounded transition-transform duration-300 
                      ${  isMenuOpen? '-rotate-45 -translate-y-1.5' : ''
                    }`}></span>
                </button>
                <ul className={`responsive__content h-screen w-screen flex flex-col items-center justify-evenly
                ${isMenuOpen ? 'h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                {navItems.map((item) => (
                            <li key={item}>
                                <a
                                    onClick={() => handleTabClick(item)}
                                    className={"text-2xl font-bold"}>
                                    {item}
                                </a>
                            </li>
                        ))}
                </ul>
            </div> )}
           
           
        </>
    )
}

export default Topnavbar