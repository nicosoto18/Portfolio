import LinkedinIcon from "../icons/LinkedinIcon";
import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import MailIcon from "../icons/MailIcon";
import LocationIcon from "../icons/LocationIcon";

const Footer = ({scrollToSection, sectionsRef}) => {

    const linkedInUrl = 'https://www.linkedin.com/in/nicolas-soto-7272051b0/';
    const githubUrl = 'https://github.com/nicosoto18'
    const instagramUrl = "https://www.instagram.com/nicoo_soto/"
    const email = 'nicosoto18@hotmail.com'
    const subject = 'Consulta desde el portfolio'

    return (
        <div className="w-full flex flex-col bg-[#000000] text-center mt-[5rem]">

            <div className="lg:w-1/2 mx-auto pt-8 px-8">
                <h2 className="text-[#FFFFFF]">Nicolás Soto</h2>
                <p className="lg:text-xl mt-2">Desarrollador web full stack con orientacion en desarrollo frontend</p>
                <div className="lg:w-1/2 flex justify-around mt-5 items-center mx-auto">
                    <button onClick={() => window.location.href = linkedInUrl}>
                        <LinkedinIcon />
                    </button>
                    <button onClick={() => window.location.href = githubUrl}>
                        <GithubIcon />
                    </button>
                    <button onClick={() => window.location.href = instagramUrl}>
                        <InstagramIcon />
                    </button>
                    <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}>
                        <MailIcon />
                    </a>
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
            <div className="bg-Light-personal-Gray w-full text-[#000000] mt-8 p-2 lg:flex lg:justify-around items-center">
                <p className="lg:mr-16">©2024 Nicolas Soto.</p>
                <div className="mt-1 lg:mt-0 flex justify-center items-center">
                    <LocationIcon />
                    <p>Cosquín, Córdoba, Argentina</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;