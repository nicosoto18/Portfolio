import { Html, Css, Javascript, React, Redux, Bootstrap, Tailwind, Next } from "../icons/FrontendIcons";
import { Node, Express, PostgreSql, SqlServer, Sequelize } from "../icons/BackendIcons";
import { Git, GitHub, Figma, Terminal, VisualStudio } from "../icons/ToolsIcons";
import { Books, Python } from "../icons/LearningIcons";

const Skills = () => {

    const iconsFrontend = [
        { icon: <Html />, name: "Html" },
        { icon: <Css />, name: "Css" },
        { icon: <Javascript />, name: "Javascript" },
        { icon: <React />, name: "React" },
        { icon: <Redux />, name: "Redux" },
        { icon: <Redux />, name: "Redux Toolkit" },
        { icon: <Bootstrap />, name: "Bootstrap" },
        { icon: <Tailwind />, name: "Tailwind" },
        { icon: <Next />, name: "Next" },
    ]

    const iconsBackend = [
        { icon: <Node />, name: "Node.js" },
        { icon: <Express />, name: "Express.js" },
        { icon: <PostgreSql />, name: "PostgreSQL" },
        { icon: <SqlServer />, name: "SQL Server" },
        { icon: <Sequelize />, name: "Sequelize" },
    ]

    const iconsTools = [
        { icon: <Git />, name: "Git" },
        { icon: <GitHub />, name: "GitHub" },
        { icon: <Figma />, name: "Figma" },
        { icon: <Terminal />, name: "Terminal" },
        { icon: <VisualStudio />, name: "VsCode" }
    ]

    const iconsLearning = [
        { icon: <Books />, name: "Ingles" },
        { icon: <Python />, name: "Python" },
    ]

    return (
        <div>
            <h3 className="text-Dark-orange-personal underlineDecoration">Habilidades</h3>
            <div className="lg:flex lg:justify-around">
                
                <section className="bg-[#000000] lg:w-[40%] lg:h-[24rem] text-center rounded-2xl mt-6 p-3 shadow-inner shadow-Dark-orange-personal">
                    <h3 className="h-[3rem] bg-black">Frontend</h3>
                    <div className="h-[19rem] grid grid-cols-3 grid-rows-3 rounded-2xl">
                        {iconsFrontend.map((skill,index) => (
                            <div 
                            className="flex flex-col justify-center items-center text-Light-personal-Gray text-sm"
                            key={index}
                            >
                                {skill.icon}
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </section>
                <section className="lg:w-[40%] h-[20rem] lg:h-[24rem] text-center rounded-2xl mt-6 p-3 shadow-inner shadow-Dark-orange-personal">
                    <h3 className="h-[3rem]">Backend</h3>
                    <div className="h-[19rem] grid grid-cols-3 grid-rows-3 rounded-2xl">
                        {iconsBackend.map((skill, index) => (
                            <div 
                            className="flex flex-col justify-center items-center text-Light-personal-Gray text-sm"
                            key={index}
                            >
                                {skill.icon}
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <div className="lg:flex lg:justify-around">
                <section className="bg-[#000000] lg:w-[40%] h-[20rem] lg:h-[24rem] text-center rounded-2xl mt-6 p-3 shadow-inner shadow-Dark-orange-personal">
                    <h3 className="h-[3rem]">Herramientas</h3>
                    <div className="h-[19rem] grid grid-cols-3 grid-rows-3 rounded-2xl">
                        {iconsTools.map((skill, index) => (
                            <div 
                            className="flex flex-col justify-center items-center text-Light-personal-Gray text-sm"
                            key={index}
                            >
                                {skill.icon}
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </section>
                <section className="bg-[#000000] lg:w-[40%] h-[12rem] lg:h-[24rem] text-center rounded-2xl mt-6 p-3 shadow-inner shadow-Dark-orange-personal">
                    <h3 className="h-[3rem]">Aprendiendo</h3>
                    <div className="h-[19rem] grid grid-cols-3 grid-rows-3 rounded-2xl">
                        {iconsLearning.map((skill,index) => (
                            <div 
                            className="flex flex-col justify-center items-center text-Light-personal-Gray text-sm"
                            key={index}
                            >
                                {skill.icon}
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skills;