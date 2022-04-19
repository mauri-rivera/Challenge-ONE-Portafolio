export function validaTipoCampo(campo){
    const tipoDeCampo = campo.dataset.tipo;
    
    if(campo.validity.valid){
        campo.parentElement.classList.remove("contacto__error");
        campo.parentElement.querySelector(".contacto__error--campo").innerHTML = "Ingrese su(s) nombre(s) y su apellido";
    }
    else{
        campo.parentElement.classList.add("contacto__error");
        campo.parentElement.querySelector(".contacto__error--campo").innerHTML = mostrarMensajeDeError(tipoDeCampo, campo);
    }
}

function mostrarMensajeDeError(tipoDeCampo, campo){
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(campo.validity[error]){
            mensaje = mensajesDeError[tipoDeCampo][error];
        }
    });

    return mensaje;
}
      
const mensajesDeError = {
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío"
    }, 
    email: {
        valueMissing: "El campo email no puede estar vacío",
        patternMismatch: "Se requiere un @, un punto, y un dominio"
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío"
    },
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
        patternMismatch: "Sólo la 1° letra debe ser con mayúscula"
    }
};

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

