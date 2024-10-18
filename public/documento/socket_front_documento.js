import { obterCookie } from "../utils/cookies.js";
import { atualizaTextoEditor, showUserConnected, showUsers, voltarParaIndex } from "./documento.js";

// eslint-disable-next-line no-undef
const socket = io("/usuarios", {
  auth: {
    token: obterCookie("tokenJwt")
  }
});
socket.on("auth_success", showUserConnected);
//* Um adendo, o 1º parâmetro da func .emit(), sempre será uma string de "conexão", que será seu id para assim o front e o back se conectarem.
export function urlParams(dados) {
  socket.emit("url-document", dados, (element) => atualizaTextoEditor(element));//*dessa forma colocando o 3 parâmetro no backend do "url-document" vc não precisa usar o socket.on("doc_text"...
}

socket.on("showUsers", (users) => showUsers(users));

socket.on("connect_error", (error) => {
  alert(error);
  window.location.replace("/login/index.html");
});


export function emitirTextArea(textValue) {
  socket.emit("text_area", textValue);
};

//! esse socket.on não precisa ser feito dessa forma, o 3 parâmetro, vulgo callback, da func socket.emit("url-document"... ja faz isso. 
// socket.on("doc_text", (element) => {
//   atualizaTextoEditor(element);
// });

socket.on("text_area_client", (element) => {
  atualizaTextoEditor(element);
});

export function excluirDoc(nameDocument, isHrefDoc = false) {
  socket.emit("deletar_documento", nameDocument, isHrefDoc);
}
socket.on("remover_front", (nameDocument) => {
  voltarParaIndex(nameDocument);
});