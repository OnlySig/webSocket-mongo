import { documentos } from "./config/dbConnect.js";

const findDoc = async (nome) => documentos.findOne({ nome });

const atualizaDoc = async (texto, nome) => {
  const att = documentos.updateOne({
    nome
  }, {
    $set: {
      texto
    }
  });
  return att;
};

async function findAll() {
  const docs = await documentos.find().toArray();//!sem esse toArray() ele retorna um objeto cheio de informações tecnicas do banco de dados.
  return docs;
} 

export {
  findDoc,
  atualizaDoc,
  findAll
};