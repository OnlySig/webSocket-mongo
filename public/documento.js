import { emitirTextArea, excluirDoc, urlParams } from "./socketFront.js";
const textarea = document.querySelector("#editor-texto");
const titleDoc = document.querySelector("#titulo-documento");
const btnExcluir = document.querySelector("#excluir-documento");
const path = window.location.href.split("=")[1];
titleDoc.innerHTML = path || "Documento sem título";

urlParams(path);

btnExcluir.addEventListener("click", () => {
  const isDell = confirm(`Deletar documento ${path}?`);
  if(isDell) {
    excluirDoc(path, true);
  }
});

textarea.addEventListener("keyup", () => {
  emitirTextArea(textarea.value);
});

export function voltarParaIndex(nameDocument) {
  if(path === nameDocument) {
    alert(`Pagina do documento ${nameDocument} foi excluido!`);
    window.location.replace("/");
  }
}

export function atualizaTextoEditor(element) {
  element ? textarea.value = element : "";
}