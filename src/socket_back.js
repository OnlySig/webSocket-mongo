import registrarStart from "./registrarEventos/registrar_rooms.js";
import registrar_documento from "./registrarEventos/registrar_documento.js";
import registrar_cadastro from "./registrarEventos/registrar_cadastro.js";
import registrar_login from "./registrarEventos/registrar_login.js";
import io from "./server.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios"); //?nsp = namespaces / https://www.alura.com.br/artigos/namespaces-evitar-conflitos-codigo-javascript

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket)=>{
  registrarStart(socket, nspUsuarios);
  registrar_documento(socket, nspUsuarios);
});

io.on("connection", async (socket)=>{
  registrar_cadastro(socket, io);
  registrar_login(socket, io);
});