"use client";
import React from 'react';
import Image from "next/image";
import eds from "../assets/logos/eds.png";
import epitech from "../assets/logos/epitech.png";

export default function Education() {
    return (
        <div className="education-page p-4">
            <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8'>
                <div className='epitech p-6 bg-gray-800 rounded-lg shadow-lg'>
                    <Image src={epitech} className='mx-auto max-w-[350px] pb-8' alt=''/>
                    <h3 className='text-white text-2xl font-semibold'>Epitech Technology</h3>
                    <h5 className='italic text-white'>2024-2027</h5>
                    <h5 className='text-white text-lg'><br /><u>Diploma to be Validated:</u> Bac +5: Information Systems Architect</h5>
                    <p className='text-white mt-4'>The MSc Pro program at Epitech is designed to advance your expertise in digital technologies and leadership. This master's program combines technical depth with a strong emphasis on innovation. The curriculum is tailored to industry demands, providing hands-on experience in real-world projects and fostering an entrepreneurial mindset.</p>
                    <a href="https://www.epitech.eu/" target="_blank" rel="noopener noreferrer">
                        <button
                            className="mt-6 max-w-[150px] py-3 px-4 bg-blue-500 rounded hover:bg-white border border-white font-semibold transition duration-300"
                        >
                            <span style={{
                                background: '-webkit-linear-gradient(50deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline'
                            }}>View Website</span>
                        </button>
                    </a>
                </div>
                <div className='eds p-6 bg-gray-800 rounded-lg shadow-lg'>
                    <Image src={eds} className='mx-auto max-w-[200px] pb-8' alt=''/>
                    <h3 className='text-white text-2xl font-semibold'>Epitech Digital School</h3>
                    <h5 className='italic text-white'>2022-2024</h5>
                    <h5 className='text-white text-lg'><br /><u>Diploma Validated:</u> Bac +2: Information Systems Management</h5>
                    <p className='text-white mt-4'>Renowned for its hands-on, project-based learning approach, Epitech Digital School prepares students to excel in fields like digital transformation, and tech entrepreneurship. My experience there provided me with invaluable technical expertise and a deep understanding of the digital world, and a very professional mindset.</p>
                    <a href="https://www.epitech.digital/" target="_blank" rel="noopener noreferrer">
                        <button
                            className="mt-6 max-w-[150px] py-3 px-4 bg-blue-500 rounded hover:bg-white border border-white font-semibold transition duration-300"
                        >
                            <span style={{
                                background: '-webkit-linear-gradient(50deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline'
                            }}>View Website</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
