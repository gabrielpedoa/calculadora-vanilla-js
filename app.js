const visor = document.querySelector('.visor-total');
const numeros = document.querySelectorAll('.numero')
const operadores = document.querySelectorAll('.operador');
const clear = document.querySelector('.clear');
const igual = document.querySelector('.igual');
let resultado;

numeros.forEach((numero) => {
  numero.addEventListener('click', function (evento){
    const value = evento.target.innerText;
    
    visor.innerHTML += value
  })
})



