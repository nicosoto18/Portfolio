"use client";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import ContactForm from "./components/contactForm/ContactForm";
import NavBar from "./components/navBars/navBar";
import HamburgerMenu from "./components/navBars/hamburgerMenu";
import Banner from "./components/banner/Banner";
import { useEffect, useRef, useState } from "react";
import Footer from "./components/footer/Footer";

export default function Home() {
    const startRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);
    const [activeSection, setActiveSection] = useState('')

    const sectionsRef = {
        start: startRef,
        about: aboutRef,
        projects: projectsRef,
        skills: skillsRef,
        contact: contactRef,
    };

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });   
        } else {
            console.log("no se paso la ref");
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50% 0px',
            threshold: 0.3,
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            });
        }, observerOptions);

        Object.values(sectionsRef).forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });


        return () => {
            Object.values(sectionsRef).forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [sectionsRef])


    return (
        <div>
            <div className="wideScreen">
                <NavBar
                    scrollToSection={scrollToSection}
                    sectionsRef={sectionsRef}
                    activeSection={activeSection}
                />
            </div>
            <div className="smallScreen">
                <HamburgerMenu
                    scrollToSection={scrollToSection}
                    sectionsRef={sectionsRef}
                    activeSection={activeSection}
                />
            </div>

            <div className="mx-auto w-[90%] sectionToAppear">
                
                <section className="pt-44 lg:pt-40" ref={startRef} id="start">
                    <Banner />
                </section>

                <section className="w-[95%] lg:w-[80%] mx-auto">
                    <section className="pt-32 lg:pt-20" ref={aboutRef} id="about">
                        <AboutMe />
                    </section>
                    <section className="pt-20" ref={projectsRef} id="projects">
                        <Projects />
                    </section>
                    <section className="pt-20" ref={skillsRef} id="skills">
                        <Skills />
                    </section>
                    <section className="pt-20" ref={contactRef} id="contact">
                        <ContactForm />
                    </section>
                </section>
            </div>
            <Footer scrollToSection={scrollToSection} sectionsRef={sectionsRef}/>
        </div>
    );
}
