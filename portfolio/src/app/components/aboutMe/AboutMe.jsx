import Caricature from "../../../../public/Imagenes/Caricature.png"
import Image from "next/image";

const AboutMe = () => {
    return (
        <div>
            <h2 className="text-Dark-orange-personal underline underline-offset-4">Sobre mi</h2>
            <div className="lg:flex mt-8">
                <div className="w-[50%] lg:w-[30%] mx-auto">
                    <Image
                        src={Caricature}
                        alt="caricature"
                        objectFit="cover"
                    />
                </div>
                <div className="flex items-center lg:w-[70%]">
                    <p className="mt-3 lg:mt-0 lg:text-xl">
                        ¡Hola! Soy Nicolás, un apasionado desarrollador Full-Stack con orientacion en frontend. <br />
                        Soy una persona altamente dedicada y comprometida con las tareas que emprendo.
                        Mi sed de conocimiento es insaciable. Siempre estoy ansioso por aprender y mantenerme al día con
                        las últimas tendencias tecnológicas.
                        Mi pasión por la tecnología y mi deseo de seguir progresando en el mundo IT son mi motor.
                        Creo firmemente en la importancia de la responsabilidad y la ética profesional. <br />
                        ¡Estoy listo para enfrentar nuevos desafíos y contribuir al crecimiento de equipos excepcionales! 🚀
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;