import PersonalLoogo from "../../../../public/Imagenes/LogoPersonal.png";
import Image from "next/image";

const NavBar = ({ scrollToSection, sectionsRef, activeSection }) => {

  return (

    <div className="w-full h-16 border-b-[1px] border-b-Dark-personal-Gray py-1 flex items-center fixed top-0 z-30 bg-Personal-Blue">
      <div className="w-[90%] h-[85%] flex mx-auto ">
        <div className="mr-auto my-auto flex ">
          <Image
            src={PersonalLoogo}
            alt="Logo personal"
            width={180}
            height={180}
          />
        </div>

        <div className="ml-auto flex text-center items-center text-lg">
          <button
            className={`mx-4 hover:border-b-[2px] border-b-Dark-orange-personal ${activeSection === 'start' ? 'text-Dark-orange-personal' : ''}`}
            onClick={() => scrollToSection(sectionsRef.start)}
          >
            Inicio
          </button>
          <button
            className={`mx-4 hover:border-b-[2px] border-b-Dark-orange-personal ${activeSection === 'about' ? 'text-Dark-orange-personal' : ''}`}
            onClick={() => scrollToSection(sectionsRef.about)}
          >
            Sobre mi
          </button>
          <button
            className={`mx-4 hover:border-b-[2px] border-b-Dark-orange-personal  ${activeSection === 'projects' ? 'text-Dark-orange-personal' : ''}`}
            onClick={() => scrollToSection(sectionsRef.projects)}
          >
            Proyectos
          </button>
          <button
            className={`mx-4 hover:border-b-[2px] border-b-Dark-orange-personal  ${activeSection === 'skills' ? 'text-Dark-orange-personal' : ''}`}
            onClick={() => scrollToSection(sectionsRef.skills)}
          >
            Habilidades
          </button>
          <button
            className={`mx-4 hover:border-b-[2px] border-b-Dark-orange-personal  ${activeSection === 'contact' ? 'text-Dark-orange-personal' : ''}`}
            onClick={() => scrollToSection(sectionsRef.contact)}
          >
            Contacto
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
