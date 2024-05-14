// Seleccionar los elementos del DOM
const boton = document.querySelector('button');
const color = document.getElementById('color');

function generarColorRandom(){
    let digitos ='0123456789ABCDEF';
    let colorHex = '#';

    for(let i =0; i<6; i++){
        let indiceRandom = Math.floor(Math.random()*16); //16 caracteres posibles
        colorHex +=digitos[indiceRandom];
    }
    return colorHex;
}

function cambiarBackground(e){
    let colorRandom = generarColorRandom();

    // Actualizar el texto
    color.textContent = colorRandom;

    // Actualizar el color del fondo
    document.body.style.backgroundColor = colorRandom;
    console.log("hola")
}

boton.addEventListener('click', function(){
    cambiarBackground();
});
