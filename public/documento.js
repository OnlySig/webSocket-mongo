import { emitirTextArea, excluirDoc, urlParams } from "./socketFront.js";
const textarea = document.querySelector("#editor-texto");
const titleDoc = document.querySelector("#titulo-documento");
const btnExcluir = document.querySelector("#excluir-documento");
const path = window.location.href.split("=")[1];
titleDoc.innerHTML = path;

urlParams(path);

btnExcluir.addEventListener("click", () => {
  const isDell = confirm(`Quer deletar ${path}?`);
  if(isDell) {
    excluirDoc(path);
    window.location.replace("/");
  }
});

textarea.addEventListener("keyup", () => {
  emitirTextArea(textarea.value);
});

export function atualizaTextoEditor(element) {
  element ? textarea.value = element : "";
}