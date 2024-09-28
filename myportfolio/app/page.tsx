"use client";
import Navbar from "../components/Navbar";
import { useRef } from  "react";
import ContactForm from "../components/ContactForm"
import HomePage from "../components/Home"
import Experience from "../components/Experience"
import CardGrid from "../components/CardGrid"
import Projects from "../components/Projects"
import Education from "../components/Education"


export default function Home() {

  const homeRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (section: string) => {
    let targetRef = null;

    switch (section) {
      case 'home':
        targetRef = homeRef.current;
        break;
      case 'experience':
        targetRef = experienceRef.current;
        break;
      case 'education':
        targetRef = educationRef.current;
        break;
      case 'projects':
        targetRef = projectsRef.current;
        break;
      case 'skills':
        targetRef = skillsRef.current;
        break;
      case 'contact':
        targetRef = contactRef.current;
        break;
      default:
        break;
    }

    if (targetRef) {
      targetRef.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Target section ${section} is not defined or hasn't rendered yet.`);
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <main ref={homeRef} className="flex min-h-screen flex-col items-center justify-between bg-animated">

        {/* Home Section */}
        <HomePage scrollToSection={scrollToSection} />

        {/* Experience Section */}
        <div ref={experienceRef} className='page3 bg-blackish w-screen min-h-screen justify-center w-screen m-auto'>
          <h1 className="text-4xl sm:text-5xl leading-10 font-semibold max-w-2xl font-sans text-white text-center my-20 sm:mx-20">
            What {' '}
            <span style={{
              background: '-webkit-linear-gradient(50deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline'
            }}>
              I have experienced.
            </span>
          </h1>


          <Experience />
        </div>

        {/* Education Section */}
        <div ref={educationRef} className='page4 bg-lightb w-screen min-h-screen justify-center w-screen m-auto'>
          <h1 className="text-4xl sm:text-5xl leading-10 font-semibold max-w-2xl font-sans text-white text-center my-20 sm:mx-20">
            Where {' '}
            <span style={{
              background: '-webkit-linear-gradient(50deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline'
            }}>
              I have learned.
            </span>
          </h1>
          <Education />
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className='page5 bg-blackish w-screen min-h-screen justify-center w-screen m-auto'>
          <div className='whatido'>
            <h1 className="text-4xl sm:text-5xl leading-10 font-semibold max-w-2xl font-sans text-white text-center mt-24 mb-12 sm:mx-20">
              What {' '}
              <span style={{
                background: '-webkit-linear-gradient(50deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline'
              }}>
                I can do.
              </span>
            </h1>
            <div className='minicards'>
              <CardGrid />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div ref={projectsRef} className='page6 bg-lightb w-screen min-h-screen justify-center w-screen m-auto'>
          <div className='w-screen m-auto justify-center flex flex-col items-center'>
            <h1 className="text-4xl sm:text-5xl leading-10 font-semibold max-w-2xl font-sans text-white text-center mt-24 mb-12 sm:mx-20">
              What {' '}
              <span style={{
                background: '-webkit-linear-gradient(50deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline'
              }}>
                I have made.
              </span>
            </h1>
            <p className='max-w-xl font-sans text-white font-light mt-6 text-lg text-center my-20'>
              Here are some projects that I have done since the beginning of my studies. They are diverse and have hence allowed me to gain several different skills in different areas.
            </p>
          </div>

          <Projects />
        </div>


        {/* Contact Form Section */}
        <div ref={contactRef} className='page7 bg-blackish w-screen h-screen justify-center w-screen m-auto'>
          <h1 className="text-4xl sm:text-5xl leading-10 font-semibold max-w-2xl font-sans text-white text-center mt-24 mb-12 sm:mx-20">
            Contact {' '}
            <span style={{
              background: '-webkit-linear-gradient(50deg, #B16CEA, #FF5E69, #FF8A56, #FFA84B)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline'
            }}>
              me
            </span> 😁
          </h1>
          <ContactForm></ContactForm>
        </div>

      </main>
    </div>

  )
}