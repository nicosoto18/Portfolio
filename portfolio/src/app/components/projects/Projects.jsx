import Image from "next/image";
import AllProjects from "./AllProjects";

const Projects = () => {

    return (
        <div>
            <h3 className="text-Dark-orange-personal underlineDecoration">Proyectos</h3>
            <p className="mt-4 text-medium lg:ml-4">Aquí hay algunos de mis proyectos, puedes verlos todos en mi Github</p>
            <section className="lg:flex justify-around">
                {
                    AllProjects.map((project, index) => (
                        <div
                            key={index}
                            className="lg:w-[30%] flex flex-col mt-8 rounded-md shadow shadow-Light-personal-Gray p-1 cursor-pointer hover:shadow-md hover:shadow-Light-personal-Gray"
                        >
                            <Image
                                src={project.photo}
                                layout = "responsive"
                                widt={500}
                                height={500}
                                alt={`Imagen de ${project.title}`}
                            />
                            <div className="pt-3 pb-8 px-2">
                                <h5 className="text-center font-bold ">{project.title}</h5>
                                <div className="text-sm mt-2">{project.description}</div>
                                <div className="flex justify-around mt-3">
                                    <button className="button4" onClick={() => window.open(project.linkDemo)}>Sitio web</button>
                                    <button className="button4" onClick={() => window.open(project.linkRepo)}>Repositorio</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </section>

        </div>
    )
}

export default Projects;