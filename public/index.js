import "./socket_index.js";
import { excluirDoc, getInputValue } from "./socket_index.js";

const form = document.querySelector("#form-adiciona-documento");
const docList = document.querySelector("#lista-documentos");
const res = document.querySelector("#res");

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const inputDoc = e.target.elements[0];
  getInputValue(inputDoc.value);
  inputDoc.value = "";
  res.innerHTML = "";
});

export function mostraErro(erroMsg) {
  res.innerHTML = erroMsg;
}
export function ancorDocs(nome) {
  const newDiv = document.createElement("div");
  newDiv.classList.add(nome);
  newDiv.classList.add("documento");

  const newBtn = document.createElement("button");
  newBtn.classList.add("excluir");
  newBtn.innerHTML = "x";

  const newLink = document.createElement("a");
  newLink.href = `documento.html?nome=${nome}`;
  newLink.classList.add("list-group-item", "list-group-item-action");
  newLink.textContent = nome;

  newDiv.appendChild(newLink);
  newDiv.appendChild(newBtn);

  docList.appendChild(newDiv);
  const btnExcluir = document.querySelectorAll(".excluir");
  btnExcluir.forEach(btn => {
    btn.addEventListener("click", (e)=>{
      excluirDoc(e.target.previousElementSibling.textContent);
    });
  });
}

export function removerDoc(nomeDoDocumento) {
  const rmElement = document.querySelector(`.${nomeDoDocumento}`);
  rmElement.remove();
}