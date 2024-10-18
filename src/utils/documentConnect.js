const listaConexao = [];

export function addConexao(conexao) {
  listaConexao.push(conexao);
}  

export function obterUsers(path) {
  const users = listaConexao.flatMap(doc => doc.path === path ? [doc.username] : []);
  //? eu usei o flatMap, pois da pra "resumir" um filter com map exemplo: listaConexao.filter(doc => doc.path === path).map(doc => doc.username);
  return [...new Set(users)]; //? O new Set é uma estrutura de dados em JavaScript que armazena valores únicos, ou seja, ele remove automaticamente valores duplicados de um array. (vlw chatGpt <3)
}