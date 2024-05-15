const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

/* ACTUALIZAR TEXTO PÁRRAFOS P */
textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde,azul){
  const colorRGB=`rgb(${rojo},${verde},${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

/* Para actualizar los colores */
inputRojo.addEventListener('change',(r)=>{
  rojo = r.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde,azul)
});

inputVerde.addEventListener('change',(g)=>{
  verde = g.target.value;
  textoVerde.textContent = verde;
  actualizarColor(rojo, verde,azul)
});

inputAzul.addEventListener('change',(b)=>{
  azul = b.target.value;
  textoAzul.textContent = azul;
  actualizarColor(rojo, verde,azul)
});


