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

export {
  findDoc,
  atualizaDoc
};