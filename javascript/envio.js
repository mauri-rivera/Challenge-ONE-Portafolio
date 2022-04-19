export function enviarFormulario(){
    const botonEnvio = document.querySelector("#envio");
    const formularioContacto = document.querySelector("#formulario");
    const msgAsunto = document.querySelector("#errorAsunto");
    const msgEmail = document.querySelector("#errorEmail");
    const msgMensaje = document.querySelector("#errorMensaje");
    const msgNombre = document.querySelector("#errorNombre");

    botonEnvio.addEventListener("click", function(){

        let campoAsunto = formularioContacto.asunto.value;
        let campoEmail = formularioContacto.email.value;  
        let campoMensaje = formularioContacto.mensaje.value;
        let campoNombre = formularioContacto.nombre.value;

        let errorAsunto = msgAsunto.innerText;
        let errorEmail = msgEmail.innerText;
        let errorMensaje = msgMensaje.innerText;
        let errorNombre = msgNombre.innerText;

        if((campoAsunto != " " && errorAsunto == "Ingrese su(s) nombre(s) y su apellido") && (campoEmail != " " && errorEmail == "Ingrese su(s) nombre(s) y su apellido") && (campoMensaje != " " && errorMensaje == "Ingrese su(s) nombre(s) y su apellido") && (campoNombre != " " && errorNombre == "Ingrese su(s) nombre(s) y su apellido")){
            alert("Sus datos son enviados a ninguna parte");
        }
    });  
}