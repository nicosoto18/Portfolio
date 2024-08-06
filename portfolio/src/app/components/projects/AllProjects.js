import LandingCapture from "../../../../public/Imagenes/LandingCapture.jpg"
import MantenimientoCossbiaPhoto from "../../../../public/Imagenes/MantenimientoCossbiaPhoto.jpg"
import PhotoCountries from "../../../../public/Imagenes/CountriesPhoto.png"

const AllProjects = [
    {
        id:1,
        title: "PawBnb",
        linkDemo: "https://pawbnb.vercel.app/",
        linkRepo: "https://github.com/jOsterrielt/pawbnb",
        photo: LandingCapture,
        description: (
            <div>
                <p>
                    Esta aplicación tiene como objetivo conectar a dueños de perros con cuidadores en su vecindario.
                   
                </p>
                <p className="mt-2">
                    PawBnb, desarrollado con un compañero, aspira a lanzarse al mercado. Actualmente,
                    tenemos una demo con funcionalidades básicas como: registro del cuidador y del dueño del perro, perfiles
                    completos (fotos, descripción, nombre), una sección Home con todos los cuidadores disponibles y una
                    Landing Page con footer, navbar y otros elementos esenciales.
                </p>
                <p className="mt-2">
                    Estamos trabajando para añadir nuevas funcionalidades.            
                </p>
            </div>
        )
    },
    {
        id:2,
        title: "Mantenimiento Cossbia",
        linkDemo: "https://mantenimiento-cossbia-byfa.vercel.app/",
        linkRepo: "https://github.com/nicosoto18/MantenimientoCossbia",
        photo : MantenimientoCossbiaPhoto,
        description: (
            <div>
                <p>
                    Mantenimiento Cossbia es una plataforma web que desarrollé para un familiar con el objetivo
                    principal de ayudar a crear una página para su empresa de servicios de mantenimiento general. 
                </p>
                <p className="mt-2">
                    Este proyecto también me permitió reforzar mis conocimientos en desarrollo web al enfrentarme a 
                    diversos desafíos técnicos y de diseño. 
                </p>
                <p className="mt-2">
                    La aplicación facilita la gestión y coordinación de tareas de mantenimiento, brindando una 
                    solución eficiente y accesible para las necesidades locales.
                </p>
            </div>
        )
    },
    {
        id:3,
        title: "Countries",
        linkDemo: "https://pi-countries-frontend-one.vercel.app/",
        linkRepo: "https://github.com/nicosoto18/PI-COUNTRIES-frontend",
        photo : PhotoCountries,
        description: (
            <div>
                <p>
                    Durante mi carrera como Full-Stack Developer, desarrolle una aplicación con funciones como búsquedas
                    de paises del mundo, filtrados, ordenamientos y funcionalidades de creación.
                </p>
                <p className="mt-2">
                    Este proyecto fue desafiante para acentar mis conocimientos y poner en practica parte de lo que habia 
                    aprendido en el bootcamp. 
                </p>
                <p className="mt-2">
                    La parte mas desafiante fue la presentación en vivo ante mi profesor, donde expuse y expliqué mi código,
                    realizando cambios en tiempo real para la aprobación del mismo. 
                </p>
            </div>
        )
    }
]


export default AllProjects;