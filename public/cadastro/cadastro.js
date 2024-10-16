import { emitCadastrarUser } from "./socket_front_cadastro.js";

const formCadastro = document.querySelector("#form-cadastro");

formCadastro.addEventListener("submit", e => {
  e.preventDefault();
  //?para pegar elementos de um form, se vc n quiser fazer pelo e / events, pode fazer assim: formCadastro["input-usuario"].value <- dessa forma tbm funciona
  const inputUser = e.target["input-usuario"].value;
  const inputPass = e.target["input-senha"].value;
  if(inputUser && inputPass) emitCadastrarUser({nome: inputUser, senha: inputPass});
});