/*
* Juego del Número Secreto
* molkychi
* Juego para adivinar un número entre el 1 y 10. 
* Se cuenta con un máximo de 10 intentos. Después de estos,
* se debe reiniciar el juego manualmente al refrescar la página.
* Se le indica al usuario el número de intentos que hizo para
* adivinar el número generado.
*/
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//console.log('numSecr: '+numeroSecreto);

//Función para colocar texto en elementos de pantalla
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Función que se usará al hacer click en un botón
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroSecreto===numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero es menor');
        }else{
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
        console.log(intentos);
    }
    return;
}

//Función para limpiar caja donde usuario ingresa número
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

//Función para generar un número
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    
    //console.log('numGene: '+numeroGenerado);
    //console.log(listaNumerosSorteados); 
    
    //Si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){        
        asignarTextoElemento('p','Ya se sortearon todos los números posibles. Nuevo juego');      
    }else{
        //Si el numero generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//Función para establecer el primer juego
function condicionesIniciales(){ 
	asignarTextoElemento('h1','Juego del número secreto!');
	asignarTextoElemento('p','Indica un número del 1 al 10');
	numeroSecreto = generarNumeroSecreto();
	intentos = 1;
} 

//Función para tener un nuevo intento de juego
function reiniciarJuego(){
	//limpiar Caja
	limpiarCaja();

	//Indicar mensaje de intervalo de números
	//Generar número aleatorio
    //Inicializar número de intentos
	condicionesIniciales();

	//Deshabilitar el botón de nuevo juego
	document.querySelector('#reiniciar').setAttribute('disabled','true');
}

//Inicializar programa
condicionesIniciales();