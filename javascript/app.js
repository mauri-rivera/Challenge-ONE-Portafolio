import { enviarFormulario } from "./envio.js";
import * as moduloFechaNacimiento from "./fechaNacimiento.js";
import * as moduloRedirecciomientoWeb from "./redireccionamientoWeb.js";
import { validaTipoCampo } from "./validaciones.js";
import { validarTecla } from "./validacionNombre.js";

const campos = document.querySelectorAll("input");
const mensajes = document.querySelectorAll("textarea");

campos.forEach((campo) => {
    campo.addEventListener("blur", (campo) => {
        validaTipoCampo(campo.target);
    });
});

mensajes.forEach((campo) => {
    campo.addEventListener("blur", (campo) => {
        validaTipoCampo(campo.target);
    });
});

enviarFormulario();
validarTecla();