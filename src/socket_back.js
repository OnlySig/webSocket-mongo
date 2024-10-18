import registrarStart from "./registrarEventos/registrar_rooms.js";
import registrar_documento from "./registrarEventos/registrar_documento.js";
import registrar_cadastro from "./registrarEventos/registrar_cadastro.js";
import registrar_login from "./registrarEventos/registrar_login.js";
import io from "./server.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

io.use(autorizarUsuario);

io.on("connection", async (socket)=>{
  registrarStart(socket, io);
  registrar_documento(socket, io);
  registrar_cadastro(socket, io);
  registrar_login(socket, io);
});