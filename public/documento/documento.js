import { emitirTextArea, excluirDoc, urlParams } from "./socket_front_documento.js";
const textarea = document.querySelector("#editor-texto");
const titleDoc = document.querySelector("#titulo-documento");
const btnExcluir = document.querySelector("#excluir-documento");
const listaUsers = document.querySelector("#usuarios-conectados");
const path = window.location.href.split("=")[1];
titleDoc.innerHTML = path || "Documento sem título";

export function showUserConnected(username) {
  urlParams({path, username});
}

export function showUsers(users) {
  listaUsers.innerHTML = "";
  users.forEach(user => {
    listaUsers.innerHTML += `
      <li class="list-group-item">${user}</li>
    `;
  });
}

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
    window.location.replace("../index.html");
  }
}

export function atualizaTextoEditor(element) {
  element ? textarea.value = element : "";
}