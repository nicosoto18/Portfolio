import Image from "next/image";
import PersonalLogo from "../../../../public/Imagenes/LogoPersonal.png";
import { useEffect, useRef, useState } from "react";
import PhotoOfPresentation from "../../../../public/Imagenes/PhotoOfPresentation.png"

const HamburgerMenu = ({ scrollToSection, sectionsRef, activeSection }) => {

  const [menuActive, setMenuActive] = useState();
  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [menuRef])

  return (
    <div ref={menuRef}>
      <div className="w-full h-20 border-b-[1px] border-b-Dark-personal-Gray flex items-center fixed bg-Personal-Blue z-50">
        <div className="w-[90%] h-[85%] mx-auto flex">
          <Image
            src={PersonalLogo}
            width={200}
            height={200}
            alt="Logo personal"
            className="my-auto p-2 "
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-100 ml-auto  text-Dark-orange-personal w-12 h-100 my-auto"
            onClick={() => setMenuActive(!menuActive)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>
      </div>

      {
        menuActive && (
          <div className="fixed z-40 top-0 bottom-0 right-0 left-24 h-[100vh] flex flex-col bg-[#000000] justify-center items-center">
            <section>
              <Image
                src={PhotoOfPresentation}
                className="rounded-full bg-Light-personal-Gray w-36 mx-auto"
              />
              <ul className="w-full my-auto flex flex-col bg-[#000000] justify-center items-center relative mt-16">
                <li
                  className={`button4 ${activeSection==='start' ? 'text-Dark-orange-personal': ''}`}
                  onClick={() => {
                    scrollToSection(sectionsRef.start)
                    setMenuActive(false)
                  }}
                >
                  Inicio
                </li>
                <li
                  className={`button4 ${activeSection==='about' ? 'text-Dark-orange-personal' : ''} `}
                  onClick={() => {
                    scrollToSection(sectionsRef.about)
                    setMenuActive(false)
                  }}
                >
                  Sobre mi
                </li>
                <li
                  className={`button4 ${activeSection==='projects' ? 'text-Dark-orange-personal' : ''}`}
                  onClick={() => {
                    scrollToSection(sectionsRef.projects)
                    setMenuActive(false)
                  }}
                >
                  Proyectos
                </li>
                <li
                  className={`button4 ${activeSection==='skills' ? 'text-Dark-orange-personal' : ''}`}
                  onClick={() => {
                    scrollToSection(sectionsRef.skills)
                    setMenuActive(false)
                  }}
                >
                  Habilidades
                </li>
                <li
                  className={`button4 ${activeSection==='contact' ? 'text-Dark-orange-personal' : ''}`}
                  onClick={() => {
                    scrollToSection(sectionsRef.contact)
                    setMenuActive(false)
                  }}
                >
                  Contactame
                </li>

              </ul>

            </section>
          </div>
        )
      }

    </div>
  );
};

export default HamburgerMenu;
