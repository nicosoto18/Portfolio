import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Validation from "./Validation";
import swal from "sweetalert";


const ContactForm = () => {
    const [userData, setUserData] = useState({
        username : "",
        email : "",
        message: "" 
    });
    
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [loading, setLoading] = useState(false)     

    const refForm = useRef();
   
    const handleChange=(event)=>{
        const {name, value} = event.target;
        setUserData({
            ...userData,
            [name] : value
        });

        if(touched[name]) {
            const validationErrors = Validation({
                 ...userData,
                [name]: value
            });
            setErrors(validationErrors);
        }
    };

    const handleBlur = (event) => {
        const {name, value} = event.target;
        setTouched({
            ...touched,
            [name]: true
        });

        const validationErrors = Validation({
            ...userData,
            [name]: value
        });
        setErrors(validationErrors);
    };

    const handleSubmit = (event)=>{
        setLoading(true)
        event.preventDefault();

        const serviceId = "service_1zf4b8l";
        const templateId = "template_o7kywbp";
        const apiKey = "tIGXNQ51peG0toIqy" 
        emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
         .then((result)=>{
            swal({
                title: "Mensaje enviado con éxito",
                text: "Gracias por tu mensaje!",
                icon: "success"
            })
            setUserData({
                username: "",
                email: "",
                message: ""
            })
            setLoading(false)
         })
         .catch((error)=>console.error(error));
    }

    return (
        <div className="mb-6">
            <h3 className="text-Dark-orange-personal underlineDecoration">Contactame</h3>
            <p className="mt-4 text-medium lg:ml-4">Si estás interesado en mi perfil, ponte en contacto conmigo</p>
            
            {
                !loading && 
                <form 
                    action="formulario" 
                    className="w-full mx-auto mt-6 lg:mt-8 lg:flex lg:flex-wrap lg:ml-4"
                    onSubmit={handleSubmit}
                    ref={refForm}
                    autoComplete="off"
                >
                    <div className="w-full lg:w-[48%] h-16 flex flex-col lg:mr-auto">
                        <input
                            type="text"
                            className="inputForm mr-auto w-full"
                            name="username"
                            placeholder="Nombre..."
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={userData.username}
                        />
                        <div className="text-xs my-auto ml-1 text-red-400 mt-1">
                        {touched.username && errors.n1 && <p>{errors.n1}</p>}
                        {touched.username && errors.n2 && <p>{errors.n2}</p>}
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-[48%] h-16 flex flex-col lg:ml-auto mt-2 lg:mt-0">
                        <input
                            type="text"
                            className="inputForm w-full lg:mt-0"
                            name="email"
                            placeholder="Correo electronico..."
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={userData.email}
                        />
                        <div className="text-xs my-auto ml-1 text-red-400 mt-1">
                            {touched.email && errors.e1 && <p>{errors.e1}</p>}
                            {touched.email && errors.e2 && <p>{errors.e2}</p>}
                            {touched.email && errors.e3 && <p>{errors.e3}</p>} 
                        </div>
                    </div>
                    
                    <div className="w-full h-60 flex flex-col mt-2">
                        <textarea
                            name="message"
                            id="consulta"
                            placeholder="Deja tu mensaje..."
                            className="inputForm w-full"
                            rows={8}
                            maxLength={1500}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={userData.message}
                        >
                        </textarea>
                        <div className="text-xs my-auto ml-1 text-red-400 mt-1">
                            {touched.message && errors.m1 && <p>{errors.m1}</p>}
                            {touched.message && errors.m2 && <p>{errors.m2}</p>}
                        </div>
                    </div>
                    
                    <button 
                        type="submit" 
                        className="button3 w-full"
                        disabled={Object.keys(errors).length > 0 || !userData.username || !userData.email || !userData.message}
                        >
                        Enviar
                    </button>
                </form>
            }
            {
                loading && 
                <div className="h-80 flex justify-center items-center text-lg">
                    Cargando...
                </div>
            }

        </div>
    )
}

export default ContactForm;