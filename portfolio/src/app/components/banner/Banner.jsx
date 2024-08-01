import Image from "next/image"
import LinkedinIcon from "../icons/LinkedinIcon"
import GithubIcon from "../icons/GithubIcon"
import CopyIcon from "../icons/CopyIcon"
import SendIcon from "../icons/SendIcon"
import PhotoOfPresentation from "../../../../public/Imagenes/PhotoOfPresentation.png"
import { useState } from "react"

const Banner = () => {

    const [showCopyMessage, setShowCopyMessage] = useState(false);

    const cvUrl = '/CV-Nicolas-Soto-IT.pdf';
    const linkedInUrl = 'https://www.linkedin.com/in/nicolas-soto-7272051b0/';
    const githubUrl = 'https://github.com/nicosoto18'
    const email = 'nicosoto18@hotmail.com'
    const subject = 'Consulta desde el portfolio'

    const copyToClipboard = (email) => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setShowCopyMessage(true);
                setTimeout(() => setShowCopyMessage(false), 2000);
            })
            .catch((error) => console.log('error al copiar al portapapeles', error));
    };

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className=" w-full lg:w-1/2 mt-1 lg:mt-0 text-center flex flex-col justify-center items-center order-2 lg:order-none">
                <h1>Axel Nicolás Soto</h1>
                <h2>Full-Stack Developer</h2>
                <div className="flex justify-center mt-6">
                    <button
                        className="bg-Light-personal-Gray text-Personal-Blue px-3 rounded-2xl mr-4"
                        onClick={() => window.location.href = cvUrl}
                    >
                        Ver Curriculum Vitae
                    </button>
                    <button onClick={() => window.location.href = linkedInUrl}>
                        <LinkedinIcon />
                    </button>
                    <button onClick={() => window.location.href = githubUrl}>
                        <GithubIcon />
                    </button>
                </div>
                <div className="mt-7 flex relative">
                    <div
                        className="bg-Light-personal-Gray text-Personal-Blue px-3 rounded-2xl mr-3 flex items-center">
                        nicosoto18@hotmail.com
                    </div>
                    <button className="mr-3" onClick={() => copyToClipboard('nicosoto18@hotmail.com')}>
                        <CopyIcon />
                        {showCopyMessage && (
                            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 ">copiado con exito</div>
                        )}
                    </button>
                    <div className="flex justify-center items-center cursor-pointer">
                        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}>
                            <SendIcon />
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-none">
                <div className="relative w-[55%] aspect-square">
                    <Image
                        src={PhotoOfPresentation}
                        alt="PhotoOfPresentation"
                        objectFit="cover"
                        className="rounded-full filterImg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner