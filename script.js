//Coletando tags html
let txtImput = document.querySelector("#txtImput");
let inputEntrada = document.querySelector("#inputEntrada");
let paragrafy = document.querySelector("#paragrafy");
let inputPrice = document.querySelector("#inputPrice");
let inputImpress = document.querySelector(".inputImpress");

let numero = 0;

//Variavel que serta armazendos so valores que são inserido nos imputs
let dbLanches = [];
window.addEventListener("load", start);


//Function click add events
function start() {
  txtImput.addEventListener("click", handleInputClick);
}

inputImpress.addEventListener("click", () => {
  document.querySelector(".formulario").classList.add("hide");
});

//function que imprimi em tela/html as tags de resultado
function handleInputClick(e) {
  let impressHTNML = `
    <td class"item-info"> ${(numero += 1)} </td>
    <td> ${inputEntrada.value}</td>
    <td> R$ ${inputPrice.value} </td>
  `;

  paragrafy.innerHTML += impressHTNML;
  e.preventDefault();
  inputEntrada.value = ''
  inputPrice.value = ''
  inputEntrada.focus();
}
