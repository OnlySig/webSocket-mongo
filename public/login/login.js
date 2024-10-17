import { emitLogarUser } from "./socket_front_login.js";

const formCadastro = document.querySelector("#form-login");

formCadastro.addEventListener("submit", e => {
  e.preventDefault();
  //?para pegar elementos de um form, se vc n quiser fazer pelo e / events, pode fazer assim: formCadastro["input-usuario"].value <- dessa forma tbm funciona
  const inputUser = e.target["input-usuario"].value;
  const inputPass = e.target["input-senha"].value;
  if(inputUser && inputPass) emitLogarUser({nome: inputUser, senha: inputPass});
});