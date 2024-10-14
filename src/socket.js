import { atualizaDoc, findAll, findDoc } from "./controllerDb.js";
import io from "./server.js";

io.on("connection", async (socket)=>{
  socket.on("listaDocumento", async (returnDocs)=>{

    const findAllDocs = await findAll();
    returnDocs(findAllDocs);
  
  });

  socket.on("url-document", async (url_document, returnTxtCallback) => {//*esse 3º parâmetro returnTxtCallback "resume" um "socket.on" la no frontend, fazendo assim a NÃO necessidade de um socket.on

    socket.join(url_document);
    const textValues = await findDoc(url_document);
    if(textValues) returnTxtCallback(textValues.texto);//?socket.emit("doc_text", textValues.texto);

    socket.on("text_area", async (textElement)=>{
      const atualiza = await atualizaDoc(textElement, textValues.nome);
      if(atualiza.modifiedCount) socket.to(url_document).emit("text_area_client", textElement);//?com socket.broadcast ele vai mandar informações para outros clients MENOS ELE MESMO.
    });
  });  

  socket.on("disconnect", (reason)=>{
    console.log(`Cliente ${socket.id} desconectado, motivo: ${reason}`);
  });
});