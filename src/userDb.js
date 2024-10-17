import { usuarios } from "./config/dbConnect.js";
import createHash from "./utils/createHash.js";

export const createUser = (dados) => {
  const { hashSenha, salSenha } = createHash(dados.senha);
  return usuarios.insertOne({
    nome: dados.nome, hashSenha, salSenha
  });
};