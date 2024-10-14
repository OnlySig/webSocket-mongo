import { ancorDocs } from "./index.js";

// eslint-disable-next-line no-undef
const socket = io();

socket.emit("listaDocumento", (documents) => documents.forEach(doc => {
  ancorDocs(doc.nome); 
}));