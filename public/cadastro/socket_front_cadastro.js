// eslint-disable-next-line no-undef
const socket = io();

export function emitCadastrarUser(dados) {
  socket.emit("cadastrar_user", dados);
}

socket.on("cadastro_sucesso", () => {
  alert("Cadastro realizado com sucesso!");
  window.location.replace("/login/index.html");
});
socket.on("user_exists", () => alert("Usuário existente, tente outro nome!"));
socket.on("cadastro_error", () => alert("Falha ao cadastrar, tente novamente!"));