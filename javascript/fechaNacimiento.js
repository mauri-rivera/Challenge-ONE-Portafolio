const campoEdad = document.querySelector(".edad");

const fechaActual = new Date();
const fechaNacimiento = new Date("1984-12-05");

campoEdad.innerText = parseInt(obtenerEdad(fechaNacimiento, fechaActual));

function obtenerEdad(fecha1, fecha2){
    const fecha1utc = Date.UTC(fecha1.getFullYear(), fecha1.getMonth(), fecha1.getDate());
    const fecha2utc = Date.UTC(fecha2.getFullYear(), fecha2.getMonth(), fecha2.getDate());
      
    const year = 1000 * 60 * 60 * 24 * 30.4167 * 12;

    return (fecha2utc - fecha1utc) / year;
}



