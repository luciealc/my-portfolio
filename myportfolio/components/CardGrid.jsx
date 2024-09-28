import React from "react";
import MiniCard from "../components/MiniCard";
import figma from "../assets/logos/figma.svg"
import py from "../assets/logos/python.svg"
import js from "../assets/logos/js.svg"
import java from "../assets/logos/java.svg"
import tekton from "../assets/logos/tekton.svg"
import github from "../assets/logos/Github.svg"
import wind from "../assets/logos/windows.svg"
import linux from "../assets/logos/linux.svg"
import apple from "../assets/logos/apple.svg"
import react from "../assets/logos/react.svg"
import notion from "../assets/logos/notion.svg"
import jira from "../assets/logos/jira.svg"

export default function CardGrid() {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-8 bg-black justify-items-center">
            <MiniCard image={py} title="Python" externalLink="https://www.python.org/" />
            <MiniCard image={js} title="Javascript" externalLink="https://js.org/index.html" />
            <MiniCard image={java} title="Java" externalLink="https://www.oracle.com/java/" />
            <MiniCard image={react} title="React" externalLink="https://reactjs.org/" />
            <MiniCard image={github} title="Github" externalLink="https://github.com/" />
            <MiniCard image={tekton} title="Kubernetes" externalLink="https://kubernetes.io/" />
            <MiniCard image={wind} title="Windows" externalLink="https://www.microsoft.com/windows/" />
            <MiniCard image={linux} title="Linux" externalLink="https://www.linux.org/" />
            <MiniCard image={apple} title="MacOS" externalLink="https://www.apple.com/macos/" />
            <MiniCard image={notion} title="Notion" externalLink="https://www.notion.so/" />
            <MiniCard image={jira} title="Jira" externalLink="https://www.atlassian.com/software/jira" />
            <MiniCard image={figma} title="Figma" externalLink="https://www.figma.com/" />
        </div>
    );
}
