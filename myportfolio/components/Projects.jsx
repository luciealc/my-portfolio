"use client";
import React from 'react';
import Card from "../components/Card";
import Eliza from "../assets/screenshots/elizashot.png";
import vva from "../assets/screenshots/vvashot.png";
import auchan from "../assets/screenshots/auchan.png";
import scoolize from "../assets/screenshots/scoolize.png";
import back2fest from "../assets/screenshots/back2fest.png";
import olympics from "../assets/screenshots/olympics.png";

export default function Projects() {
    return (
        <div className="projects-page">
            <div className='flex gap-10 flex-wrap items-center justify-center mb-10 mx-auto p-4 sm:p-0'>
                <Card className="mx-2 sm:mx-0" image={Eliza} title="Eliza" body="Creating a chatbot on a website using OpenAI's API." />
                <Card className="mx-2 sm:mx-0" image={vva} title="Data Analytics" body="Predicting using data the outcome of the 2023 Rugby World Cup." />
                <Card className="mx-2 sm:mx-0" image={auchan} title="Auchan" body="Commissioned by Auchan France to propose an innovative solution to enhance the client's in-store experience. (won 1st place)" externalLink="https://www.figma.com/proto/FA5xhj2Z7rpZ6rwNwHPr1n/Projet-Auchan?page-id=0%3A1&node-id=1-243&node-type=canvas&viewport=823%2C438%2C0.14&t=3r6xkfbAHVqm4ZDN-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A243"/>
                <Card className="mx-2 sm:mx-0" image={scoolize} title="Scoolize" body="Rethinking the French higher education selection platform. Perfecting the algorithm and the overall user experience." />
                <Card className="mx-2 sm:mx-0" image={back2fest} title="Back2Fest" body="Creating a festival concept with a strong focus on sustainability and innovative technology." />
                <Card className="mx-2 sm:mx-0" image={olympics} title="Olympi'Connect" body="Creating the concept of a solution to help enhance the athlete's experience during the Paris 2024 Games." />
            </div>
        </div>
    );
}