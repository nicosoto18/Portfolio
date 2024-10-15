import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import MailIcon from "../icons/MailIcon";
import LocationIcon from "../icons/LocationIcon";
import { useState } from "react";

const Footer = ({scrollToSection, sectionsRef}) => {

    const linkedInUrl = 'https://www.linkedin.com/in/nicolas-soto-7272051b0/';
    const githubUrl = 'https://github.com/nicosoto18'
    const instagramUrl = "https://www.instagram.com/nicoo_soto/"
    const email = 'nicosoto18@hotmail.com'
    const subject = 'Consulta desde el portfolio'

    const [sizeIcon, setSizeIcon] = useState({
        linkedIn: "22",
        gitHub: "22",
        instagram: "29",
        email:"29"
    })

    const enlargeIconSize = (icon) => {
        setSizeIcon((prev) => ({
            ...prev, 
            [icon]: (parseInt(prev[icon]) * 1.10).toFixed(0).toString()
        }))
    }

    const reduceIconSize=(icon)=>{
        setSizeIcon((prev)=>({
            ...prev,
            [icon] : (parseInt(prev[icon])*0.90).toFixed(0).toString()
        }))
    }

    return (
        <div className="w-full flex flex-col bg-[#444444] text-center mt-[5rem]">

            <div className="lg:w-1/2 mx-auto pt-8 px-8">
                <h2 className="text-[#FFFFFF]">Nicolás Soto</h2>
                <p className="lg:text-lg mt-2">Desarrollador web full stack </p>
                <div className="lg:w-1/2 h-9 flex justify-around mt-3 items-center mx-auto">
                    <div className="w-1/4 h-full flex justify-center items-center">
                        <button onClick={() => window.open(linkedInUrl)} onMouseEnter={()=>{enlargeIconSize("linkedIn")}} onMouseLeave={()=>{reduceIconSize("linkedIn")}}>
                            <LinkedinIcon size={sizeIcon.linkedIn} />
                        </button>
                    </div>
                    <div className="w-1/4 h-full flex justify-center items-center">
                        <button onClick={() => window.open(githubUrl)} onMouseEnter={()=>{enlargeIconSize("gitHub")}} onMouseLeave={()=>{reduceIconSize("gitHub")}}>
                            <GithubIcon size={sizeIcon.gitHub} />
                        </button>
                    </div>
                    <div className="w-1/4 h-full flex justify-center items-center">
                        <button onClick={() => window.open(instagramUrl)} onMouseEnter={()=>{enlargeIconSize("instagram")}} onMouseLeave={()=>{reduceIconSize("instagram")}}>
                            <InstagramIcon size={sizeIcon.instagram}/>
                        </button>
                    </div>
                    <div className="w-1/4 h-full flex justify-center items-center">
                        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`} onMouseEnter={()=>{enlargeIconSize("email")}} onMouseLeave={()=>{reduceIconSize("email")}}>
                            <MailIcon size={sizeIcon.email}/>
                        </a>
                    </div>
                </div>
                <div className="w-full flex flex-wrap lg:flex-nowrap lg:justify-between mt-5 text-lg">
                    <div className="w-[33%] lg:w-auto h-7">
                        <button 
                            onClick={() => scrollToSection(sectionsRef.start)}
                            className="hover:border-b-[2px] border-b-Dark-orange-personal"
                        >
                            Inicio
                        </button>
                    </div>
                    <div className="w-[33%] lg:w-auto h-7">
                        <button 
                            onClick={() => scrollToSection(sectionsRef.about)}
                            className="hover:border-b-[2px] border-b-Dark-orange-personal"
                        >
                            Sobre mí
                        </button>
                    </div>
                    <div className="w-[33%] lg:w-auto h-7">
                        <button 
                            onClick={() => scrollToSection(sectionsRef.projects)}
                            className="hover:border-b-[2px] border-b-Dark-orange-personal"
                        >
                            Proyectos
                        </button>
                    </div>
                    <div className="mt-3 lg:mt-0 w-[50%] lg:w-auto h-7">
                        <button 
                        onClick={() => scrollToSection(sectionsRef.skills)}
                        className="hover:border-b-[2px] border-b-Dark-orange-personal"
                        >
                            Habilidades
                        </button>
                    </div>
                    <div className="mt-3 lg:mt-0 w-[50%] lg:w-auto h-7">
                        <button 
                            onClick={() => scrollToSection(sectionsRef.contact)}
                            className="hover:border-b-[2px] border-b-Dark-orange-personal"
                        >
                            Contáctame
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#333333] w-full mt-8 p-2 lg:flex lg:justify-around items-center">
                <p className="lg:mr-16">©2024 Nicolas Soto.</p>
                <div className="mt-1 lg:mt-0 flex justify-center items-center">
                    <LocationIcon/>
                    <p className="ml-1">Cosquín, Córdoba, Argentina</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;