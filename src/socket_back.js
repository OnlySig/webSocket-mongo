import registrar_documento from "./registrarEventos_start/registrar_documento.js";
import registrarStart from "./registrarEventos_start/registrar_rooms.js";
import io from "./server.js";

io.on("connection", async (socket)=>{
  registrarStart(socket, io);
  registrar_documento(socket, io);
});