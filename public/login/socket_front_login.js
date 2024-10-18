import { definirCookie } from "../utils/cookies.js";

// eslint-disable-next-line no-undef
const socket = io();

export function emitLogarUser(dados) {
  socket.emit("logar_user", dados);
}

socket.on("user_notFound", (nome) => alert(`Usuário ${nome} não encontrado, tente novamente!`));
socket.on("user_autenticado", (tokenJwt)=> {
  definirCookie("tokenJwt", tokenJwt);
  window.location.replace("/");
});
socket.on("invalid_password", () => alert("Senha inválida, tente novamente!"));