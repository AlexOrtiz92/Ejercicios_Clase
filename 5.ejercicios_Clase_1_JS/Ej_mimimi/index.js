const textArea = document.querySelector("#text");
console.log(textArea);

const convertButton = document.querySelector("#convert");
console.log(convertButton);

const opinion = document.querySelector("#opinion");
console.log(opinion);

convertButton.onclick = () => {
  const { value: text } = textArea;
  const newText = text.replace(/[aeou]/gi, "i");

  /*No toques la siguiente línea*/
  opinion.innerHTML = `<b>${newText}</b>`;
};

/*Asi es como estaba antes


const textArea = document.querySelector("#text");
const convertButton = document.querySelector("#convert");
const opinion = document.querySelector("#opinion");
convertButton.onclick = () => {
  const { value: text } = textArea;
  const newText = "";

  No toques la siguiente línea
  
  opinion.innerHTML = `<b>${newText}</b>`;
};*/

/*SOLUCION IVAN
const textArea = document.querySelector("#text");
const convertButton = document.querySelector("#convert");
const opinion = document.querySelector("#opinion");
convertButton.onclick = () => {
  const { value: text } = textArea;
  const pattern = /[aeiouÀ-ú]/gm;
  const newText = text.replace(pattern, "i");

  opinion.innerHTML = `<b>${newText}</b>`;
};
*/
