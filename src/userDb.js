import { usuarios } from "./config/dbConnect.js";

export const createUser = (dados) => {
  return usuarios.insertOne({
    ...dados
  });
};