import { atualizaTextoEditor } from "./documento.js";

// eslint-disable-next-line no-undef
const socket = io();

export function urlParams(url) {
  socket.emit("url-document", url);
}

export function emitirTextArea(textValue) {
  socket.emit("text_area", textValue);
}

socket.on("text_area_client", (element) => {
  atualizaTextoEditor(element);
});