import LandingCapture from "../../../../public/Imagenes/LandingCapture.jpg"
import MantenimientoCossbiaPhoto from "../../../../public/Imagenes/MantenimientoCossbiaPhoto.jpg"
import PhotoCountries from "../../../../public/Imagenes/CountriesPhoto.png"

const AllProjects = [
    {
        id:1,
        title: "PawBnb",
        linkDemo: "https://pi-countries-frontend-one.vercel.app/",
        linkRepo: "https://github.com/jOsterrielt/pawbnb",
        photo: LandingCapture,
        description: (
            <p>
            Esta aplicación tiene como objetivo conectar a dueños de perros con cuidadores en su vecindario.
            Nuestra misión es construir una comunidad inclusiva y colaborativa de cuidadores comprometidos y 
            dueños responsables. PawBnb, desarrollado con un compañero, aspira a lanzarse al mercado. Actualmente,
            tenemos una demo con funcionalidades básicas como: registro del cuidador y del dueño del perro, perfiles
            completos (fotos, descripción, nombre), una sección Home con todos los cuidadores disponibles y una
            Landing Page con footer, navbar y otros elementos esenciales. Estamos trabajando para añadir
            nuevas funcionalidades.            
            </p>
        )
    },
    {
        id:2,
        title: "Mantenimiento Cossbia",
        linkDemo: "https://mantenimiento-cossbia-byfa.vercel.app/",
        linkRepo: "https://github.com/nicosoto18/MantenimientoCossbia",
        photo : MantenimientoCossbiaPhoto,
        description: (
            <p>
            Mantenimiento Cossbia es una plataforma web que desarrollé para un familiar con el objetivo principal
            de ayudar a crear una página para su empresa de servicios de mantenimiento general. Este proyecto también
            me permitió reforzar mis conocimientos en desarrollo web al enfrentarme a diversos desafíos técnicos y de
            diseño. La aplicación facilita la gestión y coordinación de tareas de mantenimiento, brindando una 
            solución eficiente y accesible para las necesidades locales.
            </p>
        )
    },
    {
        id:3,
        title: "Countries",
        linkDemo: "https://pi-countries-frontend-one.vercel.app/",
        linkRepo: "https://github.com/nicosoto18/PI-COUNTRIES-frontend",
        photo : PhotoCountries,
        description: (
            <p>
                 Durante mi carrera como Full-Stack Developer, desarrolle una aplicación con funciones como búsquedas
                 de paises del mundo, filtrados, ordenamientos y funcionalidades de creación. <br/> 
                 Este proyecto fue desafiante para acentar mis conocimientos y poner en practica parte de lo que habia 
                 aprendido en el bootcamp. 
                 La parte mas desafiante fue la presentación en vivo ante mi profesor, donde expuse y expliqué mi código,
                 realizando cambios en tiempo real para la aprobación del mismo. 
            </p>
        )
    }
]


export default AllProjects;