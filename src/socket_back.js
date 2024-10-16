import registrarStart from "./registrarEventos/registrar_rooms.js";
import registrar_documento from "./registrarEventos/registrar_documento.js";
import registrar_cadastro from "./registrarEventos/registrar_cadastro.js";
import io from "./server.js";

io.on("connection", async (socket)=>{
  registrarStart(socket, io);
  registrar_documento(socket, io);
  registrar_cadastro(socket, io);
});