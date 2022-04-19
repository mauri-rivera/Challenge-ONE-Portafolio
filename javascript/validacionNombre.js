export function validarTecla(){
    const textoLetra = document.querySelector("#nombre");

    textoLetra.addEventListener("keydown", function(event){
        let caracterNumeroValidado = comprobarNumero(String.fromCharCode(event.which), event);
        let caracterEspecialValidado = comprobarCaracter(event.which, event);

        if(caracterNumeroValidado != undefined || caracterEspecialValidado != undefined){
            event.target.value = "";
        }
    });

    function comprobarCaracter(keyChar, evento){
        let resultado;
    
        if(keyChar == 9 || (keyChar >= 17 && keyChar <= 20) || keyChar == 27 || (keyChar >= 33 && keyChar <= 36) || keyChar == 45 || keyChar == 46 || keyChar == 112 || keyChar == 113 || keyChar == 115 || (keyChar >= 117 && keyChar <= 121) || keyChar == 123 || (keyChar >= 186 && keyChar <= 191) || (keyChar >= 219 && keyChar <= 222)){  
            evento.preventDefault();
            return keyChar;
        }
        else{
            resultado = undefined;
            return resultado;
        } 
    }

    function comprobarNumero(keyChar, evento){
        const filtroNumero = "^[0-9]+$";
        let resultado;
        
        if(keyChar.match(filtroNumero) != null){  
            evento.preventDefault();
            return keyChar;
        }
        else{
            resultado = undefined;
            return resultado;
        } 
    }
}