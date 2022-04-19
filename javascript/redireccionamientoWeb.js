const curriculumVitae = document.querySelector("#curriculumVitae");
const demoUno = document.querySelector("#demoUno");
const demoDos = document.querySelector("#demoDos");
const gitHub = document.querySelector("#gitHub");
const linkedIn = document.querySelector("#linkedIn");
const repositorioUno = document.querySelector("#repositorioUno");
const repositorioDos = document.querySelector("#repositorioDos");

curriculumVitae.addEventListener("click", function(){
    abrirNuevaPagina("./EjemploCV.pdf");
});

demoUno.addEventListener("click", function(){
    abrirNuevaPagina("https://mauri-rivera.github.io/Challenge-ONE-Encriptador-Desencriptador");
});

demoDos.addEventListener("click", function(){
    abrirNuevaPagina("https://mauri-rivera.github.io/Challenge-ONE-Juego-del-Ahorcado");
});

gitHub.addEventListener("click", function(){
    abrirNuevaPagina("https://github.com/mauri-rivera");
});

linkedIn.addEventListener("click", function(){
    abrirNuevaPagina("https://www.linkedin.com/in/mauricio-rivera-torres");
});

repositorioUno.addEventListener("click", function(){
   abrirNuevaPagina("https://github.com/mauri-rivera/Challenge-ONE-Encriptador-Desencriptador");
});

repositorioDos.addEventListener("click", function(){
    abrirNuevaPagina("https://github.com/mauri-rivera/Challenge-ONE-Juego-del-Ahorcado");
}); 

function abrirNuevaPagina(url){
    let nuevaPagina = window.open(url, '_blank');
    nuevaPagina.focus();
}

