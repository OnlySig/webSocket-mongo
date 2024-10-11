import { emitirTextArea, urlParams } from "./socketFront.js";

const textarea = document.querySelector("#editor-texto");
const path = window.location.href.split("=")[1];

const titleDoc = document.querySelector("#titulo-documento");
titleDoc.innerHTML = path;
urlParams(path);

textarea.addEventListener("keyup", () => {
  emitirTextArea(textarea.value);
});

export function atualizaTextoEditor(element) {
  element ? textarea.value = element : "";
}