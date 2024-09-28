"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Linkedin from "../assets/logos/Linkedin.svg";
import Github from "../assets/logos/Github.svg";
import BurgerMenu from "../assets/icons/burger.svg";
import CloseMenu from "../assets/icons/close.svg";

export default function Navbar({ scrollToSection }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <nav className="backdrop-blur fixed flex justify-between items-center top-0 z-30 w-full sm:h-[64px] bg-background/90 backdrop-blur-md">
            <div className='navbar flex items-center w-full justify-between'>

                {/* Burger Menu for mobile view */}
                <button onClick={handleToggleMenu} className="sm:hidden flex items-center mx-10 my-4">
                    <Image src={isMenuOpen ? CloseMenu : BurgerMenu} width={60} height={60} alt="Menu" />
                </button>

                {/* Navigation Items for larger screens */}
                <div className={`hidden sm:flex space-x-4`}>
                    <button onClick={() => {scrollToSection('home');}} className='text-white text-lg font-sans font-extralight px-7'>About Me 😁</button>
                    <button onClick={() => {scrollToSection('experience');}} className='text-white text-lg font-sans font-extralight px-7'>Experience 💼</button>
                    <button onClick={() => {scrollToSection('education');}} className='text-white text-lg font-sans font-extralight px-7'>Education 🎓</button>
                    <button onClick={() => {scrollToSection('skills');}} className='text-white text-lg font-sans font-extralight px-7'>Skills 📈</button>
                    <button onClick={() => {scrollToSection('projects');}} className='text-white text-lg font-sans font-extralight px-7'>Projects 💻</button>
                </div>

                {/* Dropdown menu for mobile view */}
                <div className={`flex-col sm:hidden flex items-center justify-between absolute sm:static transition-all duration-300 ${isMenuOpen ? 'bg-blackish top-16' : 'top-[-200px]'} sm:top-0 `}>
                    <div className={`flex flex-col space-y-4 mt-4 ${isMenuOpen ? '' : 'hidden'}`}>
                        <button onClick={() => {scrollToSection('home'); setIsMenuOpen(false);}} className='text-white text-lg font-sans font-extralight px-7'>About Me 😁</button>
                        <button onClick={() => {scrollToSection('experience'); setIsMenuOpen(false);}} className='text-white text-lg font-sans font-extralight px-7'>Experience 💼</button>
                        <button onClick={() => {scrollToSection('education'); setIsMenuOpen(false);}} className='text-white text-lg font-sans font-extralight px-7'>Education 🎓</button>
                        <button onClick={() => {scrollToSection('skills'); setIsMenuOpen(false);}} className='text-white text-lg font-sans font-extralight px-7'>Skills 📈</button>
                        <button onClick={() => {scrollToSection('projects'); setIsMenuOpen(false);}} className='text-white text-lg font-sans font-extralight px-7'>Projects 💻</button>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex items-center mr-5 space-x-4">
                    <Link className='text-white' href='https://www.linkedin.com/in/lucie-aloccio/' target="_blank">
                        <Image src={Linkedin} width={30} height={30} alt="LinkedIn" />
                    </Link>
                    <Link className='text-white' href='https://github.com/luciealc' target="_blank">
                        <Image src={Github} width={30} height={30} alt="GitHub" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}