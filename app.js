let maximoPosible = 10;
let numeroSecreto = 0;
let intentos = 0;
let maxIntentos = 6;
let numeroUsuario = 0;
let listaNumGenerados = [];
console.log(numeroSecreto);


function intentoDeUsuario(){
    let entradaDeUsuario = document.getElementById('entrada_usuario').value;
    intentos++;

    if (!isNaN(entradaDeUsuario)){
        numeroUsuario = parseInt(entradaDeUsuario)
        if (numeroUsuario == numeroSecreto){
            asignarTexto('#parrafo_resultado', `Acertaste!. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos' }`)
            deshabilitarBotones()
            
        }else{
            if (numeroUsuario > numeroSecreto){
                asignarTexto('#parrafo_resultado', 'Te quedaste un poco arriba. Prueba con menos')

            }else{
                asignarTexto('#parrafo_resultado', 'Te falta, prueba con un numero mas grande')

            }
            limpiarCaja()
        }
        if(intentos == 4){
            let pista =  numeroSecreto - numeroUsuario;
            asignarTexto('#parrafo_resultado', `Pista: La suma del ultimo numero que ingresaste más el siguiente: ${pista}, te dará la respuesta`);
        }

        if(intentos > maxIntentos){
            asignarTexto('#parrafo_resultado', 'Se te acabaron los intentos')
            deshabilitarBotones()
        }
    }else{
        alert('Por favor introduce un numero valido');
    }

}

function limpiarCaja(){
    document.getElementById('entrada_usuario').value = '';
}

function asignarTexto(elemento, texto){
    let elementoHhtml = document.querySelector(elemento);
    elementoHhtml.textContent = texto;
}

function deshabilitarBotones(){
    let botonIntento = document.getElementById('intento_boton');
    let botonReinicio= document.getElementById('reiniciar_boton');
    botonIntento.disabled = true;
    botonReinicio.disabled = false;
}

function habilitarBotones(){
    let botonIntento = document.getElementById('intento_boton');
    let botonReinicio= document.getElementById('reiniciar_boton');
    botonIntento.disabled = false;
    botonReinicio.disabled = true;
}

function condicionesIniciales(){
    maximoPosible = 10;
    numeroSecreto = generarNumeroSecreto();
    intentos = 0;
    maxIntentos = 6;
    numeroUsuario = 0;
    limpiarCaja()
    asignarTexto('#parrafo_principal', `Escoge un numero ente 0 y ${maximoPosible}`);
}
function reiniciarJuego(){
    condicionesIniciales();
    habilitarBotones()

}

function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random() * maximoPosible) + 1;
  console.log(listaNumGenerados);
  console.log(numeroGenerado);
if (listaNumGenerados.length == maximoPosible){
    asignarTexto('#parrafo_resultado', 'Ya se sortearon todos los numeros')
}else{
  if (listaNumGenerados.includes(numeroGenerado)){
    return generarNumeroSecreto();
  }else{
    listaNumGenerados.push(numeroGenerado);
    return numeroGenerado;
  }
}
}

/*function pistaRaizcuadrada(){
    let pista = numeroSecreto / numeroSecreto;


}*/

asignarTexto('#titulo_principal', 'Adivina el numero secreto')
asignarTexto('#parrafo_principal', `Escoge un numero ente 0 y ${maximoPosible}`)
condicionesIniciales()



function elevarAlCuadrado(lista){
    let nuevaLista = [];
    for (elemento of lista){
       let newElemento = elemento * elemento;
       nuevaLista.push(newElemento);
    }
    return nuevaLista;
}

let array = [1,2,3,4];
let newArray = elevarAlCuadrado(array);