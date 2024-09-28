"use client";
import React from 'react';
import Image from "next/image";
import Airbus from "../assets/logos/Airbus.jpg";
import Devid from "../assets/logos/Devid.svg";

export default function Experience() {
    return (
        <div className="experience-page px-4 sm:px-6 md:px-8">
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center p-6">
                {/* Airbus */}
                <div className="bg-lightb text-white shadow-lg rounded-lg p-6 max-w-md w-full hover:scale-110 transition-transform duration-300 ease-in-out">
                    <div className="flex items-center space-x-4 mb-4">
                        <Image className='w-24 h-16' src={Airbus} alt='Airbus logo' />
                        <h2 className="text-2xl text-center text-white font-bold">
                            <span style={{
                                background: '-webkit-linear-gradient(50deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline'
                            }}>Airbus Helicopters</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-offwhite">Internship, Cybersecurity</p>
                        <p className="text-sm text-offwhite italic">January 2024 - July 2024</p>
                    </div>
                    <p className="text-offwhite mt-4">
                        I worked in the IT security department at Airbus Helicopters, where I worked on the security of applications within the company and the implementation of pipelines (automations).
                    </p>
                </div>

                {/* DevID */}
                <div className="bg-lightb shadow-lg rounded-lg p-6 max-w-md w-full hover:scale-110 transition-transform duration-300 ease-in-out">
                    <div className="flex items-center space-x-4 mb-4">
                        <Image className='w-24 h-16' src={Devid} alt='Dev-Id logo' />
                        <h2 className="text-2xl text-center text-white font-bold">
                            <span style={{
                                background: '-webkit-linear-gradient(50deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline'
                            }}>Dev-ID</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-offwhite">Internship, Project Management</p>
                        <p className="text-sm text-offwhite italic">June 2023 - July 2023</p>
                    </div>
                    <p className="text-offwhite mt-4">
                        I supported their Project Manager as Assistant Project Manager on two App and Web development projects. Notably I worked with l'OM on the redesign of their app and website.
                    </p>
                </div>
            </div>

            {/* Third Block */}
            <div className='flex justify-center items-center mt-6 mb-4'>
                <div className="bg-lightb shadow-lg rounded-lg p-6 max-w-md w-full hover:scale-125 transition-transform duration-300 ease-in-out">
                    <div className="flex items-center space-x-4 mb-4">
                        <Image className='w-24 h-16' src={Airbus} alt='New Company logo' />
                        <h2 className="text-2xl text-center text-white font-bold">
                            <span style={{
                                background: '-webkit-linear-gradient(50deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                display: 'inline'
                            }}>Airbus Helicopters</span>
                        </h2>
                    </div>
                    <div>
                        <p className="text-offwhite">Apprenticeship, Cybersecurity</p>
                        <p className="text-sm text-offwhite italic">Soon!!!! Starting January 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
