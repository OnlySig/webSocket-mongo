import { documentos } from "./config/dbConnect.js";

const createDoc = async (nome) => {
  const newDoc = documentos.insertOne({
    nome,
    texto: ""
  });
  return newDoc;
};

const findDoc = async (colecao, nome) => colecao.findOne({ nome });

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

const deleteDoc = (_id) => {
  const dellDoc = documentos.deleteOne({
    _id
  });
  return dellDoc;
};

const findAll = async () => {
  //?sem esse toArray() ele retorna um CURSOR. 
  //?Cursor é um tipo de dado do MongoDB otimizado para lidar com grandes quantidades de dados, para retornar os dados em sí tem q usar esse toArray();
  //?Doc de cursor do mongoDB: https://www.mongodb.com/pt-br/docs/drivers/node/current/fundamentals/crud/read-operations/cursor/
  const docs = await documentos.find().toArray();
  return docs;
}; 

export {
  findDoc,
  atualizaDoc,
  findAll,
  createDoc,
  deleteDoc
};