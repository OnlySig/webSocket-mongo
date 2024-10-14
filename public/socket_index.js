import { ancorDocs, mostraErro, removerDoc } from "./index.js";

// eslint-disable-next-line no-undef
const socket = io();

socket.emit("listaDocumento", (documents) => documents.forEach(doc => {
  ancorDocs(doc.nome); 
}));

export function getInputValue(inpValue) {
  socket.emit("create_document", inpValue);
}

socket.on("documento_existente", nome => {
  mostraErro(`O documento ${nome} ja existe!`);
});

socket.on("add_document_front", nameDocument => {
  ancorDocs(nameDocument);
});

socket.on("remover_front", nameDocument => {
  removerDoc(nameDocument);
});

export function excluirDoc(nameDocument) {
  socket.emit("deletar_documento", nameDocument);
}