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
            <>
                <p>
                    Aplicación que tiene como objetivo conectar a dueños de perros con cuidadores en su vecindario.
                    Aspiro a lanzarla al mercado.
                </p>
            </>
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
                    Plataforma web para una empresa familiar que aspira a  brindar servicios de mantenimiento en general
                    en mi localidad. 
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
                 Aplicación desarrollada durante mis estudios de Full-Stack, contiene funciones de busquedas, filtrados,
                 ordenamientos, creación.
                </p>    
        )
    }
]


export default AllProjects;