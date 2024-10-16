import { usuarios } from "../config/dbConnect.js";
import { findDoc } from "../controllerDb.js";
import { createUser } from "../userDb.js";

function registrar_cadastro(socket, io) {
  socket.on("cadastrar_user", async (dados) => {
    const existe = await findDoc(usuarios, dados.nome);
    if(existe) return socket.emit("user_exists");
    const result = await createUser(dados);
    result.acknowledged ? socket.emit("cadastro_sucesso") : socket.emit("cadastro_error");
  });
}

export default registrar_cadastro;