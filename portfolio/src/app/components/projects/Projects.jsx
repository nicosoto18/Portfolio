import Image from "next/image";
import AllProjects from "./AllProjects";
import { useState } from "react";

const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalProjects = 3

    const handleNext = () => {
        if (currentIndex < AllProjects.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <div>
            <h2 className="text-Dark-orange-personal underline underline-offset-4">Proyectos</h2>
            <p className="mt-4 lg:text-lg">Aquí hay algunos de mis proyectos, puedes verlos todos en mi Github </p>
            <section>
                <h3 className="underline underline-offset-4 mt-8 text-[#F5F5DC]">{AllProjects[currentIndex].title}</h3>
                <div className="flex flex-col lg:flex-row mt-6">
                    <div className="lg:w-[40%] bg-[#CCCCCC] rounded-xl order-1 lg:order-none p-2 flex flex-col justify-center">
                            <Image
                                src={AllProjects[currentIndex].photo}
                                alt="photo"
                                className="rounded-xl"
                            />
                            <div className="flex mt-4 justify-between">
                                <button
                                    className="button1 w-[47%]"
                                    onClick={()=>window.location.href=AllProjects[currentIndex].linkDemo}
                                >
                                    Demo
                                </button>
                                <button
                                    className="button1 w-[47%]"
                                    onClick={()=>window.location.href = AllProjects[currentIndex].linkRepo}
                                >
                                    Repositorio
                                </button>
                            </div>
                       
                    </div>
                    <div className="lg:w-[59%] px-3 mt-6 ml-auto lg:mt-0 order-3 lg:order-none text-sm">
                        {AllProjects[currentIndex].description}
                    </div>
                </div>
                <div className="flex justify-center items-center mt-4 lg:mt-7 order-2 lg:order-none">
                    <button
                        className="button2 w-28 lg:w-[18%]"
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                    >
                        Anterior
                    </button>
                    <p className="text-[#F5F5DC] mx-4">{currentIndex + 1} de  {totalProjects}</p>
                    <button
                        className="button2 w-28 lg:w-[18%]"
                        onClick={handleNext}
                        disabled={currentIndex === AllProjects.length - 1}
                    >
                        Siguiente
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Projects;