import { documentos } from "../config/dbConnect.js";
import { atualizaDoc, deleteDoc, findDoc } from "../controllerDb.js";
import { addConexao, obterUsers } from "../utils/documentConnect.js";

export default function registrar_documento(socket, io) {
  socket.on("deletar_documento", async (document) => {
    const existeDoc = await findDoc(documentos, document);
    if(!existeDoc) return; 
    else {
      const res = await deleteDoc(existeDoc._id);
      res.acknowledged ? io.emit("remover_front", existeDoc.nome) : "";
    }   
  });

  socket.on("url-document", async ({path, username}, returnTxtCallback) => {//*esse 3º parâmetro returnTxtCallback "resume" um "socket.on" la no frontend, fazendo assim a NÃO necessidade de um socket.on

    const textValues = await findDoc(documentos, path);
    if(textValues) {
      socket.join(path);
      returnTxtCallback(textValues.texto);
      addConexao({ path, username });
      const usersOnDocument = obterUsers(path);
      console.log(usersOnDocument);
      io.to(path).emit("showUsers", usersOnDocument);
    };

    socket.on("text_area", async (textElement)=>{
      const atualiza = await atualizaDoc(textElement, textValues.nome);
      if(atualiza.modifiedCount) socket.to(path).emit("text_area_client", textElement);//?com socket.broadcast ele vai mandar informações para outros clients MENOS ELE MESMO.
    });
  });  
}