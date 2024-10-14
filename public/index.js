import "./socket_index.js";

const docList = document.querySelector("#lista-documentos");

export function ancorDocs(nome) {
  docList.innerHTML += `
    <a href=documento.html?nome=${nome} class="list-group-item list-group-item-action">
      ${nome}
    </a>
  `;
}