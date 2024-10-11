import io from "./server.js";

io.on("connection", (socket)=>{
  console.log("Um cliente se conectou! ID:", socket.id);
  socket.on("url-document", (url_document) => {
    socket.join(url_document);
    socket.on("text_area", (element)=>{
      socket.to(url_document).emit("text_area_client", element); // com socket.broadcast ele vai mandar informações para outros clients MENOS ELE MESMO.
    });
  });

  socket.on("disconnect", (reason)=>{
    console.log(`Cliente ${socket.id} desconectado, motivo: ${reason}`);
  });
});