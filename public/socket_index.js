import { ancorDocs, mostraErro, removerDoc } from "./index.js";

// eslint-disable-next-line no-undef
const socket = io();

socket.on("connect_error", (error) => { //? evento interno do socket.io, disparado pelo back quando tem um middleware vulgo next retorna um erro;
  alert(error);
  window.location.replace("/login/index.html");
});

socket.emit("listaDocumento", (documents) => documents.forEach(doc => 
  ancorDocs(doc.nome)
));

export function getInputValue(inpValue) {
  socket.emit("create_document", inpValue);
}

socket.on("documento_existente", nome => {
  mostraErro(`O documento ${nome} ja existe!`);
});

socket.on("add_document_front", nameDocument => {
  ancorDocs(nameDocument);
});

socket.on("remover_front", (nameDocument,) => {
  removerDoc(nameDocument);
});

export function excluirDoc(nameDocument, isHrefDoc = false) {
  socket.emit("deletar_documento", nameDocument, isHrefDoc);
}