

const Validation = (userData)=>{
    
    const errors = {};

    if(!userData.username){
        errors.n1 = "*Por favor, ingrese su nombre"    
    }
    else if(userData.username.length>38){
        errors.n2 = "La longitud máxima permitida es de 38 caracteres"
    }
 
    if(!userData.email){
        errors.e1 = "*Por favor, ingrese su correo electronico"
    }
    else if(userData.email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)){
        errors.e2 = "El correo electronico debe ser valido"
    }
    else if(userData.email.length>35){
        errors.e3 = "Su email es demasiado largo"
    }

    if(!userData.message){
        errors.m1 = "*Deja tu mensaje"
    }
    else if(userData.message.length===1500){
        errors.m2 = "Su mensaje llego al límite de caracteres"
    }

    return errors;
}

export default Validation