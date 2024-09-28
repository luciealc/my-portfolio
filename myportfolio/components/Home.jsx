"use client";
import React from 'react';
import Image from "next/image";
import me from "../assets/images/me.png";

export default function HomePage({ scrollToSection }) {
  
    const wavingHandStyle = {
        animation: 'waving-hand 2.5s infinite',
        transformOrigin: '70% 70%',
        display: 'inline-block'
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../assets/pdf/luciealoccioCV.pdf';
        link.download = 'luciealoccioCV.pdf';
        link.click();
    };

    return (
        <div className="pagetop w-screen bg-blackish h-screen flex flex-col items-center justify-center mt-13 px-4 sm:px-8 lg:px-16">
            <Image className='mb-6' width={220} height={220} src={me} alt='A professional shot of me' />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-black max-w-5xl font-sans text-white text-center mb-4">
                <span style={wavingHandStyle}>👋</span> Hello,{' '}
                <span style={{
                    background: '-webkit-linear-gradient(50deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline'
                }}>I'm Lucie</span>, an IT student and Cybersecurity junior based in France.
            </h1>
            <p className="max-w-2xl font-sans text-white font-light leading-relaxed text-center text-lg my-4">
                In my third year at Epitech, I have developed a passion for the technical side of my studies, and more specifically Cybersecurity where my goals lie at.
            </p>

            <div className='buttons flex flex-col sm:flex-row gap-4 mt-6'>
                <button onClick={() => scrollToSection('contact')} className="text-white border-2 border-white rounded-full py-2 px-6 hover:bg-white hover:text-blackish font-light font-sans">
                    LET'S GET IN TOUCH  📧
                </button>
                <button onClick={handleDownload} className="text-white border-2 border-white rounded-full py-2 px-6 hover:bg-white hover:text-blackish font-light font-sans">
                    CHECK OUT MY CV 📑
                </button>
            </div>

            <style jsx>{`
                @keyframes waving-hand {
                    0% { transform: rotate(0deg); }
                    10% { transform: rotate(14deg); }
                    20% { transform: rotate(-8deg); }
                    30% { transform: rotate(14deg); }
                    40% { transform: rotate(-4deg); }
                    50% { transform: rotate(10deg); }
                    60% { transform: rotate(0deg); }
                    100% { transform: rotate(0deg); }
                }
            `}</style>
        </div>
    );
}