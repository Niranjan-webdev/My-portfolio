import { useState } from 'react'
import React from 'react'
import logo from '../assets/logo.svg'

function Topnavbar() {
    const [activeTab, setActiveTab] = useState('Home')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = ['About', 'Portfolio', 'Home', 'Skills', 'Contact']

    const handleTabClick = (tabName) => {
        setActiveTab(tabName)
        setIsMenuOpen(false) // close mobile menu on nav click
    }

    return (
        <>
            {/* ── Desktop navbar — hidden on mobile ── */}
            <div className='hidden md:flex justify-center py-4'>
                <nav className='bg-white rounded-full shadow-sm px-2 py-2'>
                    <ul className='flex items-center gap-1'>
                        {navItems.map((item) => (
                            <li key={item}>
                                <a
                                    onClick={() => handleTabClick(item)}
                                    className={`cursor-pointer transition-colors duration-200 px-5 py-2 rounded-full text-sm font-medium ${
                                        activeTab === item
                                            ? 'bg-[#2eb89c] text-white font-semibold'
                                            : 'text-gray-500 hover:text-[#2eb89c]'
                                    }`}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* ── Mobile navbar — hidden on desktop ── */}
            <div className='md:hidden'>
                {/* Burger button */}
                <button
                    className='fixed right-6 top-6 z-50 flex flex-col gap-[5px] p-2'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`block h-[2px] w-6 bg-gray-800 rounded transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`block h-[2px] w-6 bg-gray-800 rounded transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-[2px] w-6 bg-gray-800 rounded transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                </button>

                {/* Full-screen mobile menu */}
                <div className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>
                    {navItems.map((item) => (
                        <a
                            key={item}
                            onClick={() => handleTabClick(item)}
                            className={`cursor-pointer text-2xl font-bold transition-colors duration-200 ${
                                activeTab === item ? 'text-[#2eb89c]' : 'text-gray-800 hover:text-[#2eb89c]'
                            }`}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Topnavbar