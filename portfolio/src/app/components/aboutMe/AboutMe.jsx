import Caricature from "../../../../public/Imagenes/Caricature.png"
import Image from "next/image";

const AboutMe = () => {
    return (
        <div>
            <h2 className="text-Dark-orange-personal underline underline-offset-4">Sobre mi</h2>
            <div className="lg:flex mt-8">
                <div className="w-[50%] lg:w-[30%] mx-auto flex items-center">
                    <Image
                        src={Caricature}
                        alt="caricature"
                        objectFit="cover"
                    />
                </div>
                <div className="lg:w-[70%] flex flex-col items-center justify-center">
                    <p className="mt-3 lg:mt-0 text-base">
                        ¡Hola! Soy Nicolás, un apasionado desarrollador Full-Stack con orientacion en frontend.
                        Soy una persona altamente dedicada y comprometida con las tareas que emprendo.
                    </p>
                    <p className="mt-3 text-base">
                        Mi sed de conocimiento es insaciable. Siempre estoy ansioso por aprender y mantenerme al día con
                        las últimas tendencias tecnológicas.
                        Mi pasión por la tecnología y mi deseo de seguir progresando en el mundo IT son mi motor.
                    </p>
                    <p className="mt-3">
                        Creo firmemente en la importancia de la responsabilidad y la ética profesional. <br />
                        ¡Estoy listo para enfrentar nuevos desafíos y contribuir al crecimiento de equipos excepcionales! 🚀
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;