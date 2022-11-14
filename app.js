/* 

[] Mostrar os dois numeros e operadores no visor
  [] Só deixar colocar um numero, depois um operador, depois um numero 

[] Realizar a conta do visor e mostrar resultado
*/

const numeros = document.querySelectorAll("[data-number]");
const operadores = document.querySelectorAll("[data-operator]");

const clear = document.querySelector("#clear-btn");
const visor = document.querySelector("#viewfinder");

let mode = "number";
// 'operator'

function verifyWhatWasClicked(event) {
  switch (event) {
    case event === "+":
      break;
    case event === "-":
      break;

    case event === "/":
      break;

    case event === "*":
      break;

    case event === "=":
      break;

    case event === ".":
      break;

    default:
      break;
  }
}

function changeViewFinder(value) {
  if (mode === "number") {
    return (visor.innerHTML += value);
  }

  if (mode === "operator") {
    return (visor.innerHTML += value);
  }
}

function callbackListener(element) {
  element.addEventListener("click", () => {
    let value;
    if (element.dataset.number) {
      value = element.dataset.number;
    }

    if (element.dataset.operator) {
      value = element.dataset.operator;
    }

    changeViewFinder(value);
  });
}

numeros.forEach(callbackListener);
operadores.forEach(callbackListener);
