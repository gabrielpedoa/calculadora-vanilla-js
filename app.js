/* 

[] Mostrar os dois numeros e operadores no visor
  [] Só deixar colocar um numero, depois um operador, depois um numero 
  [] O 0 nunca pode ser o primeiro numero
  [] 

[] Realizar a conta do visor e mostrar resultado
*/

const numeros = document.querySelectorAll("[data-number]");
const operadores = document.querySelectorAll("[data-operator]");

const clear = document.querySelector("#clear-btn");
const visor = document.querySelector("#viewfinder");

let mode = "number";

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

function changeViewFinder(value, type) {
  if (mode === "operator" && type === "operator") {
    let actualViewfinderText = visor.innerHTML;

    const newViewfinderText = `${actualViewfinderText.substring(
      0,
      actualViewfinderText.length - 1
    )}${value}`;

    mode = "operator";
    return (visor.innerHTML = newViewfinderText);
  }

  if (mode === "number" && type === "operator") {
    mode = "operator";
    return (visor.innerHTML += value);
  }

  mode = "number";
  return (visor.innerHTML += value);
}

function callbackListener(element) {
  element.addEventListener("click", () => {
    let value, type;
    if (element.dataset.number) {
      value = element.dataset.number;
      type = "number";
    }

    if (element.dataset.operator) {
      value = element.dataset.operator;
      type = "operator";
    }

    changeViewFinder(value, type);
  });
}

numeros.forEach(callbackListener);
operadores.forEach(callbackListener);
