
const ningun_mensaje = document.querySelector(".ningun_mensaje");

const aEncriptar = document.querySelector(".a_encriptar");

const mensaje = document.querySelector(".mensaje");


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(aEncriptar.value);
    aEncriptar.value = "";
    ningun_mensaje.style.display = "none";
    mensaje.value = textoEncriptado;
    mensaje.style.display = "block";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(mensaje.value);
    mensaje.value = textoDesencriptado;
    ningun_mensaje.style.display = "none";
    mensaje.style.display = "block";
}

function btnCopiar(){
    copiarMensaje(mensaje);
}

function encriptar(stringEncriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptar;
}

function desencriptar(stringDesencriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptar;
}


function copiarMensaje(stringMensaje) {
    stringMensaje.select();
    stringMensaje.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(stringMensaje.value);
}