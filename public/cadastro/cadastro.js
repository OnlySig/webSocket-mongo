const formCadastro = document.querySelector("#form-cadastro");

formCadastro.addEventListener("submit", e => {
  e.preventDefault();
  const inputUser = e.target["input-usuario"].value;
  const inputPass = e.target["input-senha"].value;
  if(inputUser && inputPass) {
    alert("Cadastro feito com sucesso!");
    window.location.replace("/login/index.html");
  }
});