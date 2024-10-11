import { MongoClient } from "mongodb";
import "dotenv/config";

const cliente = new MongoClient(process.env.DB_CONNECTION_STRING);

let documentos;

try {
  await cliente.connect();
  const db = cliente.db("alura_websockets");
  console.log("Conectado no banco de dados com sucesso!");
  documentos = db.collection("documentos");
} catch (error) {
  console.log({error: error.message});
}
export { documentos };