import { createDoc, findAll, findDoc } from "../controllerDb.js";

export default function registrarStart(socket, io) {
  socket.on("listaDocumento", async (returnDocs)=>{
    const findAllDocs = await findAll();
    returnDocs(findAllDocs);
  });

  socket.on("create_document", async newDocName => {
    const existeDoc = await findDoc(newDocName);
    if(existeDoc) {
      return io.emit("documento_existente", newDocName);
    };
    const res = await createDoc(newDocName);
    res.acknowledged ? io.emit("add_document_front", newDocName) : "";
  });
}