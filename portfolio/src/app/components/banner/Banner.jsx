import Image from "next/image"
import LinkedinIcon from "../icons/LinkedinIcon"
import GithubIcon from "../icons/GithubIcon"
import CopyIcon from "../icons/CopyIcon"
import SendIcon from "../icons/SendIcon"
import PhotoOfPresentation from "../../../../public/Imagenes/PhotoOfPresentationNew.png"
import { useState } from "react"

const Banner = () => {

    const [showCopyMessage, setShowCopyMessage] = useState(false);
    const [sizeIcon, setSizeIcon] = useState({
        githubIcon: "24",
        linkedinIcon: "24",
        copyIcon: "22",
        sendIcon: "18"
    })

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

    const handleSizeIconLarge = (icon, size)=>{
        setSizeIcon(prev=>({
            ...prev,
            [icon]: size 
        }))
    }

    const handleSizeIconSmall = (icon, size)=>{
        setSizeIcon(prev=>({
            ...prev,
            [icon]: size
        }))
    }

    return (
        <div className="flex flex-col lg:flex-row justify-center items-center">
            <div className="w-full lg:w-1/2 mt-1 lg:mt-0 text-center flex flex-col justify-center items-center order-2 lg:order-none">

                <h1>Axel Nicolás Soto</h1>
                <h2 className="text-xl text-Medium-personal-Gray lg:text-2xl">Full-Stack Developer</h2>
                <div className="flex justify-around items-center mt-4 h-8 w-72">
                    <div>
                        <button
                            className="bg-Light-personal-Gray text-black font-semibold h-6 px-2 rounded-2xl  hover:bg-Dark-orange-personal hover:text-black "
                            onClick={() => window.location.href = cvUrl}
                        >
                            Ver Curriculum Vitae
                        </button>
                    </div>
                    <div className="w-8 flex items-center justify-center">
                        <button onClick={() => window.location.href = linkedInUrl} onMouseEnter={()=>handleSizeIconLarge("linkedinIcon", 30)} onMouseLeave={()=>handleSizeIconSmall("linkedinIcon", 24)}>
                            <LinkedinIcon size={sizeIcon.linkedinIcon} />
                        </button>
                    </div>
                    <div className="w-8 flex items-center justify-center">
                        <button onClick={() => window.location.href = githubUrl} onMouseEnter={()=>handleSizeIconLarge("githubIcon", 30)} onMouseLeave={()=>handleSizeIconSmall("githubIcon", 24)}>
                            <GithubIcon size={sizeIcon.githubIcon}/>
                        </button>
                    </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center relative h-8 w-[260px]">
                    <div
                        className="bg-[#000000] text-Light-personal-Gray font-semibold rounded-2xl flex items-center">
                        nicosoto18@hotmail.com
                    </div>
                    <div className="w-6 flex items-center justify-center">
                        <button onClick={() => copyToClipboard('nicosoto18@hotmail.com')} onMouseEnter={()=>handleSizeIconLarge("copyIcon", 25)} onMouseLeave={()=>handleSizeIconSmall("copyIcon", 22)}>
                            <CopyIcon size={sizeIcon.copyIcon} />
                                {showCopyMessage && (
                                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-sm">copiado con éxito</div>
                            )}
                        </button>
                    </div>
                    <div className="w-6 flex items-center justify-center">
                        <button onMouseEnter={()=>handleSizeIconLarge("sendIcon", 21)} onMouseLeave={()=>handleSizeIconSmall("sendIcon", 18)}>
                            <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}>
                                <SendIcon size={sizeIcon.sendIcon}/>
                            </a>
                        </button>
                    </div>

                </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-none">
              
                    <Image
                        src={PhotoOfPresentation}
                        alt="PhotoOfPresentation"
                        objectFit="cover"
                        className="mx-auto max-w-72 max-h-72 mb-[6%]"
                        
                    />
                </div>
            
        </div>
    )
}

export default Banner